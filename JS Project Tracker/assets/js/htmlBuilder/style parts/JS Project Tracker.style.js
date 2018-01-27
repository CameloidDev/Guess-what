
htmlBuilder.jsProjectTracker = function () {

}

htmlBuilder.jsProjectTracker.prototype = Object.create(Object.prototype);



htmlBuilder.jsProjectTracker.window = function (
	title = "New window",
	content = "",
	id = ""
	) {

	var part =
	"<div class=\"window\" id=\""+id+"\">\n" +
		"\t<span class=\"window-title\">" +
		title +
		"</span>\n" +
		"\t<div class=\"window-content\">\n" +
		content + "\n" +
		"\t</div>\n" +
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



