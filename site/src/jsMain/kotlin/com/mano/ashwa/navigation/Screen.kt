package com.mano.ashwa.navigation


const val Skill_Route = "/skill"
const val About_Route = "/about"
const val Project_Route = "/project"
const val Experience_Route = "/experiences"
const val CoverLetter_Route = "/cover-letter"
const val ContactMe_Route = "/contact-me"

sealed class Screen(val id: String, val title: String, val route: String) {
    object Home : Screen("homeId", title = "Home", route = "/")
    object About : Screen("aboutId", title = "About", route = About_Route)
    object Skill : Screen("skillId", title = "Skill", route = Skill_Route)
    object Experience : Screen("experiencesId", title = "Experience", route = Experience_Route)
    object Project : Screen("projectId", title = "Project", route = Project_Route)
    object CoverLetter : Screen(id= "coverletterId", title = "Cover Letter", route = CoverLetter_Route)
    object ContactMe : Screen(id = "contactmeId", title = "Contact Me", route = ContactMe_Route)
}