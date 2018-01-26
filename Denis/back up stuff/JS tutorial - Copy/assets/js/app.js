
// OnLoad() and FrameUpdate() pre-setup

var event_FrameUpdate = new CustomEvent ("event_FrameUpdate", {'detail' : { test : "test_value" }});

var mainContainerElement = document.getElementById("mainContainer");
var buttonsContainerElement = document.getElementById("buttonsContainer");

var outputField = document.getElementById("outputField");
var inputField = document.getElementById("inputField");
var executeButton = document.getElementById("executeButton");


var outputContent = "result";

function OnDocumentLoad () {
	
	document.addEventListener("event_FrameUpdate", FrameUpdate, false);

	OnLoad();

	setInterval(dispatchFrameUpdate, 34);
}

function dispatchFrameUpdate () {
		document.dispatchEvent(event_FrameUpdate);
}

// functionality

var app = {

}

app.Output = function (content) {
	output = content;
	outputField.innerHTML = content;
}

app.GetInput = function () {
	return inputField.value;
}

app.GetElementValue = function (elementID) {
	return document.getElementById(elementID).value;
}

app.SetElementContent = function (elementID, content) {
	app.getElementById(elementID).innerHTML = content;
}
