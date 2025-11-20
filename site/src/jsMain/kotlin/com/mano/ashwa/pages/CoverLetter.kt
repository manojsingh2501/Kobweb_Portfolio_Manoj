// Adjust right spacing: use padding-right and constrain content max width for consistent right margin
package com.mano.ashwa.pages

import androidx.compose.runtime.Composable
import com.mano.ashwa.LocalAppColorMode
import com.mano.ashwa.components.layouts.PageLayoutData
import com.mano.ashwa.navigation.CoverLetter_Route
import com.mano.ashwa.pageTitleStyle
import com.mano.ashwa.highlightStyle
import com.mano.ashwa.normalTextStyle
import com.mano.ashwa.toSitePalette
import com.varabyte.kobweb.compose.foundation.layout.Column
import com.varabyte.kobweb.compose.ui.Alignment
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.graphics.Colors
import com.varabyte.kobweb.compose.ui.modifiers.backgroundColor
import com.varabyte.kobweb.compose.ui.modifiers.color
import com.varabyte.kobweb.compose.ui.modifiers.fillMaxWidth
import com.varabyte.kobweb.compose.ui.modifiers.gap
import com.varabyte.kobweb.compose.ui.modifiers.margin
import com.varabyte.kobweb.compose.ui.modifiers.padding
import com.varabyte.kobweb.compose.ui.toAttrs
import com.varabyte.kobweb.core.Page
import com.varabyte.kobweb.core.data.add
import com.varabyte.kobweb.core.init.InitRoute
import com.varabyte.kobweb.core.init.InitRouteContext
import com.varabyte.kobweb.core.layout.Layout
import com.varabyte.kobweb.silk.components.text.SpanText
import com.varabyte.kobweb.silk.style.toModifier
import org.jetbrains.compose.web.css.px
import org.jetbrains.compose.web.dom.P

@InitRoute
fun initCoverLetterPage(ctx: InitRouteContext) {
    ctx.data.add(PageLayoutData("Ashwani Cover Letter"))
}

val keywords = listOf(
    "Dear Hiring Manager",
    "Kotlin Multiplatform",
    "Tech Lead",
    "Full Stack",
    "GoLang (GIN)",
    "Compose UI",
    "network performance",
    "memory profilers",
    "prompt engineering",
    "Bluetooth & NearBy discovery",
    "app optimization",
    "maintainability",
    "GIN framework",
    "Kotlin",
    "Android",
    "GoLang",
    "Jetpack",
    "Ktor",
    "Coroutines",
    "GraphQL",
    "Firebase",
    "Keycloak",
    "Kobweb",
    "Koog",
    "SOLID",
    "MVVM",
    "MVI",
    "telecom",
    "ADB",
    "AI"
).sortedByDescending { it.length }

@Page(CoverLetter_Route)
@Layout(".components.layouts.PageLayout")
@Composable
fun CoverLetter() {
    val current = LocalAppColorMode.current.value
    val sitePal = current.toSitePalette()
    Column(
        Modifier.fillMaxWidth().backgroundColor(sitePal.nearBackground),
    ) {
        SpanText("My Cover Letter",
            modifier = pageTitleStyle.toModifier().padding(top=40.px).color(sitePal.pageTitleColor).align(alignment = Alignment.CenterHorizontally)
        )

        // Constrain content width to full width and apply left/right margins for gutters
        Column(modifier = Modifier.fillMaxWidth().padding (left = 24.px, right = 64.px)) {
            renderParagraph("Dear Hiring Manager,", sitePal.textColor)
            renderParagraph("", sitePal.textColor)
            renderParagraph("I am writing to express my interest in a position such as Tech Lead, Lead Android / Kotlin Multiplatform Developer, Full Stack Mobile Developer, or GoLang Developer. With over 14 years of hands-on experience in software engineering and mobile application development, I have cultivated a deep technical foundation combined with a passion for innovation and clean, scalable architecture.", sitePal.textColor)
            renderParagraph("", sitePal.textColor)
            renderParagraph("My expertise spans Kotlin Multiplatform Development (Android, iOS, Web), native Android app engineering, and Full Stack web development using the Kobweb framework. I have worked extensively with technologies like Compose UI, Jetpack libraries, Ktor, Coroutines, GraphQL, Firebase, and Keycloak (Identity and Access Management). Additionally, I have strong backend experience in GoLang (GIN framework), enabling me to build efficient microservices and connect mobile and web ecosystems seamlessly.", sitePal.textColor)
            renderParagraph("", sitePal.textColor)
            renderParagraph("Beyond coding, I focus on telecom and network performance, Bluetooth & NearBy discovery, and app optimization, using tools like memory profilers and ADB to resolve performance bottlenecks. I apply SOLID principles and patterns like MVVM and MVI, emphasizing a single business logic approach for cross-platform applications to ensure reliability, maintainability, and scalability.", sitePal.textColor)
            renderParagraph("", sitePal.textColor)
            renderParagraph("Currently, I lead teams and oversee projects from concept to deployment, ensuring seamless coordination across development, testing, and client communication. I work closely with stakeholders to translate complex requirements into efficient, scalable, and maintainable technical solutions.", sitePal.textColor)
            renderParagraph("", sitePal.textColor)
            renderParagraph("I have been exploring Kobweb, AI integration through the Koog (Kotlin Agentic Framework) and applying prompt engineering techniques to build intelligent, context-aware systems that enhance automation and decision-making within mobile and web applications.", sitePal.textColor)
            renderParagraph("", sitePal.textColor)
            renderParagraph("Thank you for considering my application.", sitePal.textColor)
            renderParagraph("", sitePal.textColor)
            renderParagraph("Sincerely,", sitePal.textColor)
            renderParagraph("Ashwani Kumar Singh", sitePal.textColor)
        }
    }
}

@Composable
fun renderParagraph(para: String, textColor: com.varabyte.kobweb.compose.ui.graphics.Color) {
    if (para.isBlank()) {
        P(attrs = Modifier.margin(bottom = 12.px).toAttrs()) { SpanText("\u00A0") }
        return
    }

    val segments = mutableListOf<Pair<String, Boolean>>()
    var idx = 0
    val lower = para.lowercase()
    while (idx < para.length) {
        var earliestPos = Int.MAX_VALUE
        var earliestKey: String? = null
        for (key in keywords) {
            val pos = lower.indexOf(key.lowercase(), idx)
            if (pos >= 0 && pos < earliestPos) {
                earliestPos = pos
                earliestKey = key
            }
        }
        if (earliestKey == null) {
            segments.add(para.substring(idx) to false)
            break
        } else {
            if (earliestPos > idx) {
                segments.add(para.substring(idx, earliestPos) to false)
            }
            val keyLen = earliestKey.length
            segments.add(para.substring(earliestPos, earliestPos + keyLen) to true)
            idx = earliestPos + keyLen
        }
    }

    P(attrs = Modifier.margin(bottom = 12.px).toAttrs()) {
        for ((text, isHighlight) in segments) {
            if (isHighlight) {
                SpanText(text, modifier = highlightStyle.toModifier().color(textColor))
            } else {
                SpanText(text, modifier = normalTextStyle.toModifier().color(textColor))
            }
        }
    }
}