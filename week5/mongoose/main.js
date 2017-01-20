var mongoose = require('mongoose')
	
	//COnnection sring format
	//protocol://<domain>/<database>
	//mongodb://localhost/databaseName
	mongoose.connect('mongodb://localhost/contracts', (err) =>	{
		if(err)	{
			console.log("bad news:", err)
		} else	{
			console.log("mongoose connected!")
		}
	})

	var Person = mongoose.model('contactInfo', {
		fname: {type: String, required:true},
		lname: String,
		phone: {type: String, unique:true},
		age: String, 
		isMarried: Boolean, 
		created: {type:number, default:() =>Date.now()}
	})

	function createPerson(attributes)	{
		var person = new Person(attributes)
		console.log (person);
		person.save(); //save this person object to the database
	}

	function getPerson(query)	{
		Person.find(query || {}, (err, people) =>{
			if(err)	{
				console.log("couldnt find:", err)
			}else {
				return people;
			}
		}

	}

	var people = getPerson();
		console.log("")
	createPerson({
		fname: 'joe', 
		lname: 'smith', 
		phone: '222-222-4444' 
		isMarried: true, 
		canRIdeABicycle: false})



