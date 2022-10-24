
document.getElementById("reg").addEventListener("click", function (event) {
	location.href = "#tworzenie-konta"
});
document.getElementById("reg").addEventListener("keyup", ({ key }) => {
	if (key === "Enter") {
		location.href = "#tworzenie-konta"
	}
});