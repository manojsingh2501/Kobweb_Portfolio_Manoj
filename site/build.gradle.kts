import kotlinx.html.HEAD
import kotlinx.html.meta
import com.varabyte.kobweb.gradle.application.util.configAsKobwebApplication
import org.gradle.api.tasks.Delete

plugins {
    alias(libs.plugins.kotlin.multiplatform)
    alias(libs.plugins.compose.compiler)
    alias(libs.plugins.kobweb.application)
    alias(libs.plugins.kobwebx.markdown)
}

fun HEAD.meta(property: String, content: String) {
    meta {
        attributes["property"] = property
        this.content = content
    }
}

group = "com.mano.ashwa"
version = "1.0-SNAPSHOT"

kobweb {
    app {
        index {
            val url = ""
            val authorStr = "Ashwani Kumar Singh"

            val descriptionStr = """
				Hi, I'm Ashwani Kumar Singh, a software engineer based in India, and I'm passionate about mobile technology and AgenticAI.
				Discover my projects and my blog on this website.
			""".trimIndent()

            //val image = "$url/images/avatar.webp"

            description.set(descriptionStr)

            globals.put("author", authorStr)
            globals.put("description", descriptionStr)
            globals.put("url", url)

            faviconPath = "/logo.png"
        }
    }
}

kotlin {
    // This example is frontend only. However, for a fullstack app, you can uncomment the includeServer parameter
    // and the `jvmMain` source set below.
    configAsKobwebApplication("ashwa" /*, includeServer = true*/)

    sourceSets {
        jsMain.dependencies {
            implementation(libs.compose.runtime)
            implementation(libs.compose.html.core)
            implementation(libs.kobweb.core)
            implementation(libs.kobweb.silk)
            // This default template uses built-in SVG icons, but what's available is limited.
            // Uncomment the following if you want access to a large set of font-awesome icons:
            implementation(libs.silk.icons.fa)
            implementation(libs.kobwebx.markdown)
            implementation(libs.kotlin.bootstrap)
        }
    }
}

// Register a small task to remove KSP caches which can sometimes become stale and cause
// `Storage for ... is already registered` IllegalStateExceptions when running the dev server.
// We only delete the transient build/kspCaches directory (safe to regenerate).

tasks.register<Delete>("cleanKspCaches") {
    delete(file("build/kspCaches"))
    doLast {
        println("[build] cleanKspCaches: removed build/kspCaches to avoid stale KSP storage registrations.")
    }
}

// Ensure the Kobweb start task runs the cache-clean first.
// The kobweb run wrapper starts the plugin's server task, which is `kobwebStart` in this project.
tasks.named("kobwebStart") {
    dependsOn(tasks.named("cleanKspCaches"))
}
