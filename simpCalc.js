function backSpace() {
	var backSpaceVar = document.getElementById("display").value;
	document.getElementById("display").value = backSpaceVar.slice(0, backSpaceVar.length - 1);
}

function nums(numValue) {
	document.getElementById("display").value += numValue;
}

function operat(operatValue) {
	document.getElementById("display").value+=operatValue;
}