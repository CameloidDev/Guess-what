

var htmlBuilder = {
	
}



htmlBuilder.Build = function (obj) {
	
	// passed object
	var element = obj;
	// assembled code
	this.code = "";
	this.level = -2;

	// add the obj to a new object with a "children" property
	// this is the version that traverseChildren() can read
	var formattedObj = {
		"children": element
	}

	// start traversing the object
	var final = this.traverseChildren(this, formattedObj, true);

	return final.Html();


	return {
		"traverseChildren": this.traverseChildren,
		"buildElement": this.buildElement,
		"getArguments": this.getArguments,
		"Html": this.Html
	}
}

htmlBuilder.Build.prototype = Object.create(Object.prototype);
htmlBuilder.Build.prototype.constructor = htmlBuilder.Build;



htmlBuilder.Build.prototype.returnTabString = function (level) {
	var t = "";
	for (var i = 0; i < level; i++) {
		t += "\t";
	}
	return t;
}

htmlBuilder.Build.prototype.traverseChildren = function (build, element, isRoot = false) {
	var e = element;
	var i = 0;
	var code = "";
	build.level++;

	// if children found
	if ( element["children"] != undefined ) {
		
		// loop through children
		for (var i = 0; i < Object.keys(element["children"]).length; i++) {

			var temp = build.traverseChildren(build, element["children"][i]).code;
		
			code += i == 0 ? "" : "\n";

			// recursion continues down to the last element
			code += build.returnTabString(build.level) + temp;
		}
	}
	if (!isRoot) {
		// then write html starting with common attributes
		code = build.buildElement (build, element, code);
	}

	build.code = code;

	build.level--;

	// send assembled code up the chain
	return build;
}

htmlBuilder.Build.prototype.buildElement = function (build, element, content = "") {
	
	// if tag not existant, return jack shit
	if (element["tag"] == undefined) {
		return "";
	}
	
	// assembled code
	var code = "";

	// element tag
	var tag = element["tag"];
	// element class
	var cls = element["cls"];
	// element id
	var id = element["id"];

	// open element
	code += build.returnTabString(build.level) + "<" + tag;
	// append class(es) if specified
	if ( cls != undefined && cls != "" ) {
		code += " class=\"" + cls + "\"";
	}
	// append id if specified
	if ( id != undefined && id != "" ) {
		code += " id=\"" + id + "\"";
	}
	// append other attributes if specified
	if ( element["attr"] != undefined && Object.keys(element["attr"]).length > 0 ) {
		code += build.getArguments(element)
	}
	// close the opening tag
	code += ">";

	// append beforeContent if specified
	if ( element["beforeContent"] != undefined && element["beforeContent"] != "" ) {
		code += "\n" + build.returnTabString(build.level + 1) + element["beforeContent"];
	}

	// append passed content
	code += content == "" ? "" : "\n" + content;

	// append afterContent if specified
	if ( element["afterContent"] != undefined && element["afterContent"] != "" ) {
		code += "\n" + build.returnTabString(build.level + 1) + element["afterContent"];
	}

	// close the element
	code += "\n" + build.returnTabString(build.level) + "</" + tag + ">";

	// send assembled code up the chain
	return code;
}

htmlBuilder.Build.prototype.getArguments = function (element) {

	// assembled code
	var code = "";

	// loop through attributes
	for (var i = 0; i < Object.keys(element["attr"]).length; i++) {
		// append each attribute with a space before it
		code += " " + element["attr"][i];
	}

	// send assembled code up the chain
	return code;
}

htmlBuilder.Build.prototype.Html = function () {

	return this.code;
}