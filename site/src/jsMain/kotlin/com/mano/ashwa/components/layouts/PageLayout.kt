package com.mano.ashwa.components.layouts

import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import com.mano.ashwa.sections.BSHeader
import com.varabyte.kobweb.compose.foundation.layout.Box
import com.varabyte.kobweb.compose.foundation.layout.Column
import com.varabyte.kobweb.compose.foundation.layout.ColumnScope
import com.varabyte.kobweb.compose.ui.Alignment
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.modifiers.*
import com.varabyte.kobweb.core.PageContext
import com.varabyte.kobweb.core.data.getValue
import com.varabyte.kobweb.core.layout.Layout
import com.varabyte.kobweb.silk.style.CssStyle
import com.varabyte.kobweb.silk.style.toAttrs
import kotlinx.browser.document
import org.jetbrains.compose.web.css.cssRem
import org.jetbrains.compose.web.css.fr
import org.jetbrains.compose.web.css.percent
import org.jetbrains.compose.web.dom.Div
import org.jetbrains.compose.web.css.vh
import com.mano.ashwa.sections.Footer
import com.varabyte.kobweb.compose.css.Overflow
import com.varabyte.kobweb.compose.foundation.layout.Arrangement
import org.jetbrains.compose.web.css.Color
import org.jetbrains.compose.web.css.DisplayStyle
import org.jetbrains.compose.web.css.Position
import org.jetbrains.compose.web.css.px

val PageContentStyle = CssStyle {
    base {
        Modifier.fillMaxSize()
            .padding(leftRight = 2.cssRem, top = 4.cssRem)
            //.backgroundColor(org.jetbrains.compose.web.css.Color("#ffcccc")) // Debug: light red background
//            .border {
//                width(2.px)
//                style(org.jetbrains.compose.web.css.LineStyle.Solid)
//                color(org.jetbrains.compose.web.css.Color("#fff000")) // Debug: red border
//            }
    }
}


class PageLayoutData(val title: String)

@Composable
@Layout
fun PageLayout(ctx: PageContext, content: @Composable ColumnScope.() -> Unit) {
    val data = ctx.data.getValue<PageLayoutData>()
    LaunchedEffect(data.title) {
        document.title = "${data.title}"
    }
        /*Column(
            Modifier.fillMaxWidth(100.percent).fillMaxHeight(100.percent),
        ) {
            BSHeader(ctx) // Header with navigation links
            content() // Main page content
            Footer() // Footer at the bottom
        }*/

    Box(modifier = Modifier.fillMaxSize()) {
        Column(
            modifier = Modifier
                .overflow(Overflow.Hidden)
//                .position(Position.Relative)
                .backgroundColor(Color("#121212"))
                .color(Color("#fff"))
                .fontFamily(
                    "Centra" ,"sans-serif"
                ),
        ) {
            BSHeader(ctx) // Header with navigation links
            content()
            Footer() // Footer at the bottom
        }
    }

}
