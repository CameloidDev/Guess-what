
// declare the namespace
// this is just an empty object
window.app = window.app || { }



// a simple data class for translating local settings to JSON
app.LocalData = function (username = "") {

	// which username last logged in last
	var name = username;

	// getter for the private name variable
	this.Username = function () {
		return name;
	}

	// setter for the private name variable
	this.ChangeUser = function (newUsername) {
		name = newUsername;
		alert("name changed to: " + name);
	}

	// make a simple version of the object
	this.Dummify = function () {

		// return an object with desired properties
		return {
			username: this.Username()
		};
	}
}

// set the prototype of the object to Object.prototype
app.LocalData.prototype = Object.create(Object.prototype);
// set the LocalData constructor to be the LocalData function
// this introduces more of class functionality to LocalData
app.LocalData.prototype.constructor = app.LocalData;

// translate JSON into new LocalData object
app.LocalData.UnDummify = function (dummy) {

	// validate the dummy object properties
	if (dummy == null || dummy.username == undefined) {
		console.log("ERROR (LocalData.UnDummify): Required properties missing from dummy.");
		return null;
	}

	// return LocalData object	
	return new app.LocalData(dummy.username);
}



app.Users = { }

// load UserSystem.Profile from storage
app.Users.LoadUser = function (username) {

	// load the user from storage
	var dummy = Storage.Load("UserProfile_" + username);
	
	// check if the user was found in storage
	if ( dummy == null ) {
		// if not, alert an error and return null
		alert("ERROR: User \"" + username + "\" not found in storage!");
		return null;
	}

	// create a new instance of UserSystem.Profile
	var profile = new UserSystem.Profile(username);

	// register the new user
	userDB.Register(username);

	// return (UserSystem.Profile) profile
	return profile;
}

// save UserSystem.Profile to storage
app.Users.SaveNewProfile = function (newUsername) {

	// create new UserSystem.Profile
	var profile = new UserSystem.Profile(newUsername);

	// check if storage contains username
	if ( Storage.Contains("UserProfile_" + profile.Username()) ) {
		// log an error and return null
		console.log("ERROR: Username \"" + profile.Username() + "\" found in database files!");
		return null;
	}

	// add username to the database
	userDB.Register(profile.Username());

	// save user to storage
	Storage.SaveNew( "UserProfile_" + profile.Username(), profile.Dummify() );

	// return profile on success
	return profile;
}

app.Users.SaveExistingProfile = function (userProfile) {

	// create a JSON dummy from the profile
	var dummy = userProfile.Dummify();

	// save the JSON dummy
	Storage.Overwrite("UserProfile_" + dummy.username, dummy);
}




// create an instance of UserSystem.Database
var userDB = new UserSystem.Database();
// try loading LocalData from storage, create new LocalData if returned null
var lData = app.LocalData.UnDummify( Storage.Load("LocalData") ) || new app.LocalData();
$(document).ready(function() {
	Page.OnLoad();
});