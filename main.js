let answer = prompt("Your username");
if (answer == "Admin") {
	let pw = prompt("Your password");
	if (pw == "The Master") {
		alert("Welcome.");
	} else if (pw == null) {
		alert("Canceled");
	} else {
		alert("Wrong password");
	}
} else if (answer == null) {
	alert("Canceled");
} else {
	alert("I don't know you");
}
