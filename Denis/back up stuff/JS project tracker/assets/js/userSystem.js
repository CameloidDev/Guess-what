
// declare the namespace
// this is just an empty object
window.UserSystem = window.UserSystem || { }

// define a Database function of UserSystem
// we'll make it into a class
UserSystem.Database = function () {
	
	// list of all usernames
	var users = [];

	// public getter for private users variable
	this.Usernames = function () {
		return users;
	}

	// check if users contains a username
	this.Contains = function (username) {
		// loop through all the entries
		for (var i = 0; i < users.length; i++) {
			// return if a match is found...
			if (users[i] == username) {
				return true;
			}
		}
		// ... else return false
		return false;
	}

	// put a new username into users
	this.Register = function (username) {
	
		// check if a user with that username already exists
		if ( this.Contains(username) ) {
			// alert an error and return null
			console.log("UserSystem.Database already contains \"" + username + "\".");
			return;
		}

		// add the user to the list of all users
		users.push(username);
	}

	// make a simple version of the object
	this.Dummify = function () {
		
		// return an object with desired properties
		return {
			usernames: this.Usernames()
		}
	}
}

// set the prototype of the object to Object.prototype
UserSystem.Database.prototype = Object.create(Object.prototype);
// set the Database constructor to be the Database function
// this introduces more of class functionality to Database
UserSystem.Database.prototype.constructor = UserSystem.Database;

// translate JSON into new Database object
UserSystem.Database.UnDummify = function (dummy) {

	// validate the dummy object properties
	if (dummy == null || dummy.users == undefined) {
		console.log("ERROR (UserSystem.Database.UnDummify): Required properties missing from dummy.");
		return null;
	}

	// create Database object
	var obj = new UserSystem.Database();
	// set properties
	for (var i = 0; i < dummy.users.length; i++) {
		obj.Register(dummy.users[i]);
	}

	// return Database object
	return obj;
}



// define a Profile function of UserSystem
// we'll make it into a class
UserSystem.Profile = function (username) {
	
	// username associated with this profile
	var name = username;

	// getter for the private name variable
	this.Username = function () {
		return name;
	}

	// checks if a username matches this profile's name
	this.Is = function (username) {
		return name == username; 
	}

	// setter for the private name variable
	this.ChangeUsername = function (newUsername) {
		name = newUsername;
	}

	// make a simple version of the object
	this.Dummify = function () {

		// return an object with desired properties
		return {
			username: this.Username()
		}
	}
}

// set the prototype of the object to Object.prototype
UserSystem.Profile.prototype = Object.create(Object.prototype);
// set the Profile constructor to be the Profile function
// this introduces more of class functionality to Profile
UserSystem.Profile.prototype.constructor = UserSystem.Profile;

// translate JSON into new Profile object
UserSystem.Profile.UnDummify = function (dummy) {

	// validate the dummy object properties
	if (dummy == null || dummy.username == undefined) {
		console.log("ERROR (UserSystem.Profile.UnDummify): Required properties missing from dummy.");
		return null;
	}

	// return LocalData object	
	return new UserSystem.Profile(dummy.username);
}



