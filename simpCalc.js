var app = angular.module('myApp',[]);

app.controller('MyCtrl', function($scope){
	$scope.display = "";
	$scope.pw = "TurnON";
	$scope.reset = false;

	$scope.power = function() {
	 	if ($scope.pw == "TurnON") {
	 		$scope.pw = "TurnOFF";
	 		$scope.display = "0";
	 	} else {
	 		$scope.pw = "TurnON";
	 		$scope.display = "";
	 	}
 	};

 	$scope.set_color = function() {
	    if($scope.pw == "TurnOFF"){
	        return {"background-color": "green"};
	    }else{
	        return {"background-color": "red"};
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
		$scope.clearInit();
		if($scope.pw == "TurnOFF"){
			if($scope.display == "0") {
	 			$scope.display = btn;
			}else{
		 		$scope.display += btn;
			}
		}
		
 	};

 	$scope.operat = function(op) {
 		$scope.clearInit();
 		if($scope.pw == "TurnOFF"){
 			$scope.display += op;
 		}
 	};

 	$scope.solver = function() {
		$scope.display = eval($scope.display);
		$scope.reset = true;
	};

	$scope.clearInit = function(){
		if($scope.reset){
			$scope.display = "0";
			$scope.reset = false;
		}
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