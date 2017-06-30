var app = angular.module('myApp',[]);

app.controller('MyCtrl', function($scope){
	$scope.display = "0";
	$scope.pw = "TurnON";

	$scope.power = function() {
	 	if ($scope.pw == "TurnON") {
	 		$scope.pw = "TurnOFF";
	 		$scope.display = "0";
	 	} else {
	 		$scope.pw = "TurnON";
	 		$scope.display = "";
	 	}
 	};

	$scope.clearScreen = function(btn) {
	 	if($scope.display !== "0") {
			$scope.display = "0";
		}
 	};

 	$scope.backSpace = function(btn) {
	 	var backSpaceVar = $scope.display;
	 	$scope.display = backSpaceVar.slice(0, backSpaceVar.length - 1);
	};

	$scope.nums = function(btn) {
		if($scope.display == "0") {
	 		$scope.display = btn;
		}else{
	 		$scope.display += btn;
		}
 	};

 	$scope.operat = function(op) {
	 $scope.display += op;
 	};

 	$scope.solver = function() {
		$scope.display = eval($scope.display);
	};
});

/*var reset = false;

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
}*/