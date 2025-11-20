package com.mano.ashwa.sections

import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import com.mano.ashwa.LocalAppColorMode
import com.mano.ashwa.toSitePalette
import com.stevdza.san.kotlinbs.components.BSButton
import com.stevdza.san.kotlinbs.forms.BSInput
import com.stevdza.san.kotlinbs.forms.BSTextArea
import com.stevdza.san.kotlinbs.models.BSBorderRadius
import com.stevdza.san.kotlinbs.models.button.ButtonCustomization
import com.varabyte.kobweb.compose.css.FontStyle
import com.varabyte.kobweb.compose.css.FontWeight
import com.varabyte.kobweb.compose.css.TextAlign
import com.varabyte.kobweb.compose.css.functions.LinearGradient
import com.varabyte.kobweb.compose.css.functions.linearGradient
import com.varabyte.kobweb.compose.foundation.layout.Arrangement
import com.varabyte.kobweb.compose.foundation.layout.Box
import com.varabyte.kobweb.compose.foundation.layout.Column
import com.varabyte.kobweb.compose.foundation.layout.Row
import com.varabyte.kobweb.compose.ui.Alignment
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.graphics.Colors
import com.varabyte.kobweb.compose.ui.modifiers.backgroundColor
import com.varabyte.kobweb.compose.ui.modifiers.borderRadius
import com.varabyte.kobweb.compose.ui.modifiers.color
import com.varabyte.kobweb.compose.ui.modifiers.fillMaxWidth
import com.varabyte.kobweb.compose.ui.modifiers.fontSize
import com.varabyte.kobweb.compose.ui.modifiers.fontStyle
import com.varabyte.kobweb.compose.ui.modifiers.fontWeight
import com.varabyte.kobweb.compose.ui.modifiers.height
import com.varabyte.kobweb.compose.ui.modifiers.padding
import com.varabyte.kobweb.compose.ui.modifiers.textAlign
import com.varabyte.kobweb.compose.ui.modifiers.width
import com.varabyte.kobweb.compose.ui.toAttrs
import com.varabyte.kobweb.silk.components.text.SpanText
import com.varabyte.kobweb.silk.style.toModifier
import com.varabyte.kobweb.silk.style.common.SmoothColorStyle
import org.jetbrains.compose.web.attributes.*
import org.jetbrains.compose.web.css.*
import org.jetbrains.compose.web.dom.*
import kotlinx.browser.window

// Generic validation message used across the form
private const val REQUIRED_MSG = "Required"


@Composable
fun Footer() {
    val current = LocalAppColorMode.current.value
    val sitePal = current.toSitePalette()

	Column(modifier = SmoothColorStyle.toModifier().fillMaxWidth().backgroundColor(sitePal.nearBackground)) {
		// Dark contact area (title + form)
		Box(modifier = Modifier.fillMaxWidth().backgroundColor(sitePal.contactAreaBg).padding(top = 28.px, bottom = 28.px)) {
			Column(modifier = Modifier.fillMaxWidth(),) {
				SpanText(
					"Contact Me",
					modifier = Modifier.fillMaxWidth()
						.fontStyle(FontStyle.Normal)
						.fontWeight(FontWeight.Bold)
						.fontSize(22.px)
						.padding(bottom = 12.px)
						.textAlign(TextAlign.Center)
						.color(Colors.White)
					)

				ContactUsInput()
			}
		}

		// Divider
		Box(
			modifier = Modifier
				.fillMaxWidth()
				.height(2.px)
				.backgroundColor(Colors.LightGray)
		)

		// Quick Infos (keeps the site background)
		QuickInfos()

	}

}

@Composable
fun ContactUsInput() {

	val fullWidth = 520.px
	val gap = 18.px
	val halfWidth = 250.px

	// Colors from app palette
	// val current = LocalAppColorMode.current.value
	val cardBg = rgb(20, 22, 28) // dark card background
	val inputBg = rgb(30, 32, 40) // darker input background
	val labelColor = Colors.White
	val errorColor = rgb(255, 120, 120)
	val infoColor = rgb(140, 230, 160)

	// form state
	var firstName by remember { mutableStateOf("") }
	var lastName by remember { mutableStateOf("") }
	var email by remember { mutableStateOf("") }
	var subject by remember { mutableStateOf("") }
	var message by remember { mutableStateOf("") }

	// validation state
	var firstNameError by remember { mutableStateOf<String?>(null) }
	var lastNameError by remember { mutableStateOf<String?>(null) }
	var emailError by remember { mutableStateOf<String?>(null) }
	var subjectError by remember { mutableStateOf<String?>(null) }
	var messageError by remember { mutableStateOf<String?>(null) }
	var infoMessage by remember { mutableStateOf<String?>(null) }

	fun resetErrors() {
		firstNameError = null
		lastNameError = null
		emailError = null
		subjectError = null
		messageError = null
		infoMessage = null
	}

	fun isValidEmail(e: String): Boolean {
		val emailRegex = "^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+$".toRegex()
		return e.isNotBlank() && emailRegex.matches(e)
	}

	fun validateAll(): Boolean {
		resetErrors()
		var ok = true
		if (firstName.isBlank()) {
			firstNameError = REQUIRED_MSG
			ok = false
		}
		if (lastName.isBlank()) {
			lastNameError = REQUIRED_MSG
			ok = false
		}
		if (email.isBlank()) {
			emailError = REQUIRED_MSG
			ok = false
		} else if (!isValidEmail(email)) {
			emailError = REQUIRED_MSG
			ok = false
		}
		if (subject.isBlank()) {
			subjectError = REQUIRED_MSG
			ok = false
		}
		if (message.isBlank()) {
			messageError = REQUIRED_MSG
			ok = false
		}
		return ok
	}

	// Outer padding to give breathing room; center a constrained dark form card
	Box(modifier = Modifier.fillMaxWidth().padding(top = 20.px, bottom = 24.px)) {
		Column(modifier = Modifier.fillMaxWidth(), horizontalAlignment = Alignment.CenterHorizontally) {
			// Use a Div with a style block so we can set arbitrary CSS properties like box-shadow and overflow
			Div({
				style {
					// Set the fixed width for the card and rounded corners
					width(fullWidth)
					property("border-radius", "14px")
					// Soft, subtle shadow and slight inset highlight
					property("box-shadow", "0 6px 18px rgba(0,0,0,0.28), 0 1px 0 rgba(255,255,255,0.03) inset")
					// Ensure child content is clipped to the rounded corners
					property("overflow", "hidden")
				}
			}) {
				Column(
					modifier = Modifier
						.backgroundColor(cardBg)
						.padding(20.px)
						.borderRadius(14.px) // visual radius on inner element
				) {
					// Row: First and Last
					Row(modifier = Modifier.fillMaxWidth(), horizontalArrangement = Arrangement.SpaceBetween, verticalAlignment = Alignment.CenterVertically) {
						// First Name
						Column(modifier = Modifier.width(halfWidth)) {
							Row(modifier = Modifier.fillMaxWidth().padding(bottom = 6.px), horizontalArrangement = Arrangement.SpaceBetween, verticalAlignment = Alignment.CenterVertically) {
								SpanText("First Name", modifier = Modifier.fontWeight(FontWeight.Bold).color(labelColor))
								if (firstNameError != null) SpanText(firstNameError!!, modifier = Modifier.color(errorColor))
							}
							BSInput(
								modifier = Modifier.fillMaxWidth().backgroundColor(inputBg).color(labelColor),
								value = firstName,
								label = "",
								placeholder = "First Name",
								onValueChange = { firstName = it }
							)
						}

						// spacer
						Box(modifier = Modifier.width(12.px))

						// Last Name
						Column(modifier = Modifier.width(halfWidth)) {
							Row(modifier = Modifier.fillMaxWidth().padding(bottom = 6.px), horizontalArrangement = Arrangement.SpaceBetween, verticalAlignment = Alignment.CenterVertically) {
								SpanText("Last Name", modifier = Modifier.fontWeight(FontWeight.Bold).color(labelColor))
								if (lastNameError != null) SpanText(lastNameError!!, modifier = Modifier.color(errorColor))
							}
							BSInput(
								modifier = Modifier.fillMaxWidth().backgroundColor(inputBg).color(labelColor),
								value = lastName,
								label = "",
								placeholder = "Last Name",
								onValueChange = { lastName = it }
							)
						}
					}

					// Vertical spacing
					Box(modifier = Modifier.padding(top = gap))

					// Email
					Column(modifier = Modifier.fillMaxWidth()) {
						Row(modifier = Modifier.fillMaxWidth().padding(bottom = 6.px), horizontalArrangement = Arrangement.SpaceBetween, verticalAlignment = Alignment.CenterVertically) {
							SpanText("Email", modifier = Modifier.fontWeight(FontWeight.Bold).color(labelColor))
							if (emailError != null) SpanText(emailError!!, modifier = Modifier.color(errorColor))
						}
						BSInput(modifier = Modifier.fillMaxWidth().backgroundColor(inputBg).color(labelColor), value = email, label = "", placeholder = "your@company.com", onValueChange = { email = it })
					}

					Box(modifier = Modifier.padding(top = gap))

					// Subject
					Column(modifier = Modifier.fillMaxWidth()) {
						Row(modifier = Modifier.fillMaxWidth().padding(bottom = 6.px), horizontalArrangement = Arrangement.SpaceBetween, verticalAlignment = Alignment.CenterVertically) {
							SpanText("Subject", modifier = Modifier.fontWeight(FontWeight.Bold).color(labelColor))
							if (subjectError != null) SpanText(subjectError!!, modifier = Modifier.color(errorColor))
						}
						BSInput(modifier = Modifier.fillMaxWidth().backgroundColor(inputBg).color(labelColor), value = subject, label = "", placeholder = "Subject", onValueChange = { subject = it })
					}

					Box(modifier = Modifier.padding(top = gap))

					// Message
					Column(modifier = Modifier.fillMaxWidth()) {
						Row(modifier = Modifier.fillMaxWidth().padding(bottom = 6.px), horizontalArrangement = Arrangement.SpaceBetween, verticalAlignment = Alignment.CenterVertically) {
							SpanText("Message", modifier = Modifier.fontWeight(FontWeight.Bold).color(labelColor))
							if (messageError != null) SpanText(messageError!!, modifier = Modifier.color(errorColor))
						}
						BSTextArea(modifier = Modifier.fillMaxWidth().height(110.px).backgroundColor(inputBg).color(labelColor).padding(bottom = 8.px), value = message, label = "", placeholder = "Write your message here", onValueChange = { message = it })
					}

					Box(modifier = Modifier.padding(top = gap))

					// Send Button: narrower and centered
					// Add extra fixed height spacer above the button to avoid any overlap
					Box(modifier = Modifier.height(36.px))
					BSButton(
						modifier = Modifier.width(200.px).align(alignment = Alignment.CenterHorizontally),
						text = "Send Message  ✉️",
						customization = ButtonCustomization(
							color = Colors.White,
							hoverColor = Colors.White,
							activeColor = Colors.WhiteSmoke,
							borderColor = Colors.White,
							hoverBorderColor = Colors.White,
							activeBorderColor = rgb(168, 192, 255),
							gradient = linearGradient(from = rgb(168, 192, 255), to = rgb(63, 43, 150), dir = LinearGradient.Direction.ToTopRight),
							borderRadius = BSBorderRadius(all = 50.px),
							horizontalPadding = 1.25.cssRem
						),
						onClick = {
							if (!validateAll()) {
								// Do not show a generic info message on validation failure; simply return
								return@BSButton
							}
							val recipient = "ashwani@example.com"
							val body = buildString {
								append("Name: ")
								append(firstName)
								append(" ")
								append(lastName)
								append("\n")
								append("Email: ")
								append(email)
								append("\n\n")
								append(message)
							}
							val encSubject = window.asDynamic().encodeURIComponent(subject)
							val encBody = window.asDynamic().encodeURIComponent(body)
							val mailto = "mailto:$recipient?subject=$encSubject&body=$encBody"
							window.open(mailto)
							infoMessage = "Mail client opened — if it doesn't appear, check your browser settings or use a backend API to send mails."
						}
					)

					if (infoMessage != null) {
						SpanText(infoMessage!!, modifier = Modifier.padding(top = 12.px).color(infoColor))
					}

				}
			}
		}
	}
}

@Composable
fun QuickInfos() {
	// No local state required here — keep this composable focused on layout / links

	Row(modifier = Modifier.fillMaxWidth(),
		horizontalArrangement = Arrangement.SpaceEvenly,
		verticalAlignment = Alignment.Top // changed from CenterVertically to Top
	) {
		// Start ### My Projects-------------------------------
		Row(
			modifier = Modifier.fillMaxWidth().padding(20.px)
				.padding(20.px),
			horizontalArrangement = Arrangement.SpaceEvenly,
			verticalAlignment = Alignment.Top // changed from CenterVertically to Top
		) {
			Column(
				horizontalAlignment = Alignment.Start,
				verticalArrangement = Arrangement.Center,
				modifier = Modifier.padding(10.px)
			) {
				H5 { Text("My Projects") }
				Column(
					horizontalAlignment = Alignment.Start,
					verticalArrangement = Arrangement.Center,
					modifier = Modifier.padding(10.px)
				) {
					A (
						href = "https://www.keysight.com/in/en/product/NTH50047B/nemo-handy-handheld-measurement-solution.html",
						attrs = {
							target(ATarget.Blank)
						}
					) {
						SpanText("Nemo Handy Handheld Measurement Solution", modifier = Modifier.padding(5.px))
					}
					A(
						href = "https://play.google.com/store/apps/details?id=com.mobstac.thehindu&h&pli=1",
						attrs = {
							target(ATarget.Blank)
						}
					) {
						SpanText(
							"The Hindu: India & World News",
							modifier = Modifier.padding(5.px)
						)
					}
					A(
					 href = "https://play.google.com/store/apps/details?id=com.mobstac.thehindubusinessline",
					 attrs = {
						 target(ATarget.Blank)
					 }
					) {
						SpanText(
							"The Hindu BusinessLine",
							modifier = Modifier.padding(5.px)
						)
					}
					SpanText("Shorts News", modifier = Modifier.padding(5.px))
					SpanText("KMP Shopify: Shopify Mobile Apps POC", modifier = Modifier.padding(5.px))
					SpanText("KMP Project : THE HINDU", modifier = Modifier.padding(5.px))
				}
			}
		}


		// Start ### Quick Links ### --------------------------------------
		Row(
			modifier = Modifier.fillMaxWidth().padding(20.px)
				.padding(20.px),
			horizontalArrangement = Arrangement.SpaceEvenly,
			verticalAlignment = Alignment.Top // changed from CenterVertically to Top
		) {
			Column(
				horizontalAlignment = Alignment.Start,
				verticalArrangement = Arrangement.Center,
				modifier = Modifier.padding(10.px)
			) {
				H5 { Text("Quick Links") }
				SpanText("Home", modifier = Modifier.padding(5.px).textAlign(TextAlign.Start))
				SpanText("About Me", modifier = Modifier.padding(5.px))
				SpanText("Skills", modifier = Modifier.padding(5.px))
				SpanText("Experiences", modifier = Modifier.padding(5.px))
				SpanText("Portfolio", modifier = Modifier.padding(5.px))
				SpanText("Download CV", modifier = Modifier.padding(5.px))
			}
		}

		// Start ### Follow Me-------------------------------
		Row(
			modifier = Modifier.fillMaxWidth().padding(20.px)
				.padding(20.px),
			horizontalArrangement = Arrangement.SpaceEvenly,
			verticalAlignment = Alignment.Top // changed from CenterVertically to Top
		) {
			Column(
				horizontalAlignment = Alignment.Start,
				verticalArrangement = Arrangement.Center,
				modifier = Modifier.padding(10.px)
			) {
				H5 { Text("Follow Me") }
				Div(
					attrs = Modifier
						.fillMaxWidth()
						.height(2.px)
						.backgroundColor(Colors.Blue)
						.toAttrs()
					)

				A (
					href = "https://github.com/ashwanisingh8713",
					attrs = {
						target(ATarget.Blank)
					}
				) {
					SpanText("GitHub", modifier = Modifier.padding(5.px))
				}
				A (
					href = "https://www.linkedin.com/in/ashwani-kumar-singh-45577042/",
					attrs = {
						target(ATarget.Blank)
					}
				) {
					SpanText("Linkedin", modifier = Modifier.padding(5.px))
				}

				A (
					href = "https://medium.com/@ashwanisingh8713",
					attrs = {
						target(ATarget.Blank)
					}
				) {
					SpanText("Medium", modifier = Modifier.padding(5.px))
				}
			}
		}
	}

}
