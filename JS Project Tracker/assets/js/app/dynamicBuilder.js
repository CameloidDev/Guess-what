
var pageContainer = null;
var mainPanelStack = null;
var mainPanel = null;

$(document).ready(function () {
	pageContainer = document.getElementById("pageContainer");
});


dynamicBuilder = {

}



dynamicBuilder.loginWindow = function () {

	var windowContent =
	"<input type=\"text\" name=\"username\" placeholder=\"your username here...\">" +
	htmlBuilder.jsProjectTracker.checkbox("Register as a new user","registerAsNew") +
	"<button onclick=\"app.login()\">Proceed</button>";
	
	var loginWindow =
	htmlBuilder.jsProjectTracker.window(
		"Login / Register",
		windowContent,
		"loginWindow");
	
	var part =
	"<div class=\"invisible-container\" id=\"loginPageContainer\">" +
		"<header>" +
			"<h1 id=\"title\">JS Project Tracker</h1>" +
		"</header>" +
		loginWindow +
		"<footer>" +
			"<span>Made by Eulabeia Web Studio 2018</span>" +
		"</footer>" +
	"</div>";

	return part;
}

dynamicBuilder.appPage = function (settings) {

	var panelStack = htmlBuilder.jsProjectTracker.panelStack ({
		// panelStack settings
		buttons: ["Profile<i class=\"material-icons\">person</i>",
		"Project activity",
		"User list",
		"Task list"],
		activeButtonIndex: settings.activeButtonIndex || 0,
		buttonIds: ["profilePanelButton",
		"activityPanelButton",
		"usersPanelButton",
		"tasksPannelButton"],
		panelStackId: "mainPanelStack",
		panelId: "mainPanel",
		content: settings.content || ""
	});

	var part = 
		"<header>" +
			"<h2 id=\"appTitle\">JS Project Tracker</h2>" +
			"<h1 id=\"title\">Profile</h1>" +
		"</header>" +
			panelStack +
		"<footer>" +
			"<span>Made by Eulabeia Web Studio 2018</span>" +
		"</footer>";

	return part;
}

dynamicBuilder.profilePageInfo = function (profile) {

	/*if ( userSystem.Profile.ValidateUsername(profile.username) == false) {
		console.log("Failed to build profilePageInfo. \"" + profile.username + "\" is an invalid username.");
		return;
	}*/

	var username = profile.username();
	var role = profile.role();
	var email = profile.email();
	var registrationDate = profile.registrationDate();
	var lastLoginDate = profile.lastLoginDate();

	var part =
		"<div class=\"invisible-container\" id=\"profileContainer\">" +
			"<div class=\"invisible-container\">" +
				"<p>Role: " + role + "</p>" +
				"<p>Email: " + email + "</p>" +
			"</div>" +
			"<div class=\"invisible-container\">" +
				"<h1>" + username + "</h1>" +
				"<button onclick=\"app.signOut()\">Sign out</button>" +
			"</div>" +
			"<div class=\"invisible-container\">" +
				"<p>Registration date: " + registrationDate + "</p>" +
				"<p>Last login: " + lastLoginDate + "</p>" +
			"</div>" +
		"</div>";

		return part;
}