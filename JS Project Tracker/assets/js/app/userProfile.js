UserSystem = {

}

UserSystem.Profile = function (settings) {

	if ( UserSystem.Profile.ValidateUsername(settings.username) == false ) {
		console.log("Can't create user profile. \"" + settings.username + "\" is an invalid username.");
		return null;
	}

	var name = settings.username;
	var password = settings.password;

	var role = settings.role || "";
	var email = settings.email || "";
	var registrationDate = settings.registrationDate || new Date();
	var lastLoginDate = settings.lastLoginDate || new Date();

	var eventLog = [];

	// getters
	var Username = function () { return name; }
	var Role = function () { return role; }
	var Email = function () { return email; }
	var RegistrationDate = function () { return registrationDate; }
	var LastLoginDate = function () { return lastLoginDate; }



	return {
		username: Username,
		role: Role,
		email: Email,
		registrationDate: RegistrationDate,
		lastLoginDate: LastLoginDate
	}
}

UserSystem.Profile.prototype = Object.create(Object.prototype);
UserSystem.Profile.prototype.constructor = UserSystem.Profile;

UserSystem.Profile.prototype.ValidateUsername = function (name) {
	
	if ( settings.username == null || settings.username == undefined || settings.username == "" ) {
		return false;
	}

	return true;
}



