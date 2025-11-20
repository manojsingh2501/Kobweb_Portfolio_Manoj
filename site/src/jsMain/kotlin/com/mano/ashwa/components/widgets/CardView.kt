package com.mano.ashwa.components.widgets

import androidx.compose.runtime.Composable
import com.mano.ashwa.model.ExperienceData
import com.mano.ashwa.model.ProjectData
import com.varabyte.kobweb.compose.css.FontWeight
import com.varabyte.kobweb.compose.foundation.layout.Box
import com.varabyte.kobweb.compose.foundation.layout.Column
import com.varabyte.kobweb.compose.foundation.layout.Row
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.graphics.Color
import com.varabyte.kobweb.compose.ui.graphics.Colors
import com.varabyte.kobweb.compose.ui.modifiers.backgroundColor
import com.varabyte.kobweb.compose.ui.modifiers.borderRadius
import com.varabyte.kobweb.compose.ui.modifiers.color
import com.varabyte.kobweb.compose.ui.modifiers.fillMaxWidth
import com.varabyte.kobweb.compose.ui.modifiers.fontSize
import com.varabyte.kobweb.compose.ui.modifiers.fontWeight
import com.varabyte.kobweb.compose.ui.modifiers.gap
import com.varabyte.kobweb.compose.ui.modifiers.margin
import com.varabyte.kobweb.compose.ui.modifiers.padding
import com.varabyte.kobweb.compose.ui.modifiers.width
import com.varabyte.kobweb.silk.components.text.SpanText
import org.jetbrains.compose.web.css.DisplayStyle
import org.jetbrains.compose.web.css.FlexWrap
import org.jetbrains.compose.web.css.flexWrap
import org.jetbrains.compose.web.dom.Div
import org.jetbrains.compose.web.css.display
import org.jetbrains.compose.web.css.px
import org.jetbrains.compose.web.css.percent
import org.jetbrains.compose.web.css.width
import com.mano.ashwa.LocalAppColorMode
import com.mano.ashwa.toSitePalette
import com.varabyte.kobweb.silk.theme.colors.ColorMode

@Composable
fun SkillCardView(title: String, skills: List<String>, icon: String? = null,
                  color: Color = Colors.WhiteSmoke) {
    val current = LocalAppColorMode.current.value
    val sitePal = current.toSitePalette()

    Box(
        Modifier
            .fillMaxWidth()
            .backgroundColor(sitePal.cardColor)
            .borderRadius(12.px)
            .padding(16.px)
    ) {
        Column(Modifier.gap(8.px)) {
            Row(Modifier.gap(8.px)) {
                if (icon != null) {
                    SpanText(icon, Modifier.fontSize(24.px))
                }
                SpanText(title, Modifier.fontWeight(FontWeight.Bold).fontSize(20.px).color(sitePal.cardTitleColor))
            }
            Column {
                skills.forEach {
                    SpanText("• $it", Modifier.fontSize(16.px).color(sitePal.cardDescriptionColor))
                }
            }
        }
    }
}


@Composable
fun ExperienceCardView(data: ExperienceData) {
    val current = LocalAppColorMode.current.value
    val sitePal = current.toSitePalette()

    Box(
        Modifier
            .fillMaxWidth()
            .backgroundColor(sitePal.cardColor)
            .borderRadius(12.px)
            .padding(16.px)
    ) {
        Column(Modifier.gap(8.px)) {
            Row(Modifier.gap(8.px)) {
                if (data.icon.isNotEmpty()) {
                    SpanText(data.icon, Modifier.fontSize(24.px))
                }
                Column {
                    Row {
                        SpanText(
                            data.companyName,
                            Modifier.fontWeight(FontWeight.Bold).fontSize(20.px).color(sitePal.cardTitleColor)
                        )
                        Box(modifier = Modifier.width(10.px))
                        SpanText(
                            "(${data.duration})",
                            Modifier.fontWeight(FontWeight.Bold).fontSize(14.px)
                                .padding(top = 5.px).color(sitePal.cardSubTitleColor)
                        )
                    }
                    SpanText(data.role, Modifier.fontWeight(FontWeight.Bold).fontSize(14.px).color(sitePal.cardSubTitleColor))
                }
            }
            Column {
                data.skills.forEach {
                    SpanText("• $it", Modifier.fontSize(16.px).color(sitePal.cardDescriptionColor))
                }
            }
        }
    }
}

@Composable
fun ChipLayout(items: List<String>, chipLayoutColor:Color, chipColor: Color, chipTextColor:Color) { // Changed default color
    Div({
        style {
            display(DisplayStyle.Flex)
            flexWrap(FlexWrap.Wrap)
            // Add spacing between chips so the layout background is visible
            property("gap", "8px")
            property("margin-top", "6px")
            property("margin-bottom", "6px")
            property("margin-right", "4px")
            width(100.percent)
            // Subtle light blue background for layout
            property("background-color", chipLayoutColor.toString())
            property("border-radius", "12px")
            // Add horizontal padding so the layout background frames the chips
            property("padding", "8px 12px")
            // Subtle inset border to delineate layout area on very dark backgrounds
            property("box-shadow", "inset 0 0 0 1px rgba(255,255,255,0.02)")
        }
    }) {
        items.forEach { tech ->
            Chip(tech, chipColor, chipTextColor)
        }
    }
}

@Composable
fun Chip(text: String, chipColor: Color, chipTextColor: Color) { // Updated to increase visibility on dark backgrounds
    Box(
        Modifier
            //.backgroundColor(chipColor)
            .borderRadius(16.px)
            // Slightly larger horizontal padding so chips feel more substantial
            .padding(left = 14.px, right = 14.px, top = 6.px, bottom = 6.px)
            .margin(left = 6.px, top = 4.px, right = 4.px, bottom = 4.px)
    ) {
        org.jetbrains.compose.web.dom.Span({
            style {
                property("white-space", "nowrap")
                property("font-size", "14px")
                //property("color", chipTextColor.toString())
                property("margin-right", "8px")
                property("margin-bottom", "8px")
                // Gentle shadow to lift the chip off the layout background
                property("box-shadow", "0 1px 4px rgba(0,0,0,0.45)")
                property("display", "flex")
                property("align-items", "center")
                property("justify-content", "center") // Center align text
                property("height", "100%")
            }
        }) {
            //org.jetbrains.compose.web.dom.Text(text)
            SpanText(text, Modifier.fontSize(16.px).color(chipTextColor))
        }
    }
}

@Composable
fun ProjectCardView(data: ProjectData) {
    val current = LocalAppColorMode.current.value
    val sitePal = current.toSitePalette()

    Box(
        Modifier
            .fillMaxWidth()
            .backgroundColor(sitePal.cardColor)
            .borderRadius(12.px)
            .padding(16.px)
    ) {
        Column(Modifier.gap(8.px)) {
            Row(Modifier.gap(8.px)) {
                if (data.icon.isNotEmpty()) {
                    SpanText(data.icon, Modifier.fontSize(24.px))
                }
                Column {
                    SpanText(
                        data.name,
                        Modifier.fontWeight(FontWeight.Bold).fontSize(20.px).color(sitePal.cardTitleColor)
                    )
                    SpanText(
                        "(${data.duration})",
                        Modifier.fontWeight(FontWeight.Bold).fontSize(14.px).padding(top = 5.px).color(sitePal.cardSubTitleColor)
                    )
                    SpanText(data.role, Modifier.fontWeight(FontWeight.Bold).fontSize(14.px).color(sitePal.cardSubTitleColor))
                }
            }
            SpanText(data.description, Modifier.fontSize(16.px).color(sitePal.cardDescriptionColor))
            ChipLayout(data.technologies, chipLayoutColor = sitePal.chipLayoutColor, chipColor = sitePal.chipColor, chipTextColor = sitePal.chipTextColor)
        }
    }
}
