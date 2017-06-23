
var reset = false;

//var checker = document.getElementById("pw").innerHTML;

function power(){
	if (document.getElementById("pw").innerHTML == "TurnON") {
		document.getElementById("pw").innerHTML = "TurnOFF";
		document.getElementById("pw").style.background = "green";
	} else {
		document.getElementById("pw").innerHTML = "TurnON";
		document.getElementById("display").value = "";
		document.getElementById("pw").style.background = "red";
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
	clearInit();
	if (document.getElementById("pw").innerHTML == "TurnOFF") {
		document.getElementById("display").value += numValue;
	}
}

function operat(operatValue) {
	clearInit();
	if (document.getElementById("pw").innerHTML == "TurnOFF") {
		document.getElementById("display").value+=operatValue;
	}
}

function solver() {
	var ans = eval(document.getElementById("display").value);
	document.getElementById("display").value = ans;
	reset = true;
}

function dot() {
	document.getElementById("display").value += ".";
}

function clearInit(){
	if(reset){
		document.getElementById("display").value = "";
		reset = false;
	}
}