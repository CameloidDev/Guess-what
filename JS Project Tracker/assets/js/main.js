$(document).ready(function () {
	app.callLoginWindow();
})

var app = {

}


// page calls

app.callLoginWindow = function () {
	app.forgetMainPanelStackElements();
	pageContainer.innerHTML = dynamicBuilder.loginWindow();
}

app.callProfilePage = function () {

	// test - dummy profile ( to Dado: "dummy" is just an expression, you're not a dummy :) :) )
	mainPanel.innerHTML = dynamicBuilder.profilePageInfo({
		username: function () { return "SillyMeWee"; },
		role: function () { return "Backend developer"; },
		email: function () { return "danimir.pecur@eulabeia.com"; },
		registrationDate: function () { return "13.1.2018"; },
		lastLoginDate: function () { return app.parseDateDMY(new Date()); }
	});
}



// app functionality

app.parseDateDMY = function (date) {
	return date.getDate() + "." +
		( date.getMonth() + 1 ) + "." +
		date.getFullYear();
}

app.parseDateHMS = function (date) {
	return date.getHours() + ":" +
		date.getMinutes() + ":" +
		date.getSeconds();
}

app.login = function () {

	// test
	// document.location.href = "profile.html";
	
	pageContainer.innerHTML = dynamicBuilder.appPage({activeButtonIndex: 0});

	window.setTimeout(function () {
		app.setMainPanelStackElements();
		app.callProfilePage()
	}, -100);
}



app.signOut = function () {

	app.forgetMainPanelStackElements();

	app.callLoginWindow();

	// document.location.href = "index.html";
}

app.setMainPanelStackElements = function () {

	mainPanelStack = document.getElementById("mainPanelStack");
	mainPanel = document.getElementById("mainPanel");
}

app.forgetMainPanelStackElements = function () {
	mainPanelStack = null;
	mainPanel = null;
}