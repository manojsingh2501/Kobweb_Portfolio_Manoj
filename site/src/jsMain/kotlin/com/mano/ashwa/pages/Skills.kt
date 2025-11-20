package com.mano.ashwa.pages

import org.jetbrains.compose.web.css.fr
import androidx.compose.runtime.Composable
import com.mano.ashwa.components.layouts.PageLayoutData
import com.mano.ashwa.components.widgets.SkillCardView
import com.mano.ashwa.model.SkillData
import com.mano.ashwa.navigation.Skill_Route
import com.varabyte.kobweb.core.Page
import com.varabyte.kobweb.compose.foundation.layout.*
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.graphics.Colors
import com.varabyte.kobweb.silk.components.text.SpanText
import com.varabyte.kobweb.compose.ui.modifiers.*
import org.jetbrains.compose.web.css.px
import org.jetbrains.compose.web.css.DisplayStyle
import com.varabyte.kobweb.compose.ui.Alignment
import com.varabyte.kobweb.compose.ui.toAttrs
import com.varabyte.kobweb.core.data.add
import com.varabyte.kobweb.core.init.InitRoute
import com.varabyte.kobweb.core.init.InitRouteContext
import com.varabyte.kobweb.core.layout.Layout
import org.jetbrains.compose.web.dom.Div
import com.mano.ashwa.LocalAppColorMode
import com.mano.ashwa.pageTitleStyle
import com.mano.ashwa.toSitePalette
import com.varabyte.kobweb.silk.style.toModifier

@InitRoute
fun initSkillPage(ctx: InitRouteContext) {
    ctx.data.add(PageLayoutData("Ashwani Skills"))
}


@Page(Skill_Route)
@Layout(".components.layouts.PageLayout")
@Composable
fun SkillPage() {
    val current = LocalAppColorMode.current.value
    val sitePal = current.toSitePalette()
    Column(
            Modifier.fillMaxWidth().backgroundColor(sitePal.nearBackground).padding(32.px),
            horizontalAlignment = Alignment.CenterHorizontally
        ) {
            SpanText("My Skills", modifier = pageTitleStyle.toModifier().color(sitePal.pageTitleColor))

            Div(
                attrs = Modifier
                    .fillMaxWidth()
                    .display(DisplayStyle.Grid)
                    .gridTemplateColumns {
                        repeat(4) { minmax(250.px, 1.fr) }
                    }
                    .gap(32.px)
                    .toAttrs()
            ) {
                skillCards.forEach { card ->
                    SkillCardView(
                        title = card.title,
                        skills = card.skills,
                        icon = card.icon,
                        color = card.color
                    )
                }
            }
        }
    }


public val skillCards = listOf(
    SkillData(
        title = "Kotlin Multiplatform & Android",
        skills = listOf(
            "Kotlin Multiplatform (Android, iOS, Web)",
            "Android native apps using Kotlin, Java, Jetpack Compose",
            "Compose Multiplatform UI for Web/Desktop",
            "Material Design 3, Navigation, Room, DataStore",
            "Kobweb framework for full-stack Kotlin web"
        ),
        icon = "📱",
        color = Colors.LightBlue
    ),
    SkillData(
        title = "Architecture & Patterns",
        skills = listOf(
            "Clean Architecture & SOLID principles",
            "MVVM / MVI / Unidirectional data flow",
            "Coroutines, Flow, and structured concurrency",
            "Scalable multi-module architecture",
            "Design Patterns: Repository, Factory, Singleton, Observer, Builder, Strategy, Adapter, Delegate, Mediator"
        ),
        icon = "🏗️",
        color = Colors.LightGoldenRodYellow
    ),
    SkillData(
        title = "Libraries & Integrations",
        skills = listOf(
            "Dependency Injection (Hilt, Koin, Dagger)",
            "Networking with Ktor, Retrofit, GraphQL, WebSocket",
            "Firebase suite: Auth, Firestore, Messaging, Crashlytics",
            "Google Ads SDK, Analytics & Payment SDK integrations",
            "Compose UI tooling, Accompanist, and Coil/Glide"
        ),
        icon = "📦",
        color = Colors.LightGreen
    ),
    SkillData(
        title = "Kobweb Framework",
        skills = listOf(
            "Building responsive web apps entirely in Kotlin using Kobweb",
            "Proficient with Compose HTML, Silk styling, and route-based navigation",
            "Creating interactive UI layouts with reusable composables & custom themes",
            "Integrating APIs, Firebase, and REST endpoints into Kobweb sites",
            "Deploying Kobweb projects via Gradle & GitHub Pages",
            "Optimizing SEO, routing, and SSR for Kotlin web apps"
        ),
        icon = "🌐",
        color = Colors.LightSkyBlue
    ),
    SkillData(
        title = "Backend & Integration",
        skills = listOf(
            "GoLang (Gin) microservices & REST APIs",
            "GraphQL endpoints & WebSocket streaming",
            "Firebase Functions for server-side logic",
            "App integration with secure auth & data handling",
            "Realtime data sync, caching & serialization"
        ),
        icon = "☁️",
        color = Colors.Lavender
    ),
    SkillData(
        title = "Debugging & Performance",
        skills = listOf(
            "Advanced debugging & log tracing",
            "Memory, CPU & network profiling",
            "Startup & frame rendering optimization",
            "Custom ADB scripts & benchmarking tools",
            "Crash & ANR analysis with Firebase & Play Console"
        ),
        icon = "🔍",
        color = Colors.MistyRose
    ),
    SkillData(
        title = "Testing & Release",
        skills = listOf(
            "Manual & functional testing for Android modules",
            "Basic test cases (JUnit, Mockito, Espresso)",
            "Flow & LiveData reactive stream testing",
            "Automated builds using GitHub Actions or Jenkins",
            "Static analysis (Ktlint, Detekt, SonarQube)"
        ),
        icon = "✅",
        color = Colors.AliceBlue
    ),
    SkillData(
        title = "Security & Optimization",
        skills = listOf(
            "App signing, keystore & Play Integrity setup",
            "Secure API handling with encryption & tokens",
            "ProGuard/R8 optimization & code obfuscation",
            "Data privacy (GDPR) & permission audits"
        ),
        icon = "🔐",
        color = Colors.PaleGoldenRod
    ),
    SkillData(
        title = "Release Management",
        skills = listOf(
            "Gradle automation & variant configuration",
            "App versioning, staging & internal testing setup",
            "Play Console management & rollout strategy",
            "Crash monitoring & performance feedback loop"
        ),
        icon = "⚙️",
        color = Colors.Wheat
    ),
    SkillData(
        title = "UI/UX & Design Collaboration",
        skills = listOf(
            "Composable UI design with accessibility support",
            "Wireframing in Miro, Figma & design handoff",
            "Responsive layouts & adaptive theming",
            "Motion, animation & material transitions"
        ),
        icon = "🎨",
        color = Colors.MistyRose
    ),
    SkillData(
        title = "Project Leadership & Collaboration",
        skills = listOf(
            "Leading Android & cross-platform teams",
            "Agile/Scrum delivery & sprint planning",
            "Code reviews, mentoring & pair programming",
            "Documentation & architecture diagrams (Miro, Draw.io)"
        ),
        icon = "👥",
        color = Colors.HoneyDew
    ),
    SkillData(
        title = "AI, Prompting & Agents",
        skills = listOf(
            "Prompt Engineering — structured prompt design & chaining",
            "Understanding Agentic AI concepts & reasoning flow",
            "Building AI Agents in Kotlin using APIs & logic orchestration",
            "Integrating AI workflows for app intelligence & automation"
        ),
        icon = "🤖",
        color = Colors.PaleTurquoise
    ),
    SkillData(
        title = "Documentation & Communication",
        skills = listOf(
            "Technical documentation (API specs, design guides)",
            "Markdown, README & codebase documentation",
            "Presentation & stakeholder communication",
            "Knowledge sharing through tech sessions"
        ),
        icon = "📝",
        color = Colors.Linen
    )
)
