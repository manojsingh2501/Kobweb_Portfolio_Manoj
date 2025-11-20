package com.mano.ashwa.sections

import androidx.compose.runtime.Composable
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import com.mano.ashwa.LocalAppColorMode
import com.mano.ashwa.components.widgets.NavTabDataList
import com.mano.ashwa.navigation.Screen
import com.stevdza.san.kotlinbs.components.BSNavBar
import com.stevdza.san.kotlinbs.models.BackgroundStyle
import com.stevdza.san.kotlinbs.models.navbar.NavBarButton
import com.stevdza.san.kotlinbs.models.navbar.NavBarExpand
import com.varabyte.kobweb.compose.ui.Alignment
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.modifiers.fillMaxWidth
import com.varabyte.kobweb.core.PageContext
import com.mano.ashwa.ThemeToggle
import com.mano.ashwa.toSitePalette
import com.varabyte.kobweb.compose.foundation.layout.Row
import com.varabyte.kobweb.compose.foundation.layout.Arrangement
import com.varabyte.kobweb.compose.foundation.layout.Box
import com.varabyte.kobweb.compose.ui.modifiers.color
import com.varabyte.kobweb.compose.ui.modifiers.padding
import com.varabyte.kobweb.compose.ui.modifiers.position
import com.varabyte.kobweb.compose.ui.modifiers.top
import com.varabyte.kobweb.compose.ui.modifiers.zIndex
import org.jetbrains.compose.web.css.Position
import org.jetbrains.compose.web.css.percent
import org.jetbrains.compose.web.css.px

// Added imports for DOM manipulation to trigger a download
import kotlinx.browser.document
import org.w3c.dom.HTMLAnchorElement

@Composable
fun BSHeader(ctx: PageContext) {
    val current = LocalAppColorMode.current.value
    val sitePal = current.toSitePalette()

    val selectedTabId = remember { mutableStateOf(Screen.Home.id) }
    Box(
        modifier = Modifier
            .fillMaxWidth()
            .position(Position.Fixed)
            .top(0.percent)
//            .opacity(0.6) // To make translucent to HeaderBar
            .zIndex(10)
    ) {

        BSNavBar(
            modifier = Modifier.fillMaxWidth().padding(right = 10.px).color(sitePal.nearBackground),
            stickyTop = true,
            itemsAlignment = Alignment.CenterHorizontally,
            expand = NavBarExpand.LG,
            backgroundStyle = BackgroundStyle.Dark,
            // It creates Navigation Tabs and handles selection redirections and states
            items = NavTabDataList(
                ctx,
                selectedTabId.value,
                onSelect = { tabId ->
                    selectedTabId.value = tabId
                }
            ),
            button = NavBarButton(
                text = "Download Resume",
                onClick = {
                    // Trigger download of the resume stored under resources/public/resume/
                    downloadResume()
                }
            )
        )

        // Add the ThemeToggle as a right-aligned control in the header area and nudge it up so it visually sits inline
        Row(
            modifier = Modifier.fillMaxWidth().padding(right = 12.px, top = (-36).px),
            horizontalArrangement = Arrangement.End
        ) {
            ThemeToggle(compact = true)
        }
    }
}

// Helper function to programmatically download the resume PDF from the public folder.
// The file lives at src/jsMain/resources/public/resume/Ashwani TechLead & KMP Developer.pdf
private fun downloadResume() {
    val fileName = "Ashwani TechLead & KMP Developer.pdf"
    // Encode the filename for use in a URL
    val encoded = js("encodeURIComponent(fileName)") as String
    val href = "/resume/$encoded"

    val a = document.createElement("a") as HTMLAnchorElement
    a.href = href
    // Suggest browser download with the original filename
    a.setAttribute("download", fileName)
    a.style.display = "none"
    document.body?.appendChild(a)
    a.click()
    // Clean up
    a.remove()
}
