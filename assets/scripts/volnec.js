
document.getElementById("vol").addEventListener("click", function (event) {
	location.href = "wolontariusz"
});
document.getElementById("vol").addEventListener("keyup", ({ key }) => {
	if (key === "Enter") {
		location.href = "wolontariusz"
	}
});
document.getElementById("nec").addEventListener("click", function (event) {
	location.href = "potrzebujacy"
});
document.getElementById("nec").addEventListener("keyup", ({ key }) => {
	if (key === "Enter") {
		location.href = "potrzebujacy"
	}
});
