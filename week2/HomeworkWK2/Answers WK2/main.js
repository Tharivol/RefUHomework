//triple five

var tripleFive =function()	{
	for (var i=0; i<3; i++)	{
		console.log('Five!');
	}
}

tripleFive();


// ********************************************









// ********************************************

//Last letter

var lastLetter = function (str)	{
	return str.charAt(str.length-1);
}
lastLetter('hello')
lastLetter('island')

// ********************************************

//Last letter version 2

var lastLetter = function (str)	{
	return str.substring(str.length-1,1);
}
console.log('last Letter of hello is'+lastLetter 'hello')

// ********************************************

//square

console.log('square')
	var square = function(number)	{
			return number * number;
			console.log("the square of 2 is " + square 2);
	}

// ********************************************
//negative of a number

function negate (number)	{
	return number * -1;
}
console.log("negate 2 becomes" +negate 2);
// ********************************************

var toArray = function(a,b,c) 	{
	return[a,b,c];
}
console.log("to array" + toArray 1,4,5);
// ********************************************

//starts with A
var firstA =function (string)	{
		first= string[0].toUpperCase();
		if (first ==="A")	{
				return true
			} else{
				return false
			}
		}
		console.log("Aardvark starts with A? "+firstA("Ardvark"))

// ********************************************

var excite = function(exclam)	{
	console.log(exclaim + '!!!');
	excite ('yes');
}

// ********************************************

//sun Exercise

var sun = function(str)	{
	var result = str.indexOf('sun');
	if(result !== -1)	{
		return true
	}else {
		return false
	}
	}
console.log(sun ('sundries'))
// ********************************************
//tiny

var tiny =function(number)	{
	return number>= 0 && num er<==1;
}
console.log(tiny (0,3))
// ********************************************
//expects a string like ##:## (minutes and seconds)

var getSeconds = function (string)	{
	var spllitted = string.split(':');
	//convert strings in array to numbers using the + sign and add them
	var result = +splitted[0] *60 + +splitted [1];
	return result;
}
console.log("22:33" + getSeconds('22:33'))




