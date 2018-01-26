// this contains all the functions called by button clicks

function ExecuteButton () {

	app.Output( app.GetInput() );
	console.log(document.getElementById("inputField").value || "input field is empty");
}