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
	if(document.getElementById('display').value == 'Error'){
		clearInit();
	}
	if(reset == true){
		var disp = document.getElementById('display');
		if( (disp.value.slice(-1) == '+') || (disp.value.slice(-1) == '-') || 
			(disp.value.slice(-1) == '*') || (disp.value.slice(-1) == '/') || 
			(disp.value.slice(-1) == '%')){
				reset = false;
			}
		clearInit();
	}
	if (document.getElementById("pw").innerHTML == "TurnOFF") {
		document.getElementById("display").value += numValue;
	}
}

function operat(operatValue) {
	if(document.getElementById('display').value == 'Error'){
		clearInit();
	}
	if (document.getElementById("pw").innerHTML == "TurnOFF") {
		document.getElementById("display").value+=operatValue;
	}
}

function solver() {
	var ans = eval(document.getElementById("display").value);
	document.getElementById("display").value = ans;
	document.getElementById("initVal").value = document.getElementById("display").value;
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