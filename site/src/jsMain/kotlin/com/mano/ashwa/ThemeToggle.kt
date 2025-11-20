package com.mano.ashwa

import androidx.compose.runtime.Composable
import com.varabyte.kobweb.compose.foundation.layout.Row
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.graphics.Colors
import com.varabyte.kobweb.compose.ui.graphics.Color
import com.varabyte.kobweb.compose.ui.modifiers.backgroundColor
import com.varabyte.kobweb.compose.ui.modifiers.border
import com.varabyte.kobweb.compose.ui.modifiers.borderRadius
import com.varabyte.kobweb.compose.ui.modifiers.gap
import com.varabyte.kobweb.compose.ui.modifiers.padding
import com.varabyte.kobweb.compose.ui.modifiers.fontSize
import com.varabyte.kobweb.silk.components.forms.Button
import com.varabyte.kobweb.silk.components.text.SpanText
import com.varabyte.kobweb.silk.theme.colors.ColorMode
import com.varabyte.kobweb.silk.theme.colors.systemPreference
import kotlinx.browser.document
import org.jetbrains.compose.web.css.LineStyle
import org.jetbrains.compose.web.css.px
import org.w3c.dom.HTMLElement

@Composable
fun ThemeToggle(compact: Boolean = false) {
    val appColorState = LocalAppColorMode.current
    val current = appColorState.value

    fun apply(modeName: String, mode: ColorMode) {
        appColorState.value = mode
        // Update HTML attribute for any CSS that relies on it
        try {
            (document.documentElement as? HTMLElement)?.setAttribute("data-color-mode", modeName)
        } catch (_: Throwable) { }

        // Also set a few CSS variables and inline styles so visual changes show immediately
        try {
            val sitePal = if (mode == ColorMode.LIGHT) SitePalettes.light else SitePalettes.dark
            val bg = sitePal.nearBackground.toString()
            val text = if (mode == ColorMode.DARK) Colors.White.toString() else Colors.Black.toString()
            val brandPrimary = sitePal.brand.primary.toString()
            val brandAccent = sitePal.brand.accent.toString()

            (document.documentElement as? HTMLElement)?.style?.setProperty("--site-near-background", bg)
            (document.documentElement as? HTMLElement)?.style?.setProperty("--site-color", text)
            (document.documentElement as? HTMLElement)?.style?.setProperty("--site-brand-primary", brandPrimary)
            (document.documentElement as? HTMLElement)?.style?.setProperty("--site-brand-accent", brandAccent)

            // Inline body background/color as a fallback for styles generated at init-time
            document.body?.style?.backgroundColor = bg
            document.body?.style?.color = text
        } catch (_: Throwable) { }
    }

    val font = if (compact) 12.px else 16.px
    val pad = if (compact) 4.px else 8.px

    // Palette to style active button
    val activeBg: Color = if (current == ColorMode.LIGHT) SitePalettes.light.brand.primary else SitePalettes.dark.brand.primary
    val inactiveBg: Color = Colors.Transparent

    // Border color for active state (slightly darker/lighter depending on mode)
    val activeBorder: Color = if (current == ColorMode.DARK) SitePalettes.dark.brand.accent else SitePalettes.light.brand.accent

    Row(Modifier.gap(6.px)) {
        val isLight = current == ColorMode.LIGHT
        Button(
            onClick = { apply("light", ColorMode.LIGHT) },
            // Apply background first so padding sits inside the colored area; add a border when active
            Modifier
                .backgroundColor(if (isLight) activeBg else inactiveBg)
                .borderRadius(6.px)
                .then(if (isLight) Modifier.border(1.px, LineStyle.Solid, activeBorder) else Modifier)
                .padding(pad),
            variant = UncoloredButtonVariant
        ) {
            SpanText("Day", Modifier.fontSize(font))
        }

        val isDark = current == ColorMode.DARK
        Button(
            onClick = { apply("dark", ColorMode.DARK) },
            Modifier
                .backgroundColor(if (isDark) activeBg else inactiveBg)
                .borderRadius(6.px)
                .then(if (isDark) Modifier.border(1.px, LineStyle.Solid, activeBorder) else Modifier)
                .padding(pad),
            variant = UncoloredButtonVariant
        ) {
            SpanText("Night", Modifier.fontSize(font))
        }

        val isSystem = current == ColorMode.systemPreference
        Button(
            onClick = { apply("system", ColorMode.systemPreference) },
            Modifier
                .backgroundColor(if (isSystem) activeBg else inactiveBg)
                .borderRadius(6.px)
                .then(if (isSystem) Modifier.border(1.px, LineStyle.Solid, activeBorder) else Modifier)
                .padding(pad),
            variant = UncoloredButtonVariant
        ) {
            SpanText("Browser", Modifier.fontSize(font))
        }
    }
}
