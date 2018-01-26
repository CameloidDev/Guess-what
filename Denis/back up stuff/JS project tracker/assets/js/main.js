/*

	passive functions

*/

function OnStartApp () {
	/*
	Input:
	> username from localstorage

	Actions:
	> if username found
		> login

	Output:
	none
	*/
}

/*

	active functions

*/

function Login () {
	/*
	Input:
	> username
	> register as new

	Actions:
	> if reguster as new
		> register
	> add username into localstorage
	> load profile.html

	Output:
	> add username into localstorage
	*/
}

function Register () {
	/*
	Input:
	> username

	Actions:
	> create new user profile
	> add new user to storage (localstorage)

	Output:
	> add new user to storage (localstorage)
	*/
}

function Logout () {
	/*
	Input:
	none

	Actions:
	> remove username from localstorage
	> load index.html

	Output:
	none
	*/
}

function loadProfilePage () {
	/*
	Input:
	> username from localstorage

	Actions:
	> get user profile from username
	> set content from profile

	Output:
	none
	*/
}

function loadTasksPage () {
	/*
	Input:
	> get filters and order from localstorage

	Actions:
	> if filters and order not found
		> add to localstorage:
			> filter: username
			> order: recent open

	Output:
	none
	*/
}

function addTask () {
	/*
	Input:
	> name
	> priority
	> username (assignee)
	> description
	> parent task

	Actions:
	> make new task
	> send event (New task)
	> add new task to storage (localstorage)

	Output:
	none
	*/
}

/*

	event functions

*/





