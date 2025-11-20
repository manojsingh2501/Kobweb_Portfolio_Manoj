package com.mano.ashwa

import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.MutableState
import androidx.compose.runtime.staticCompositionLocalOf
import com.varabyte.kobweb.silk.theme.colors.ColorMode
import com.varabyte.kobweb.silk.theme.colors.systemPreference

// A composition local that holds the current app ColorMode as a MutableState so we can update it live.
val LocalAppColorMode = staticCompositionLocalOf<MutableState<ColorMode>> {
    mutableStateOf(ColorMode.systemPreference)
}

