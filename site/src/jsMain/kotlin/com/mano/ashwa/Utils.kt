package com.mano.ashwa

inline fun <C : CharSequence, R : C> C.ifNotBlank(block: (C) -> R) = if (isNotBlank()) block(this) else ""

const val MAIL_TO = "pierre.ayfri@gmail.com"