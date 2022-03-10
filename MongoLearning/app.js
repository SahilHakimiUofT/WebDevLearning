//require the Mongoose package (after running >npm i mongoose in Hyper to install it)
const mongoose = require('mongoose');

//connect to MongoDB by specifying port to access MongoDB server
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/FruitsDB',{useNewUrlParser: true});
  }

//create a SCHEMA that sets out the fields each document will have and their datatypes
const fruitSchema = new mongoose.Schema ({
	name: String,
	rating: Number,
	review: String
})

//create a MODEL
const Fruit = new mongoose.model ("Fruit", fruitSchema)

//create a DOCUMENT
const fruit = new Fruit ({
	name: "Apple",
	rating: 7,
	review: "Great!"
})

//save the document
fruit.save()

//**CHALLENGE: Set up a people database with one document and two fields**//
//create a SCHEMA
const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

//create a MODEL
const Person = mongoose.model('Person', personSchema);

//create a DOCUMENT
const person = new Person({
  name: "John",
  age: 37
});

//Save it
person.save();
