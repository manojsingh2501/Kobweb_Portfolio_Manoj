package com.mano.ashwa.model

import com.varabyte.kobweb.compose.ui.graphics.Color

data class SkillData(val title: String, val skills: List<String>, val icon: String,
                     val color: Color)
data class ExperienceData(val companyName: String, val title: String, val duration: String, val role: String ,val subTitle: String,
                          val skills: List<String>, val icon: String, val color: Color)
data class ProjectData(
    val name: String,
    val description: String,
    val duration: String,
    val role: String,
    val technologies: List<String>,
    val icon: String,
    val color: Color
)
