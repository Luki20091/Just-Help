
document.getElementById("vol").addEventListener("click", function (event) {
	location.href = "wolontariusz.html"
});
document.getElementById("vol").addEventListener("keyup", ({ key }) => {
	if (key === "Enter") {
		location.href = "wolontariusz.html"
	}
});
document.getElementById("nec").addEventListener("click", function (event) {
	location.href = "potrzebujacy.html"
});
document.getElementById("nec").addEventListener("keyup", ({ key }) => {
	if (key === "Enter") {
		location.href = "potrzebujacy.html"
	}
});