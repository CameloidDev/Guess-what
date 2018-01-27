
var pageContainer = null;

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