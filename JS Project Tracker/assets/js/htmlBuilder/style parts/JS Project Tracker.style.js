
htmlBuilder.jsProjectTracker = function () {

}

htmlBuilder.jsProjectTracker.prototype = Object.create(Object.prototype);



htmlBuilder.jsProjectTracker.window = function (
	title = "New window",
	content = "",
	id = ""
	) {

	var windowTitle = "\n\t\t" + title + "\n\t";
	var windowId = id == "" ? "" : " id=\"" + id + "\"";
	var windowContent = content == "" ? "" : "\n\t\t" + content + "\n\t";

	var part =
	"<div class=\"window\"" + windowId + ">\n" +
		"\t<span class=\"window-title\">" +
		windowTitle +
		"</span>\n" +
		"\t<div class=\"window-content\">" +
		windowContent +
		"</div>\n" +
	"</div>";

	return part;
}

htmlBuilder.jsProjectTracker.checkbox = function (
	text = "Checkbox option",
	id = ""
	) {

	if (id == "") {
		do {
			id = Math.random().toString(36).substring(2, 15);
		} while (document.getElementById(id) != null);
	}

	var part =
	"<input type=\"checkbox\" id=\"" + id + "\">\n" +
	"<label type=\"checkbox\" for=\"" + id + "\">" + text + "</label>";

	return part;
}

htmlBuilder.jsProjectTracker.radioButton = function (
	text = "Radio button option",
	id = ""
	) {

	if (id == "") {
		do {
			id = Math.random().toString(36).substring(2, 15);
		} while (document.getElementById(id) != null);
	}

	var part =
	"<input type=\"radio\" id=\"" + id + "\">\n" +
	"<label type=\"radio\" for=\"" + id + "\">" + text + "</label>";

	return part;
}

htmlBuilder.jsProjectTracker.panel = function (options) {

	var panelId = options["id"] == "" ? "" : " id=\"" + options["id"] + "\"";
	var panelContent = options["content"] == "" ? "" : "\n\t\t" + options["content"] + "\n\t";

	var part =
	"<div class=\"panel\"" + panelId + ">" +
		panelContent +
	"</div>";

	return part;
}

/*	Settings properties:

		*buttons					string array,
		*activeButtonIndex			int,
		**buttonIds					string array,
		panelStackId				string,
		stackId						string,
		panelId						string,
		content						string

	* - required
	** - must be the same length as "buttons" property,
		input "" for buttons without IDs
*/
htmlBuilder.jsProjectTracker.panelStack = function (settings = null) {

	if ( settings == null || settings["buttons"] == undefined || settings["buttons"].length < 1 ) {
		return "";
	}

	var buttonsArr  = settings["buttons"] == undefined ? "" : settings["buttons"];
	var buttonIdsArr = settings["buttonIds"] == undefined ? "" : settings["buttonIds"];

	var panelStackId = settings["panelStackId"] == undefined ? "" : " id=\"" + settings["panelStackId"] + "\"";
	var stackId = settings["stackId"] == undefined ? "" : " id=\"" + settings["stackId"] + "\"";
	var panelId = settings["panelId"] == undefined ? "" : settings["panelId"];

	var content = settings["content"] == undefined ? "" : "\t" + settings["content"] + "\n";

	var buttonIds = [];

	for (var i = 0; i < buttonIdsArr.length; i++) {
		
		if ( buttonIdsArr[i] != "" ) {
			buttonIds.push(" id=\"" + buttonIdsArr[i] + "\"");
			break;
		}
		
		buttonIds.push("");
	}

	var buttons = "";

	for (var i = 0; i < buttonsArr.length; i++) {

		buttons += i == 0 ? "" : "\n";

		var cls = i == settings["activeButtonIndex"] ? " class=\"active\"" : "";

		buttons += "\t\t<li>" +
		htmlBuilder.parts.button(buttonsArr[i], cls + buttonIds[i]) +
		"</li>";
	}

	buttons = "\t<ul class=\"stack\"" + stackId + ">\n" + buttons + "\n\t</ul>";

	var part =
	"<div class=\"panel-stack\"" + panelStackId + ">\n" +
		buttons +
		"\t" + htmlBuilder.jsProjectTracker.panel({content: content, id: panelId}) + "\n" +
	"</div>";

	return part;
}





