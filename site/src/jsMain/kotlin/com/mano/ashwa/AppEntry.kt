package com.mano.ashwa

import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.remember
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.CompositionLocalProvider
import com.varabyte.kobweb.compose.css.ScrollBehavior
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.modifiers.fillMaxHeight
import com.varabyte.kobweb.compose.ui.modifiers.scrollBehavior
import com.varabyte.kobweb.core.App
import com.varabyte.kobweb.silk.SilkApp
import com.varabyte.kobweb.silk.components.layout.Surface
import com.varabyte.kobweb.silk.init.InitSilk
import com.varabyte.kobweb.silk.init.InitSilkContext
import com.varabyte.kobweb.silk.init.registerStyleBase
import com.varabyte.kobweb.silk.style.common.SmoothColorStyle
import com.varabyte.kobweb.silk.style.toModifier
import com.varabyte.kobweb.silk.theme.colors.ColorMode
import com.varabyte.kobweb.silk.theme.colors.loadFromLocalStorage
import com.varabyte.kobweb.silk.theme.colors.saveToLocalStorage
import com.varabyte.kobweb.silk.theme.colors.systemPreference

private const val COLOR_MODE_KEY = "ashwa:colorMode"

@InitSilk
fun initColorMode(ctx: InitSilkContext) {
    ctx.config.initialColorMode = ColorMode.loadFromLocalStorage(COLOR_MODE_KEY) ?: ColorMode.systemPreference
}

@InitSilk
fun initStyles(ctx: InitSilkContext) {
    ctx.stylesheet.apply {
        registerStyleBase("html, body") { Modifier.fillMaxHeight() }
        registerStyleBase("body") { Modifier.scrollBehavior(ScrollBehavior.Smooth) }
    }
}

@App
@Composable
fun AppEntry(content: @Composable () -> Unit) {
    SilkApp {
        // Provide an app-wide MutableState<ColorMode> (backed by localStorage) so components using LocalAppColorMode
        // will update live when the user picks a different mode.
        val initial = ColorMode.loadFromLocalStorage(COLOR_MODE_KEY) ?: ColorMode.systemPreference
        val appColorState = remember { mutableStateOf(initial) }

        // Persist and apply runtime palette whenever the app-level color mode changes
        LaunchedEffect(appColorState.value) {
            appColorState.value.saveToLocalStorage(COLOR_MODE_KEY)
            applyRuntimeColorMode(appColorState.value)
        }

        // Apply the initial runtime palette immediately
        LaunchedEffect(Unit) {
            applyRuntimeColorMode(initial)
        }

        CompositionLocalProvider(LocalAppColorMode provides appColorState) {
            Surface(SmoothColorStyle.toModifier().fillMaxHeight()) {
                // Keep existing app content
                content()

                // ThemeToggle was moved into the header to avoid duplication
            }
        }
    }
}
