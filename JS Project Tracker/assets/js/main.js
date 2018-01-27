$(document).ready(function () {
	pageContainer.innerHTML = dynamicBuilder.loginWindow();
})

var app = {

}



app.login = function () {

	document.location.href = "profile.html";
}



app.signOut = function () {

	document.location.href = "index.html";
}