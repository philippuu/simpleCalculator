var powerCheck = document.getElementById("power");

function powerOnOff() {
	if (powerCheck.innerHTML == "ON") {
		document.getElementById("power").innerHTML = "OFF";
	} else {
		document.getElementById("power").innerHTML = "ON";
	}
}

function backSpace() {
	var backSpaceVar = document.getElementById("display").value;
	document.getElementById("display").value = backSpaceVar.slice(0, backSpaceVar.length - 1);
}

function clearScreen() {
	document.getElementById("display").value = "";
}

function nums(numValue) {
	document.getElementById("display").value += numValue;
}

function operat(operatValue) {
	document.getElementById("display").value+=operatValue;
}

function solver() {
	var ans = eval(document.getElementById("display").value);
	document.getElementById("display").value = ans;
}

function dot() {
	document.getElementById("display").value += ".";
}