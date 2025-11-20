package com.mano.ashwa.styles

import com.mano.ashwa.utils.Assets
import com.varabyte.kobweb.compose.css.*
import com.varabyte.kobweb.compose.css.AlignItems
import com.varabyte.kobweb.compose.css.functions.url
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.graphics.Colors
import com.varabyte.kobweb.compose.ui.modifiers.*
import com.varabyte.kobweb.compose.ui.styleModifier
import com.varabyte.kobweb.silk.style.CssStyle
import com.varabyte.kobweb.silk.style.animation.Keyframes
import com.varabyte.kobweb.silk.style.breakpoint.Breakpoint
import com.varabyte.kobweb.silk.style.selectors.hover
import org.jetbrains.compose.web.css.*

val zoomIn = Keyframes {
    from { Modifier.scale(0) }
    to { Modifier.scale(1) }
}


val bannerStyle = CssStyle {
    base {
        Modifier
            .fillMaxSize()
            .padding(200.px, 0.px, 100.px, 0.px)
            .backgroundPosition(BackgroundPosition.of(CSSPosition.Top))
            .backgroundImage(url(Assets.BannerBg))
            .backgroundPosition(BackgroundPosition.of(CSSPosition.Center))
            .backgroundSize(BackgroundSize.Cover)
            .backgroundRepeat(BackgroundRepeat.NoRepeat)
    }
}
val GradientTagLineStyle = CssStyle {
    base {
        Modifier.fontWeight(700)
            .letterSpacing(0.8.px)
            .padding(8.px, 10.px)
            .styleModifier { background("linear-gradient(90.21deg, rgba(170, 54, 124, 0.5) -5.91%, rgba(74, 47, 189, 0.5) 111.58%)") }
            .border(1.px, LineStyle.Solid, rgba(255, 255, 255, 0.5))
            .fontSize(18.px)
            .margin(bottom = 16.px)
            .color(Colors.White)
            .display(DisplayStyle.InlineBlock)
    }
    Breakpoint.MD {
        Modifier.fontSize(20.px)
    }
}

val upDownAnim = Keyframes {
    each(0.percent, 100.percent) {
        Modifier.translateY((-20).px)
    }
    50.percent {
        Modifier.translateY(20.px)
    }
}
val buttonStyle = CssStyle {
    base {
        Modifier
            .backgroundColor(Color.transparent)
            .color(Color.white)
            .fontWeight(700)
            .fontSize(20.px)
            .margin(top = 60.px)
            .letterSpacing(0.8.px)
            .display(DisplayStyle.Flex)
            .alignItems(AlignItems.Center)
    }
    hover {
        Modifier.backgroundColor(Color("#121212"))
    }
    cssRule(" .fas") {
        Modifier.fontSize(25.px)
            .margin(left = 10.px)
            //.transition(CSSTransition("ease-in-out", 0.3.s))
            .lineHeight(1)
    }
    cssRule(":hover .fa-circle-arrow-right") {
        Modifier.margin(left = 25.px)
    }
}