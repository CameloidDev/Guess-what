
htmlBuilder.parts = function () {

}

htmlBuilder.parts.prototype = Object.create(Object.prototype);



htmlBuilder.parts.object = function (
	tag = "",
	cls = "",
	id = "",
	attr = [],
	children = {},
	beforeContent = "",
	afterContent = ""
	) {

	// assembled object
	var obj = { }

	// if tag not specified, fuck this shit I'm out
	if (tag == "")
		return null;

	// define tag
	obj = Object.assign(obj, {"tag": tag});

	// define cls (class)
	obj = cls == "" ? obj : Object.assign(obj, {"cls": cls});

	// define id
	obj = id == "" ? obj : Object.assign(obj, {"id": id});

	// define children
	obj = Object.keys(children).length == 0 ? obj : Object.assign(obj, {"children": children});

	// define beforeContent
	obj = beforeContent == "" ? obj : Object.assign(obj, {"beforeContent": beforeContent});

	// define afterContent
	obj = afterContent == "" ? obj : Object.assign(obj, {"afterContent": afterContent});

	if ( attr.length > 0 ) {
		var a = {}

		for (var i = attr.length - 1; i >= 0; i--) {
			a = Object.assign(a, {i: attr[i]});
		}

		// define attr
		obj = Object.assign(obj, {"attr": a});
	}

	/*console.log("Passed parameters: " +
		"\ntag: " + tag +
		"\ncls: " + cls +
		"\nid: " + id +
		"\nattr: " + attr +
		"\nchildren: " + children +
		"\nbeforeContent: " + beforeContent +
		"\nafterContent: " + afterContent);
	console.log("Built object: ");
	console.log(obj);
	console.log("\n-------------------------------------------\n");*/

	return obj;
}

htmlBuilder.parts.pageSkeletonEvenOlder = function (
	description = "Page generated with HTML Builder by Eulabeia Web Studio.",
	version = "0.1",
	keywords = "HTML, htmlBuilder",
	author = "",
	stylesheetPath = "assets/css/main.css",
	title = "Page Skeleton"
	) {
	
	// assembled object
	var obj = {	}

	// nesting index
	var index = 0;

	// construct the inside of <head>
	var headContent = {}

	// construct charset
	headContent = Object.assign(headContent, {index: htmlBuilder.parts.object(
	/*	tag				*/	"meta",
	/*	class			*/	"",
	/*	id				*/	"",
	/*	attributes		*/	["charset=\"UTF-8\""]
	)});

	index++;

	// construct description
	headContent = Object.assign(headContent, {index: htmlBuilder.parts.object(
	/*	tag				*/	"meta",
	/*	class			*/	"",
	/*	id				*/	"",
	/*	attributes		*/	["name=\"description\" content=\"" + description + "\""]
	)});

	index++;

	// construct version
	headContent = Object.assign(headContent, {index: htmlBuilder.parts.object(
	/*	tag				*/	"meta",
	/*	class			*/	"",
	/*	id				*/	"",
	/*	attributes		*/	["name=\"version\" content=\"" + version + "\""]
	)});

	index++;

	// construct keywords
	headContent = Object.assign(headContent, {index: htmlBuilder.parts.object(
	/*	tag				*/	"meta",
	/*	class			*/	"",
	/*	id				*/	"",
	/*	attributes		*/	["name=\"keywords\" content=\"" + keywords + "\""]
	)});

	index++;

	// construct author
	headContent = Object.assign(headContent, {index: htmlBuilder.parts.object(
	/*	tag				*/	"meta",
	/*	class			*/	"",
	/*	id				*/	"",
	/*	attributes		*/	["name=\"author\" content=\"" + author + "\""]
	)});

	index++;

	// construct viewport
	headContent = Object.assign(headContent, {index: htmlBuilder.parts.object(
	/*	tag				*/	"meta",
	/*	class			*/	"",
	/*	id				*/	"",
	/*	attributes		*/	["name=\"viewport\" content=\"width=device-width, initial-scale=1.0\""]
	)});

	index++;

	// construct stylesheet
	headContent = Object.assign(headContent, {index: htmlBuilder.parts.object(
	/*	tag				*/	"meta",
	/*	class			*/	"",
	/*	id				*/	"",
	/*	attributes		*/	["rel=\"stylesheet\" type=\"text/css\" href=\"" + stylesheetPath + "\""]
	)});

	index++;

	// construct object
	headContent = Object.assign(headContent, {index: htmlBuilder.parts.object(
	/*	tag				*/	"title",
	/*	class			*/	"",
	/*	id				*/	"",
	/*	attributes		*/	[],
	/*	children		*/	{},
	/*	beforeContent	*/	title
	)});

	// construct <head> and append headContent
	var head = htmlBuilder.parts.object(
	/*	tag				*/	"head",
	/*	class			*/	"",
	/*	id				*/	"",
	/*	attributes		*/	[],
	/*	children		*/	headContent,
	/*	beforeContent	*/	"",
	/*	afterContent	*/	""
	);

	// construct <body> and append headContent
	var body = htmlBuilder.parts.object(
	/*	tag				*/	"body"
	);

	// construct <head> and append headContent
	var html = htmlBuilder.parts.object(
	/*	tag				*/	"html",
	/*	class			*/	"",
	/*	id				*/	"",
	/*	attributes		*/	[],
	/*	children		*/	Object.assign({}, {0: head, 1: body})
	);

	var final = "<!DOCTYPE html>\n" + new htmlBuilder.Build(html).Html();
}

htmlBuilder.parts.pageSkeletonOld = function (
	description = "Page generated with HTML Builder by Eulabeia Web Studio.",
	version = "0.1",
	keywords = "HTML, htmlBuilder",
	author = "",
	stylesheetPath = "assets/css/main.css",
	title = "Page Skeleton"
	) {

	var html = {
		0: {
			tag:"html",
			children:{
				0:{
					tag:"head",
					children:{
						0:{
							tag:"meta",
							attr:{
								0:"charset=\"UTF-8\""
							}
						},
						1:{
							tag:"meta",
							attr:{
								0:"name=\"description\" content=\"" + description + "\""
							}
						},
						2:{
							tag:"meta",
							attr:{
								0:"name=\"version\" content=\"" + version + "\""
							}
						},
						3:{
							tag:"meta",
							attr:{
								0:"name=\"keywords\" content=\"" + keywords + "\""
							}
						},
						4:{
							tag:"meta",
							attr:{
								0:"name=\"author\" content=\"" + author + "\""
							}
						},
						5:{
							tag:"meta",
							attr:{
								0:"name=\"viewport\" content=\"width=device-width, initial-scale=1.0\""
							}
						},
						6:{
							tag:"meta",
							attr:{
								0:"rel=\"stylesheet\" type=\"text/css\" href=\"" + stylesheetPath + "\""
							}
						},
						7:{
							tag:"title",
							beforeContent:title
						}
					}
				},
				1:{
					tag:"body"
				}
			}
		}
	}

	return "<!DOCTYPE html>\n" + new htmlBuilder.Build(html).Html();
}

htmlBuilder.parts.pageSkeleton = function (
	description = "Page generated with HTML Builder by Eulabeia Web Studio.",
	version = "0.1",
	keywords = "HTML, htmlBuilder",
	author = "",
	stylesheetPath = "assets/css/main.css",
	title = "Page Skeleton"
	) {

	var html =
	"<!DOCTYPE html>"+
	"\n<html>"+
	"\n\t<head>"+
			"\n\t\t<meta charset=\"UTF-8\">"+
			"\n\t\t<meta name=\"description\" content=\""+description+"\">"+
			"\n\t\t<meta name=\"version\" content=\""+version+"\">"+
			"\n\t\t<meta name=\"keywords\" content=\""+keywords+"\">"+
			"\n\t\t<meta name=\"author\" content=\""+author+"\">"+
			"\n\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">"+
			"\n\t\t<link rel=\"stylesheet\" type=\"text/css\" href=\""+stylesheetPath+"\">"+
			"\n\t\t<title>"+
			"\n\t\t\t"+title+
			"\n\t\t</title>"+
		"\n\t</head>"+
		"\n\t<body>"+
		"\n\t"+
		"\n\t"+
		"\n\t"+
		"\n\t</body>"+
	"\n</html>"

	return html;
}

htmlBuilder.parts.button = function (name, attributes) {
	return "<button " + attributes + ">" + name + "</button>";
}