
// username input field element
var usernameElement = document.getElementById("username");
// "register as a new user" input element
var registerNew = document.getElementById("registerNewUser");
// user profile that's being logged in
var profile = null;

// declare the namespace
// this is just an empty object
window.Page = window.Page || { }



// called when the page finishes loading
Page.OnLoad = function () {

	// if a username is found in (LocalData) lData
	if (lData.Username() != "") {
		// login with that username
		Page.Login();
	}
	// otherwise log a message
	else {
		console.log("New LocalData instance created.");
	}
}

// attempt to login the user
Page.Login = function () {

	// just for convenience
	var name = lData.Username();

	// if no username supplied
	if ( name == "" ) {
		// if input field is empty
		if ( usernameElement.value != null || usernameElement.value != "" ) {
			// log a message and abort the login
			console.log("Login attempt aborted. Input field is empty.");
			return;
		}
		// otherwise set username to input field's value
		else {
			name = usernameElement.value;
		}
	}

	// if register as new user is checked but
	// register attempt fails then fuck this shit
	// NOTE: this will also set the profile to the
	// newly registered profile
	if ( registerNew.checked && Page.Register(name) == null ) {
		return;
	}
	// otherwise login with username
	else {
		// load the user from storage
		profile = app.Users.LoadUser(name);
		// if load failed then fuck this shit
		if ( profile == null ) {
			alert("Login attempt aborted. Username not found.");
			return;
		}
	}

	// update username in localData
	lData.ChangeUser(name);

	Storage.Overwrite( "LocalData", lData.Dummify() );
	alert("New Username is: " + app.LocalData.UnDummify(Storage.Load("LocalData")).Username());

	// go to profile.html
	window.location.href = "profile.html";
}

// attempt to register the user
Page.Register = function (username) {

	// attempt to save a new profile using username and
	// set profile variable to the newly created profile
	profile = app.Users.SaveNewProfile(username);
	
	// if profile creation failed
	if ( profile == null ) {
		// alert a message and return null
		alert("User already exists. Uncheck \"register as a new user\" to login.")
		return null;
	}

	// return the new profile
	return profile;
}
