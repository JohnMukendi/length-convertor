
let feet = document.getElementById("feet");
let meter = document.getElementById("meter");
let inches = document.getElementById("inches");
let cm = document.getElementById("cm");
let yards = document.getElementById("yards");
let kilometers = document.getElementById("kilometers");
let miles = document.getElementById("miles");



function feetToOthers(val){
	meter.value = val/3.2808;
	inches.value = val*12;
	cm.value = val/0.032808;
	yards.value = val*0.33333;
	kilometers.value = val/3280.8;
	miles.value = val*0.00018939;
}

function meterToOthers(val){
	feet.value = val * 3.2808;
	inches.value = val * 39.3760;
	cm.value = val/0.01;
	yards.value = val*1.0936;
	kilometers.value = val/1000;
	miles.value = val*0.00062137;
}

function inchesToOthers(val){
	feet.value = val * 0.083333;
	meter.value = val / 39.370;
	cm.value = val / 0.39370;
	yards.value = val * 0.027778;
	kilometers.value = val/ 39370;
	miles.value = val * 0.000015783;
}

function cmToOthers(val){
	feet.value = val * 0.032808;
	meter.value = val / 100;
	inches.value = val * 0.39370;
	yards.value = val * 0.010936;
	kilometers.value = val / 100000;
	miles.value = val * 0.0000062137;
}

function yardsToOthers(val){
	feet.value = val * 3;
	inches.value = val * 36;
	cm.value = val / 0.010936;
	meter.value = val / 1.0936;
	kilometers.value = val / 1093.6;
	mile.value = val * 0.00056818;
}

function kilometersToOthers(val){
	feet.value = val * 3280.8;
	inches.value = val * 39370;
	cm.value = val * 100000;
	yards.value = val * 1093.6;
	meter.value = val * 1000;
	miles.value = val * 0.62137;
}

function milesToOthers(val){
	feet.value = val * 5280;
	inches.value = val * 63360;
	cm.value = val / 0.0000062137;
	yards.value = val * 1760;
	kilometers.value = val / 0.62137;
	meter.value = val / 0.00062137;
}




function converterToOthers(convertFrom, value){
switch(convertFrom){
	case "feet" : feetToOthers(parseFloat(value)); break;
	case "meter" : meterToOthers(parseFloat(value)); break;
	case "inches" : inchesToOthers(parseFloat(value)); break;
	case "cm" : cmToOther(parseFloats(value)); break;
	case "yards" : yardsToOther(parseFloats(value)); break;
	case "kilometers" : kilometersToOther(parseFloats(value)); break;
	case "miles" : milesToOther(parseFloats(value)); break;
	}
}