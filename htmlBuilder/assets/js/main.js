
var page;

$(document).ready(function() {
	onLoad();
});

function showCode (code) {
	page.innerHTML = htmlBuilder.parts.button("back", "onclick=\"reloadPage();\"");
	page.innerHTML += "<textarea id=\"outputArea\" style=\"width: 100%; height: calc(100vh - 10px);\"></textarea>";
					document.getElementById("outputArea").value = code;
}

function reloadPage () {
	document.location.href = "index.html";
}

function onLoad () {
	page = document.getElementById("page");
	page.innerHTML += htmlBuilder.parts.button("Page Skeleton", "onclick=\"getPageSkeleton();\"");
}


// parts


function getPageSkeleton () {
	showCode(htmlBuilder.parts.pageSkeleton());
}