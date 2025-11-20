import androidx.compose.runtime.Composable
import androidx.compose.runtime.ProvidableCompositionLocal
import androidx.compose.runtime.compositionLocalOf
import com.varabyte.kobweb.browser.api
import com.varabyte.kobweb.core.AppGlobals
import com.varabyte.kobweb.navigation.BasePath
import com.varabyte.kobweb.navigation.Router
import com.varabyte.kobweb.navigation.UpdateHistoryMode
import com.varabyte.kobweb.navigation.remove
import com.varabyte.kobweb.silk.defer.DeferringHost
import kotlin.Any
import kotlin.Unit
import kotlinx.browser.document
import kotlinx.browser.window
import kotlinx.dom.hasClass
import kotlinx.dom.removeClass
import org.jetbrains.compose.web.renderComposable
import org.w3c.dom.EventSource
import org.w3c.dom.EventSourceInit
import org.w3c.dom.MessageEvent
import org.w3c.dom.`get`
import com.mano.ashwa.components.layouts.MarkdownLayout as _com_mano_ashwa_components_layouts_MarkdownLayout
import com.mano.ashwa.components.layouts.PageLayout as _com_mano_ashwa_components_layouts_PageLayout
import com.mano.ashwa.pages.AboutMe as _com_mano_ashwa_pages_AboutMe
import com.mano.ashwa.pages.AboutPage as _com_mano_ashwa_pages_AboutPage
import com.mano.ashwa.pages.CoverLetter as _com_mano_ashwa_pages_CoverLetter
import com.mano.ashwa.pages.Experiences as _com_mano_ashwa_pages_Experiences
import com.mano.ashwa.pages.HomePage as _com_mano_ashwa_pages_HomePage
import com.mano.ashwa.pages.Projects as _com_mano_ashwa_pages_Projects
import com.mano.ashwa.pages.SkillPage as _com_mano_ashwa_pages_SkillPage

private val LayoutScopeLocal: ProvidableCompositionLocal<Any?> = compositionLocalOf<Any?> { null }

@Composable
private fun <T : Any> currentLayoutScope(): T {
    @Suppress("UNCHECKED_CAST")
    return LayoutScopeLocal.current as? T
        ?: error("Unexpected between Page/Layout scope and the parent Layout which it is providing it. Please report this issue to the Kobweb developers.")
}

@Composable
private fun <T : Any> provideLayoutScope(layoutScope: T, content: @Composable () -> Unit) {
    androidx.compose.runtime.CompositionLocalProvider(LayoutScopeLocal provides layoutScope, content = content)
}

private fun forceReloadNow() {
    window.stop()
    window.location.reload()
}

private fun handleServerStatusEvents() {
    val status = document.getElementById("status")!!
    var lastVersion: Int? = null
    var shouldReload = false

    val warningIcon = status.children[0]!!
    val spinnerIcon = status.children[1]!!
    val statusText = status.children[2]!!

    status.addEventListener("transitionend", {
        if (status.hasClass("fade-out")) {
            status.removeClass("fade-out")
            if (shouldReload) {
                forceReloadNow()
            }
        }
    })

    val eventSource = EventSource("/api/kobweb-status", EventSourceInit(true))
    eventSource.addEventListener("version", { evt ->
        val version = (evt as MessageEvent).data.toString().toInt()
        if (lastVersion == null) {
            lastVersion = version
        }
        if (lastVersion != version) {
            lastVersion = version
            if (document.asDynamic().hidden) {
                // Reload immediately when the page is not visible as the animation will not run
                forceReloadNow()
            } else if (status.className.isNotEmpty()) {
                shouldReload = true
            } else {
                // Not sure if we can get here but if we can't rely on the status transition
                // to reload we should do it ourselves.
                forceReloadNow()
            }
        }
    })

    eventSource.addEventListener("status", { evt ->
        val values: dynamic = JSON.parse<Any>((evt as MessageEvent).data.toString())
        val text = values.text as String
        val isError = (values.isError as String).toBoolean()
        if (text.isNotBlank()) {
            warningIcon.className = if (isError) "visible" else "hidden"
            spinnerIcon.className = if (isError) "hidden" else "visible"
            statusText.innerHTML = "<i>$text</i>"
            status.className = "fade-in"
        } else {
            if (status.className == "fade-in") {
                status.className = "fade-out"
            }
        }
    })

    eventSource.onerror = { eventSource.close() }
}

public fun main() {
    handleServerStatusEvents()

    window.api.logOnError = true

    AppGlobals.initialize(mapOf("title" to "Ashwani Kumar Singh", "author" to "Ashwani Kumar Singh", "description" to """
            |Hi, I'm Ashwani Kumar Singh, a software engineer based in India, and I'm passionate about mobile technology and AgenticAI.
            |Discover my projects and my blog on this website.
            """.trimMargin(), "url" to ""))
    BasePath.set("")
    val router = Router()
    com.varabyte.kobweb.core.init.initKobweb(router) { ctx ->
        ctx.router.registerLayout(
            "com.mano.ashwa.components.layouts.MarkdownLayout",
            parentLayoutId = "com.mano.ashwa.components.layouts.PageLayout",
            initRouteMethod = { ctx ->
                com.mano.ashwa.components.layouts.initMarkdownLayout(ctx)
            },
        ) { pageCtx, pageMethod -> 
            _com_mano_ashwa_components_layouts_MarkdownLayout {
                pageMethod(pageCtx)
            }
        }
        ctx.router.registerLayout(
            "com.mano.ashwa.components.layouts.PageLayout",
        ) { pageCtx, pageMethod -> 
            _com_mano_ashwa_components_layouts_PageLayout(pageCtx) {
                provideLayoutScope(this) {
                    pageMethod(pageCtx)
                }
            }
        }
        ctx.router.register(
            "/",
            layoutId = "com.mano.ashwa.components.layouts.PageLayout",
            initRouteMethod = { ctx ->
                com.mano.ashwa.pages.initHomePage(ctx)
            },
        ) { pageCtx -> 
            _com_mano_ashwa_pages_HomePage(pageCtx)
        }
        ctx.router.register(
            "/about",
            layoutId = "com.mano.ashwa.components.layouts.MarkdownLayout",
            initRouteMethod = { ctx ->
                com.mano.ashwa.pages.initAboutPage(ctx)
            },
        ) { pageCtx -> 
            _com_mano_ashwa_pages_AboutPage()
        }
        ctx.router.register(
            "/aboutme",
        ) { pageCtx -> 
            _com_mano_ashwa_pages_AboutMe()
        }
        ctx.router.register(
            "/cover-letter",
            layoutId = "com.mano.ashwa.components.layouts.PageLayout",
            initRouteMethod = { ctx ->
                com.mano.ashwa.pages.initCoverLetterPage(ctx)
            },
        ) { pageCtx -> 
            _com_mano_ashwa_pages_CoverLetter()
        }
        ctx.router.register(
            "/experiences",
            layoutId = "com.mano.ashwa.components.layouts.PageLayout",
            initRouteMethod = { ctx ->
                com.mano.ashwa.pages.initExperiencesPage(ctx)
            },
        ) { pageCtx -> 
            _com_mano_ashwa_pages_Experiences()
        }
        ctx.router.register(
            "/project",
            layoutId = "com.mano.ashwa.components.layouts.PageLayout",
            initRouteMethod = { ctx ->
                com.mano.ashwa.pages.initMyProjectsPage(ctx)
            },
        ) { pageCtx -> 
            _com_mano_ashwa_pages_Projects()
        }
        ctx.router.register(
            "/skill",
            layoutId = "com.mano.ashwa.components.layouts.PageLayout",
            initRouteMethod = { ctx ->
                com.mano.ashwa.pages.initSkillPage(ctx)
            },
        ) { pageCtx -> 
            _com_mano_ashwa_pages_SkillPage()
        }

    }
    router.addRouteInterceptor {
        path = path.removeSuffix(".html").removeSuffix(".htm")
    }

    com.varabyte.kobweb.silk.init.additionalSilkInitialization = { ctx ->
        com.varabyte.kobweb.silk.init.initSilkWidgets(ctx)
        com.varabyte.kobweb.silk.init.initSilkWidgetsKobweb(ctx)
        ctx.theme.registerStyle("headline-text", com.mano.ashwa.HeadlineTextStyle)
        ctx.theme.registerStyle("subheadline-text", com.mano.ashwa.SubheadlineTextStyle)
        ctx.theme.registerStyle("page-title", com.mano.ashwa.pageTitleStyle)
        ctx.theme.registerStyle("highlight", com.mano.ashwa.highlightStyle)
        ctx.theme.registerStyle("normal-text", com.mano.ashwa.normalTextStyle)
        ctx.theme.registerStyle("banner", com.mano.ashwa.styles.bannerStyle)
        ctx.theme.registerStyle("gradient-tag-line", com.mano.ashwa.styles.GradientTagLineStyle)
        ctx.theme.registerStyle("button", com.mano.ashwa.styles.buttonStyle)
        ctx.theme.registerStyle("markdown", com.mano.ashwa.components.layouts.MarkdownStyle)
        ctx.theme.registerStyle("page-content", com.mano.ashwa.components.layouts.PageContentStyle)
        ctx.theme.registerStyle("hero-container", com.mano.ashwa.pages.HeroContainerStyle)
        ctx.theme.registerStyle("home-grid", com.mano.ashwa.pages.HomeGridStyle)
        ctx.theme.registerStyle("home-grid-cell", com.mano.ashwa.pages.HomeGridCellStyle)
        ctx.theme.registerVariant("-circle", com.mano.ashwa.CircleButtonVariant
        )
        ctx.theme.registerVariant("-uncolored", com.mano.ashwa.UncoloredButtonVariant
        )
        ctx.theme.registerKeyframes("zoom-in", com.mano.ashwa.styles.zoomIn)
        ctx.theme.registerKeyframes("up-down", com.mano.ashwa.styles.upDownAnim)
        com.mano.ashwa.initSiteStyles(ctx)
        com.mano.ashwa.initColorMode(ctx)
        com.mano.ashwa.initStyles(ctx)
        com.mano.ashwa.initTheme(ctx)
        com.stevdza.san.kotlinbs.initBuildScriptLayers(ctx)
    }

    // Dedup any leading slashes after removing the origin, just in case someone typed
    // something like `https://site.com//about` by accident. If we pass `//about` into
    // `tryRoutingTo`, Kobweb will reject it as a protocol-relative URL; instead, we
    // want it to navigate to `/about`
    router.tryRoutingTo(BasePath.remove("/" + window.location.href.removePrefix(window.origin).trimStart('/')), UpdateHistoryMode.REPLACE)

    // For SEO, we may bake the contents of a page in at build time. However, we will
    // overwrite them the first time we render this page with their composable, dynamic
    // versions. Think of this as poor man's hydration :)
    // See also: https://en.wikipedia.org/wiki/Hydration_(web_development)
    val root = document.getElementById("_kobweb-root")!!
    while (root.firstChild != null) { root.removeChild(root.firstChild!!) }

    renderComposable(rootElementId = "_kobweb-root") {
        com.mano.ashwa.AppEntry {
            router.renderActivePage { DeferringHost { it() } }
        }
    }
}
