const dts = document.getElementById("darkthemeswitch");

if (localStorage.getItem("darkTheme") === "on") {
	document.body.classList.add("darktheme");
}

dts.addEventListener("click", () => {
	if (localStorage.getItem("darkTheme") !== "on") {
		document.body.classList.add("darktheme");
		localStorage.setItem("darkTheme", "on");
	} else {
		document.body.classList.remove("darktheme");
		localStorage.setItem("darkTheme", "null");
	}
});

