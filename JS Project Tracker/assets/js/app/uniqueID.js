UniqueID = {

}

/*UniqueID.DateAndUUID = function (arrayOfUniqueIDs) {
	var id = ( new Date ).getTime() + 
	var date = new Date;
	var dateString =
		date.getFullYear() + "." +
		( date.getMonth() + 1 ) + "." +
		date.getDate() + " / " +
		date.getHours() + ":" +
		date.getMinutes() + ":" +
		date.getSeconds();

	if ( arrayOfUniqueIDs != undefined && arrayOfUniqueIDs != null ) {
		while ( UniqueID.IsUnique(arrayOfUniqueIDs, id) == false ) {
			id = 
		}
		return arrayOfUniqueIDs.push(id);
	}

	return id;
}*/

// add a global list of UUIDs and a corresponding function

UniqueID.UUID = function (arrayOfUniqueIDs) {
	var id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

	if ( arrayOfUniqueIDs != undefined && arrayOfUniqueIDs != null ) {
		while ( UniqueID.IsUnique(arrayOfUniqueIDs, id) == false ) {
			id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
		}

		return arrayOfUniqueIDs.push(id);
	}

	return id;
}

UniqueID.IsUnique = function (array, id) {
	if ( array.isArray() ) {
		return array.find(id) == undefined;
	}
	console.log("Passed argument is not an array");
	return undefined;
}

/*UniqueID.InsertIntoSortedList = function (array) {
	// write out for bigger systems
}

// lol this function (??) xD
UniqueID.SortArray = function (array) {
	return array.sort();
}*/