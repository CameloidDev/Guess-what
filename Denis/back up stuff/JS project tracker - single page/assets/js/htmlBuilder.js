window.htmlBuilder = window.htmlBuilder || {}


htmlBuilder.Build = function (obj) {
	
	// passed object
	var element = obj;
	// assembled code
	var code = "";

	/*
	// traverse can't operate on obj because it has no children property
	// handle in init() and call traverse on obj properties (elements) there
	code = traverseChildren(this, obj);
	*/

	init ();

	function init () {
		// add the obj to a new object with a "children" property
		// this is the version that traverseChildren() can read
		var formattedObj = {
			"children": element
		}

		// start traversing the object
		code += this.traverseChildren(this, formattedObj);
	}

	function traverseChildren (build, element) {
		var e = element;
		var i = 0;
		var code = "";

		// if children found
		if ( element["children"] != undefined ) {
			// loop through children
			for (var i = 0; i < element["children"].length; i++) {
				// recursion continues down to the last element
				code += build.traverseChildren(build, element["children"][i]);
			}
		}
		// then write html starting with common attributes
		code = build.buildElement (build, element, code);

		// send assembled code up the chain
		return code;
	}

	function buildElement (build, element, content = "") {
		
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
		code += "<" + tag;
		// append class(es) if specified
		if ( cls != undefined || cls != "" ) {
			code += " class=\"" + cls + "\"";
		}
		// append id if specified
		if ( id != undefined || id != "" ) {
			code += " id=\"" + id + "\"";
		}
		// append other attributes if specified
		if ( element["attr"] != undefined || element["attr"].length > 0 ) {
			code += build.getArguments(element)
		}
		// close the opening tag
		code += ">";

		// append beforeContent if specified
		if ( element["beforeContent"] != undefined || element["beforeContent"] != "" ) {
			code += element["beforeContent"];
		}

		// append passed content
		code += content;

		// append afterContent if specified
		if ( element["afterContent"] != undefined || element["afterContent"] != "" ) {
			code += element["afterContent"];
		}

		// close the element
		code += "</" + tag + ">";

		// send assembled code up the chain
		return code;
	}

	function getArguments (element) {

		// assembled code
		var code = "";

		// loop through attributes
		for (var i = 0; i < element["attr"].length; i++) {
			// append each attribute with a space before it
			code += " " + element["attr"][i];
		}

		// send assembled code up the chain
		return code;
	}

	return code;
}