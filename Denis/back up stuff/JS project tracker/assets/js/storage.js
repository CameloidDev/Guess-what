
// declare the namespace
// this is just an empty object
window.Storage = window.Storage || {}

// load from localStorage and translate JSON into object
Storage.Load = function (objectName) {
	var parsed = JSON.parse( localStorage.getItem(objectName) );
	//console.log("loaded \"" + objectName + "\": " + parsed);
	//console.log("parsed again: " + JSON.parse(parsed));
	return parsed;
}

// check if localStorage contains objectName key
Storage.Contains = function (objectName) {
	return Storage.Load(objectName) != null;
}

// save only if a key with objectName value isn't already present in localStorage
Storage.SaveNew = function (objectName, object) {
	// if key found in localStorage...
	if ( Storage.Load(objectName) != null ) {
		// log a message and return a fail
		console.log("ERROR (Storage.SaveNew): Object " + objectName + " already exists!");
		return false;
	}

	// save the object under objectName key
	Storage.Overwrite(objectName, object);

	// return a success
	return true;
}

// save the object in localStorage under objectName key
Storage.Overwrite = function (objectName, object) {
	localStorage.setItem( objectName, JSON.stringify(object) );
	console.log("Overwitten \"" + objectName + "\" key: " + object)
}

// delete objectName key from localStorage
Storage.Delete = function (objectName) {
	// if objectName key not found
	if ( Storage.Load(objectName) == null ) {
		// log a message and return a fail
		console.log("ERROR (Storage.Delete): Object " + objectName + " not found!");
		return false;
	}

	// remove entry with objectName key from localStorage
	localStorage.removeItem(objectName);

	// return a success
	return true;
}

// get an array of all keys in localStorage
Storage.GetKeys = function () {
	// declare an array
	var keys = [];

	// loop through all the indexes
	for (var i = localStorage.length - 1; i >= 0; i--) {
		// copy each string into keys array
		keys[i] = localStorage.key(i);
	}

	// return keys
	return keys.reverse();
}

Storage.DeleteAll = function (bool = false) {

	if (!bool) {
		alert("No deleting storage items today, mistah!");
		return;
	}

	var keys = Storage.GetKeys(); 

	// loop through all the indexes
	for (var i = localStorage.length - 1; i >= 0; i--) {
		// copy each string into keys array
		localStorage.removeItem(keys[i]);
	}
}




