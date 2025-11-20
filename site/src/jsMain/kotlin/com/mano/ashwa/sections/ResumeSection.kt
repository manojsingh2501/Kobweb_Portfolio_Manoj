package com.mano.ashwa.sections

import androidx.compose.runtime.Composable
import com.varabyte.kobweb.compose.foundation.layout.Column
import com.varabyte.kobweb.compose.foundation.layout.Row
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.modifiers.gap
import com.varabyte.kobweb.compose.ui.modifiers.padding
import org.jetbrains.compose.web.css.cssRem
import com.varabyte.kobweb.silk.components.text.SpanText
import org.jetbrains.compose.web.dom.H5

@Composable
fun ResumeSection() {
    Column(Modifier.gap(1.cssRem).padding(2.cssRem)) {
        // Header
        SpanText("ASHWANI KUMAR SINGH", Modifier)
        SpanText("ANDROID TECH LEAD / KMP DEVELOPER", Modifier)
        SpanText("Bangalore | +91-7349629131 | ashwanisingh8713@gmail.com", Modifier)
        Row(Modifier.gap(1.cssRem)) {
            SpanText("LinkedIn: ashwanisingh8713")
            SpanText("Github: ashwanisingh8713")
        }
        SpanText("An autodidact programmer, with a zeal to learn and tinker around with mobile technology. Adept at leading teams, collaborating with clients, and driving projects from concept to completion.", Modifier.padding(top = 1.cssRem))

        // Skills & Languages
        Row(Modifier.gap(4.cssRem).padding(top = 1.cssRem)) {
            Column(Modifier.gap(0.5.cssRem)) {
                //H3{ Text("SKILLS") }
                H5 { SpanText("My Projects") }
                SpanText("Kotlin Multiplatform, Android Native, SOLID, MVVM/MVI, JetPack Compose, DI (KOIN, HILT), Ktor, Coroutine, Flow, Debugging, Firebase, Client handling, Google DFP & IMA Ads, GraphQL, Project Management, Team Managing, Wireframe creation, GoLang Microservices, UnitTest, Reactive Programming, AI Tools & Prompt Engineering")
            }
            Column(Modifier.gap(0.5.cssRem)) {
                SpanText("LANGUAGES")
                SpanText("Kotlin, Java, GoLang, Swift, C++, Dart")
            }
        }

        // Awards
        Column(Modifier.gap(0.5.cssRem).padding(top = 1.cssRem)) {
            H5 { SpanText("AWARDS AND ACHIEVEMENTS")}
            SpanText("Pat On The Back Award in Tech Mahindra")
            SpanText("Employee of the year in Ninestars Technologies in 2016.")
        }

        // Education
        Column(Modifier.gap(0.5.cssRem).padding(top = 1.cssRem)) {
            H5 { SpanText("EDUCATION") }
            SpanText("Bachelor in CS - July 2005 to Jun 2009, APS University, Rewa, M.P.")
            SpanText("10+2 (PCM) - July 2003 to May 2004, Saraswati Shishu Vidya Mandir, M.P. Board")
            SpanText("10th (All) - July 2001 to May 2002, Saraswati Shishu Vidya Mandir, M.P. Board")
        }

        // Experience
        Column(Modifier.gap(0.5.cssRem).padding(top = 1.cssRem)) {
            H5 { SpanText("EXPERIENCE") }
            SpanText("TECH MAHINDRA - Tech Lead, May-2024 to Present")
            SpanText("NINESTARS INFORMATION TECHNOLOGIES PVT LTD - Lead android developer, Aug-2015 to May-2024")
            SpanText("GLOBAL LOGIC INDIA LTD - Senior software developer, Mar-2014 to Aug-2015")
            SpanText("A1 TECHNOLOGIES - Software Engineer, Dec-2011 to Feb-2014")
            SpanText("RED ORANGE TECHNOLOGIES - Junior Software engineer, May-2011 to Dec-2011")
            SpanText("LIMITEX TECHNOLOGIES - Trainee/Junior Software developer, Sep-2010 to May-2011")
        }

        // Projects
        Column(Modifier.gap(0.5.cssRem).padding(top = 1.cssRem)) {
            H5 { SpanText("PROJECT EXPERIENCE") }
            SpanText("Keysight Handy: B2B app for network and protocol analysis. Real-time monitoring, analytics, dashboards, device compatibility testing.")
            SpanText("KMP Project: Shopify Mobile Apps POC (In development): Voyager Navigator, Koin, Ktor, Clean Arch, MVI, Material-3, Compose UI, Android/iOS/Web, GraphQL, Shopify APIs.")
            SpanText("KMP Project: THE HINDU (In development): Voyager Navigator, Koin, Ktor, SQLDelight, Clean Arch, MVVM, Material-3, Compose, Android/iOS native features, GraphQL, dynamic UI, analytics, DFP Ads.")
            SpanText("Shorts News: Video app for short-form news, SOLID, Clean Arch, Koin, ViewModel, MVI, ExoPlayer, swipe navigation, video downloading/caching.")
        }
    }
}

