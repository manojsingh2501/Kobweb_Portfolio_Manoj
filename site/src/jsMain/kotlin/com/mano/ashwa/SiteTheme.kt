package com.mano.ashwa

import com.stevdza.san.kotlinbs.models.BackgroundStyle
import com.varabyte.kobweb.compose.ui.graphics.Color
import com.varabyte.kobweb.compose.ui.graphics.Colors
import com.varabyte.kobweb.silk.init.InitSilk
import com.varabyte.kobweb.silk.init.InitSilkContext
import com.varabyte.kobweb.silk.theme.colors.ColorMode
import com.varabyte.kobweb.silk.theme.colors.palette.background
import com.varabyte.kobweb.silk.theme.colors.palette.color

// The `com.stevdza.san.kotlinbs.models.BackgroundStyle` type from the library does not expose a `Custom` constructor.
// To customize nav bar appearance, prefer either:
// 1) Use `BackgroundStyle.Dark`/`Light` provided by the library where applicable, or
// 2) Set the parent container's background color (recommended) or use CSS/attrs to override specific styles.

/**
 * @property nearBackground A useful color to apply to a container that should differentiate itself from the background
 *   but just a little.
 */
class SitePalette(
    val brand: Brand,
    val nearBackground: Color,
    val headerBackground: Color,
    val contactAreaBg: Color,
    val cardColor: Color,
    val cardTitleColor: Color,
    val cardSubTitleColor: Color,
    val cardDescriptionColor: Color,
    val textColor: Color,
    val pageTitleColor: Color,
    val chipColor: Color,
    val chipLayoutColor: Color,
    val chipTextColor: Color,
) {
    class Brand(
        val primary: Color = Color.rgb(0x3C83EF),
        val accent: Color = Color.rgb(0xF3DB5B),
    )
}

object SitePalettes {
    val light = SitePalette(
        nearBackground = Color.rgb(0xF4F6FA),
        headerBackground = Color.rgb(0xFFFFFF),
        brand = SitePalette.Brand(primary = Color.rgb(0x3C83EF), accent = Color.rgb(0xFCBA03)),
        cardColor = Color.rgb(0xFFFFFF),
        cardTitleColor = Color.rgb(0x0F172A),
        cardSubTitleColor = Color.rgb(0x4B5563),
        cardDescriptionColor = Color.rgb(0x6B7280),
        pageTitleColor = Color.rgb(0x6B7280),
        textColor = Color.rgb(0x6B7280),
        contactAreaBg = Color.rgb(0xF4F6FA),
        chipColor = Color.rgb(0xF4F6FA),
        chipLayoutColor = Color.rgb(0xF4F6FA),
        chipTextColor = Color.rgb(0xF4F6FA)
    )

    val dark = SitePalette(
        nearBackground = Color.rgb(0x06080B),
        headerBackground = Color.rgb(0x06080B),
        brand = SitePalette.Brand(primary = Color.rgb(0x3C83EF), accent = Color.rgb(0xF3DB5B)),
        cardColor = Color.rgb(0x0B1220),
        cardTitleColor = Color.rgb(0xE6EEF8),
        cardSubTitleColor = Color.rgb(0xAAB7C9),
        cardDescriptionColor = Color.rgb(0x94A3B8),
        pageTitleColor = Colors.White,
        textColor = Color.rgb(0x94A3B8),
        contactAreaBg = Color.rgb(0x0A0C10),
        // Distinct chip colors for better contrast in dark mode:
        // chipLayoutColor: slightly lighter/different dark background for the chip container
        chipLayoutColor = Color.rgb(0x0F1724),
        // chipColor: the chip background itself (a bit warmer/different than cardColor)
        chipColor = Color.rgb(0x122033),
        // chipTextColor: light text that contrasts with chipColor
        chipTextColor = Color.rgb(0xE6EEF8)
    )
}

fun ColorMode.toSitePalette(): SitePalette {
    return SitePalettes.dark
    /*return when (this) {
        ColorMode.LIGHT -> SitePalettes.light
        ColorMode.DARK -> SitePalettes.dark
    }*/
}

@InitSilk
fun initTheme(ctx: InitSilkContext) {
    // Keep Silk palette adjustments minimal here. Use the SitePalette values for custom colors.
    ctx.theme.palettes.dark.background = Colors.White
    ctx.theme.palettes.dark.color = Colors.White
}
