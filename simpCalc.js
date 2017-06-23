
var reset = false;

//var checker = document.getElementById("pw").innerHTML;

function power(){
	document.getElementById("display").value = "clicked";
	document.getElementById("pw").innerHTML = "OFF";
}

function backSpace() {
	var backSpaceVar = document.getElementById("display").value;
	document.getElementById("display").value = backSpaceVar.slice(0, backSpaceVar.length - 1);
}

function clearScreen() {
	document.getElementById("display").value = "";
}

function nums(numValue) {
	if (true) {clearInit();}
	
	document.getElementById("display").value += numValue;
}

function operat(operatValue) {
	document.getElementById("display").value+=operatValue;
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