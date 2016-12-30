angular.module('myApp', [])
	.controller('myController', controllerFunction)


function controllerFunction()	{
	var myCtl = this;

	myCtl.message= function(){
		console.log('Kurt Rules!')
	
	myCtl.stuff = 'Kurt is a Emo-driver'
}
	myCtl.showcars= false

	myCtl.betterCars = function()	{
		myCtl.showcars= !myCtl.showcars
	}

	myCtl.counter = 0	

	myCtl.counting = function()	{
		myCtl.counter++
	}

}