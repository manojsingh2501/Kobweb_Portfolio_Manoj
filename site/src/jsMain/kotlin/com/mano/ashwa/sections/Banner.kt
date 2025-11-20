package com.mano.ashwa.sections

import androidx.compose.runtime.Composable
import com.mano.ashwa.LocalAppColorMode
import com.mano.ashwa.components.rememberAnimatedText
import com.mano.ashwa.styles.GradientTagLineStyle
import com.mano.ashwa.styles.bannerStyle
import com.mano.ashwa.styles.buttonStyle
import com.mano.ashwa.styles.upDownAnim
import com.mano.ashwa.styles.zoomIn
import com.mano.ashwa.toSitePalette
import com.mano.ashwa.utils.Assets
import com.mano.ashwa.utils.atBreakpointMd
import com.varabyte.kobweb.compose.css.AnimationIterationCount
import com.varabyte.kobweb.compose.css.functions.url
import com.varabyte.kobweb.compose.foundation.layout.Column
import com.varabyte.kobweb.compose.foundation.layout.Row
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.graphics.Colors
import com.varabyte.kobweb.compose.ui.modifiers.*
import com.varabyte.kobweb.compose.ui.toAttrs
import com.varabyte.kobweb.silk.components.graphics.Image
import com.varabyte.kobweb.silk.components.icons.fa.FaCircleArrowRight
import com.varabyte.kobweb.silk.components.layout.SimpleGrid
import com.varabyte.kobweb.silk.components.layout.numColumns
import com.varabyte.kobweb.silk.style.toModifier
import com.varabyte.kobweb.silk.components.text.SpanText
import com.varabyte.kobweb.silk.style.animation.toAnimation
import org.jetbrains.compose.web.attributes.AutoComplete.Companion.url
import org.jetbrains.compose.web.css.*
import org.jetbrains.compose.web.css.keywords.auto
import org.jetbrains.compose.web.dom.H1
import org.jetbrains.compose.web.dom.P

@Composable
fun Banner() {
    val current = LocalAppColorMode.current.value
    val sitePal = current.toSitePalette()
    val textColor = if (current == com.varabyte.kobweb.silk.theme.colors.ColorMode.DARK) Colors.White else Colors.Black

    val animatedText = rememberAnimatedText(
        toRotate = listOf("Android Tech Lead", "KMP Developer","Kobweb Developer"),
        period = 2000
    )
    SimpleGrid(
        numColumns(base = 1, md = 2),
        modifier = bannerStyle.toModifier().id("home")
    ) {
        BannerText(animatedText.value)
        Image(
            src = Assets.HeaderImg,
            modifier = Modifier
                .width(100.percent)
                .padding(0.px atBreakpointMd 50.px)
                .height(auto)
                .animation(
                    zoomIn.toAnimation(
                        duration = 1.s,
                        timingFunction = AnimationTimingFunction.Ease,
                        iterationCount = AnimationIterationCount.of(1)
                    ),
                    upDownAnim.toAnimation(
                        duration = 2.s,
                        direction = AnimationDirection.Alternate,
                        iterationCount = AnimationIterationCount.Infinite
                    )
                )
        )
    }
}

@Composable
fun BannerText(text: String) {
    Column(
        modifier = Modifier
            .fillMaxWidth()
            .padding(0.px, 50.px)
    ) {
        SpanText(
            text = "Welcome to my Portfolio",
            modifier = GradientTagLineStyle.toModifier()
        )
        H1(
            attrs = Modifier.fontSize(65.px atBreakpointMd 45.px)
                .fontWeight(700)
                .letterSpacing(0.80.px)
                .lineHeight(1)
                .margin(bottom = 20.px)
                .display(DisplayStyle.Block)
                .toAttrs()
        ) {
            SpanText(
                text = "Hi! I'm Ashwani $text",
                modifier = Modifier.borderRight(
                    width = 0.08.em,
                    style = LineStyle.Solid,
                ).color(Colors.White)
            )
        }
        P(
            attrs = Modifier
                .fontSize(18.px)
                .letterSpacing(0.8.px)
                .lineHeight(1.5.em)
                .width(100.percent)
                .toAttrs()
        ) {
            SpanText("""A self-taught software developer and Tech Lead with a strong passion for modern technology.
            Skilled in leading teams, collaborating with clients, and delivering high-quality, impactful digital solutions that drive business success."""
            ,modifier = GradientTagLineStyle.toModifier())
        }
    }
}
