// this will run when the page loads
function OnLoad () {
	
	var user = new UserSystem.Profile ("admin");

	//var dummyUser = { username : user.Username() }
	var dummyUser = user.Dummify();
	//var dummyUser = user.DummifyProto();

	var userJSON = JSON.stringify(dummyUser);

	var userParsed = JSON.parse(userJSON);



	console.log(user);
	console.log(userJSON);
	console.log(userParsed);
}

var UserSystem = {

}

UserSystem.Profile = function (username) {
	
	var name = username;

	var THIS = this;

	var Username = function () {
		return name;
	}

	function Is (username) {
		return name == username; 
	}

	function ChangeUsername (newUsername) {
		name = newUsername;
	}

	var Dummify = function () {
		var dummy = {
			username : Username()
		}
		return dummy;
	}

	this.Username = function () {
		return Username();
	}

	this.Is = function (username) {
		return Is(Username);
	}

	this.ChangeUsername = function (newUsername) {
		ChangeUsername(newUsername);
	}

	this.Dummify = function () {
		return Dummify();
	}

	return {
		Dummify: Dummify,
		DummifyProto: this.DummifyProto,
		Username : Username
	}
}

UserSystem.Profile.prototype = Object.create(Object.prototype);
UserSystem.Profile.prototype.constructor = UserSystem.Profile;

UserSystem.Profile.prototype.DummifyProto = function () {
		var dummy = {
			username : this.Username()
		}
		return dummy;
}

