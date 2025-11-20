package com.mano.ashwa.components.widgets

import com.mano.ashwa.navigation.Screen
import com.stevdza.san.kotlinbs.models.navbar.NavLink
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.graphics.Colors
import com.varabyte.kobweb.compose.ui.modifiers.backgroundColor
import com.varabyte.kobweb.compose.ui.modifiers.fontWeight
import com.varabyte.kobweb.compose.ui.modifiers.borderBottom
import com.varabyte.kobweb.compose.css.FontWeight
import org.jetbrains.compose.web.css.px
import com.varabyte.kobweb.core.PageContext


fun NavTab(ctx: PageContext, id: String, title: String, path: String, isSelected: Boolean, onSelect:() -> Unit = {}):NavLink {
    return NavLink(
        id = id,
        title = title,
        active = isSelected,
        onClick = {
            onSelect()
            ctx.router.navigateTo(path)
        }
    )
}

fun NavTabDataList(ctx: PageContext, selectedTabId: String, onSelect: (String) -> Unit) = listOf(
    NavTab(ctx = ctx, id = Screen.Home.id, title = Screen.Home.title, path = Screen.Home.route, isSelected = selectedTabId == Screen.Home.id) {
        onSelect(Screen.Home.id)
    },
    /*NavTab(ctx = ctx, id = Screen.About.id, title = Screen.About.title, path = Screen.About.route, isSelected = selectedTabId == Screen.About.id) {
        onSelect(Screen.About.id)
    },*/
    NavTab(ctx = ctx, id = Screen.Skill.id, title = Screen.Skill.title, path = Screen.Skill.route, isSelected = selectedTabId == Screen.Skill.id) {
        onSelect(Screen.Skill.id)
    },
    NavTab(ctx = ctx, id = Screen.Experience.id, title = Screen.Experience.title, path = Screen.Experience.route, isSelected = selectedTabId == Screen.Experience.id) {
        onSelect(Screen.Experience.id)
    },
    NavTab(ctx = ctx, id = Screen.Project.id, title = Screen.Project.title, path = Screen.Project.route, isSelected = selectedTabId == Screen.Project.id) {
        onSelect(Screen.Project.id)
    },
    NavTab(ctx = ctx, id = Screen.CoverLetter.id, title = Screen.CoverLetter.title, path = Screen.CoverLetter.route, isSelected = selectedTabId == Screen.CoverLetter.id) {
        onSelect(Screen.CoverLetter.id)
    }
)