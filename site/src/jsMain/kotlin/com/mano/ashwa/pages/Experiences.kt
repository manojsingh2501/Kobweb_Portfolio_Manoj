package com.mano.ashwa.pages

import androidx.compose.runtime.Composable
import com.mano.ashwa.components.layouts.PageLayoutData
import com.mano.ashwa.components.widgets.ExperienceCardView
import com.mano.ashwa.model.ExperienceData
import com.mano.ashwa.navigation.Experience_Route
import com.varabyte.kobweb.compose.css.FontWeight
import com.varabyte.kobweb.compose.foundation.layout.Box
import com.varabyte.kobweb.compose.foundation.layout.Column
import com.varabyte.kobweb.compose.ui.Alignment
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.graphics.Colors
import com.varabyte.kobweb.compose.ui.modifiers.backgroundColor
import com.varabyte.kobweb.compose.ui.modifiers.color
import com.varabyte.kobweb.compose.ui.modifiers.display
import com.varabyte.kobweb.compose.ui.modifiers.fillMaxWidth
import com.varabyte.kobweb.compose.ui.modifiers.fontSize
import com.varabyte.kobweb.compose.ui.modifiers.fontWeight
import com.varabyte.kobweb.compose.ui.modifiers.gap
import com.varabyte.kobweb.compose.ui.modifiers.gridTemplateColumns
import com.varabyte.kobweb.compose.ui.modifiers.padding
import com.varabyte.kobweb.compose.ui.toAttrs
import com.varabyte.kobweb.core.Page
import com.varabyte.kobweb.core.data.add
import com.varabyte.kobweb.core.init.InitRoute
import com.varabyte.kobweb.core.init.InitRouteContext
import com.varabyte.kobweb.core.layout.Layout
import com.varabyte.kobweb.silk.components.text.SpanText
import org.jetbrains.compose.web.css.DisplayStyle
import org.jetbrains.compose.web.css.fr
import org.jetbrains.compose.web.css.px
import org.jetbrains.compose.web.dom.Div
import com.mano.ashwa.LocalAppColorMode
import com.mano.ashwa.pageTitleStyle
import com.mano.ashwa.toSitePalette
import com.varabyte.kobweb.silk.style.toModifier

@InitRoute
fun initExperiencesPage(ctx: InitRouteContext) {
    ctx.data.add(PageLayoutData("Ashwani Skills"))
}

@Page(Experience_Route)
@Layout(".components.layouts.PageLayout")
@Composable
fun Experiences() {
    val current = LocalAppColorMode.current.value
    val sitePal = current.toSitePalette()

    Box(Modifier.fillMaxWidth().backgroundColor(sitePal.nearBackground).padding(32.px)) {
        Column(
            horizontalAlignment = Alignment.CenterHorizontally
        ) {
            SpanText("My Experiences", modifier = pageTitleStyle.toModifier().color(sitePal.pageTitleColor))

            Div(
                attrs = Modifier
                    .fillMaxWidth()
                    .display(DisplayStyle.Grid)
                    .gridTemplateColumns {
                        repeat(3) { minmax(250.px, 1.fr) }
                    }
                    .gap(32.px)
                    .toAttrs()
            ) {
                experienceCards.forEach { card ->
                    ExperienceCardView(card)
                }
            }
        }
    }
}

private val experienceCards = listOf(
    // Tech Mahindra
    ExperienceData(
        companyName = "Tech Mahindra",
        title = "Working as Tech Lead for the client Keysight",
        duration = "14-May-2024 to Present",
        role = "Tech Lead",
        subTitle = "",
        skills = listOf(
            "Log back stack tracking, Debugging,",
            "Android Native, JNI code implementation.",
            "Performance and Memory handling.",
            "NR & LTE network communications and monitoring.",
            "Agile Methodologies and Team Leadership.",
            "Code architecture, Mentoring and Code Reviews.",
            "Task Planning and Execution and Client Communication.",
            "Technologies: Kotlin, Java, C/C++, Android, JNI, Git, JIRA, Confluence",
            "Environment: Linux, Windows",
            "Domain: Telecom (5G, LTE, NR)",
            "Google Drive Upload & Avoid Duplicate Folder Creation",
            "File Handling, Multithreading, Retrofit, REST API",
            "Google Play Service NearBy Discovery connectivity and file transferring",
            "Bluetooth connectivity and file transferring",
            "Understanding and accumulating requirements, Making Flow Diagram, Providing Task breakup and estimation, distributing tasks"
        ),
        icon = "📱",
        color = Colors.LightBlue
    ),

    // NINESTARS INFORMATION TECHNOLOGIES PVT LTD
    ExperienceData(
        companyName = "NINESTARS INFORMATION TECHNOLOGIES PVT LTD",
        title = "Worked on News, E-Commerce, Media Apps with top rated clients TheHindu, Deccan Herald, TV9",
        duration = "26-Aug-2015 to 13-May-2024",
        role = "Lead Android Developer",
        subTitle = "",
        skills = listOf(
            "Responsible for code architecture, correct coding practices, Code Reviewing.",
            "Responsible for feature delivery on Mobile. Prepare task scoping and breakdown from product stories to\n" +
                    "ensure code quality and reusability.",
            "Performance and Memory handling.",
            "I have mostly been involved in development and working with the development team.",
            "Designed and Implemented Server driven template based custom UIs.",
            "Code architecture, Mentoring and Code Reviews.",
            "Worked on Database, Scheduled syncing.",
            "Worked on GraphQL APIs implementation.",
            "Handling and Managing Team.",
            "Client interaction and handling.",
            "Understanding and accumulating requirements, Making Flow Diagram, Providing Task breakup and\n" +
                    "estimation, distributing tasks",
            "Take ownership of end-to-end product quality, from developing to maintaining core app frameworks that\n" +
                    "help make the apps more reliable and delightful.",
            "Understanding and accumulating requirements, Making Flow Diagram, Providing Task breakup and estimation, distributing tasks"
        ),
        icon = "📱",
        color = Colors.LightBlue
    ),

    // GLOBAL LOGIC INDIA LTD
    ExperienceData(
        companyName = "GLOBAL LOGIC INDIA LTD ",
        title = "Worked on JIO core App (Reliance)",
        duration = "14-Mar-2014 to 22-Aug-2015",
        role = "Senior software developer",
        subTitle = "",
        skills = listOf(
            "Android App Programmer",
            "Screen UI design and flow implementation",
            "Worked on custom UIs & designs",
            "Database and APIs Integration",
            "Background Jobs, Alarm Manager, Background data syncing Implementation",
            "Designed and Implemented Server driven template based custom UIs.",
            "Worked on MVM Design Pattern using RxJava",
        ),
        icon = "📱",
        color = Colors.LightBlue
    ),


    // A1 Technologies PVT LTD
    ExperienceData(
        companyName = "A1 Technologies PVT LTD ",
        title = "Worked on JIO core App (Reliance)",
        duration = "Dec-2011 to Feb-2014",
        role = "Software Engineer",
        subTitle = "",
        skills = listOf(
            "Creating layouts and designs",
            "Database and API integration",
            "Multi listview with Loader data provider",
            "Implemented Content Providers",
            "Worked on Services and Global & Local BroadcastReceivers to load data in background\n" +
                    "and update on UIs.",
            "Social Login Implementation",
        ),
        icon = "📱",
        color = Colors.LightBlue
    ),

    // RED ORANGE TECHNOLOGIES
    ExperienceData(
        companyName = "RED ORANGE TECHNOLOGIES",
        title = "Worked on JIO core App (Reliance)",
        duration = "May-2011 to Dec-2011",
        role = "Junior Software engineer",
        subTitle = "",
        skills = listOf(
            "Understood Android Mobile app lifecycle",
            "Performed REST API requests for uploading, downloading files",
            "Layout & UI Creation",
            "Creating layouts and designs",
            "Database and API integration",
            "Third party libs integration",
        ),
        icon = "📱",
        color = Colors.LightBlue
    ),

    // LIMITEX TECHNOLOGIES
    ExperienceData(
        companyName = "LIMITEX TECHNOLOGIES",
        title = "Worked on JIO core App (Reliance)",
        duration = "Sep-2010 to May-2011",
        role = "Trainee/Junior Software developer",
        subTitle = "",
        skills = listOf(
            "Learnt Html, CSS, and Eclipse IDE",
            "Created basic html templates",
            "Moved to Trainee Android Development",
            "Learning Android, creating layouts and designs"
        ),
        icon = "📱",
        color = Colors.LightBlue
    ),
)