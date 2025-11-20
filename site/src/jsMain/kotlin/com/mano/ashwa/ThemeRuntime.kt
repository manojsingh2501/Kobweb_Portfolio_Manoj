package com.mano.ashwa

import com.varabyte.kobweb.silk.theme.colors.ColorMode
import com.varabyte.kobweb.silk.theme.colors.systemPreference
import com.varabyte.kobweb.silk.theme.colors.palette.toPalette
import com.varabyte.kobweb.silk.theme.colors.palette.color
import kotlinx.browser.document
import org.w3c.dom.HTMLElement

fun colorModeName(mode: ColorMode): String = when (mode) {
    ColorMode.LIGHT -> "light"
    ColorMode.DARK -> "dark"
    ColorMode.systemPreference -> "system"
}

fun applyRuntimeColorMode(mode: ColorMode) {
    val modeName = colorModeName(mode)
    try {
        (document.documentElement as? HTMLElement)?.setAttribute("data-color-mode", modeName)
    } catch (_: Throwable) { }

    try {
        val sitePal = mode.toSitePalette()
        val bg = sitePal.nearBackground.toString()
        val text = mode.toPalette().color.toString()
        val brandPrimary = sitePal.brand.primary.toString()
        val brandAccent = sitePal.brand.accent.toString()

        (document.documentElement as? HTMLElement)?.style?.setProperty("--site-near-background", bg)
        (document.documentElement as? HTMLElement)?.style?.setProperty("--site-color", text)
        (document.documentElement as? HTMLElement)?.style?.setProperty("--site-brand-primary", brandPrimary)
        (document.documentElement as? HTMLElement)?.style?.setProperty("--site-brand-accent", brandAccent)

        // Inline body background/color as a fallback for styles generated at init-time
        (document.body as? HTMLElement)?.style?.backgroundColor = bg
        (document.body as? HTMLElement)?.style?.color = text
    } catch (_: Throwable) { }
}
