// functional/object style
// const person = {
// 	name : 'tosin',
// 	age : 26
// }

//class style
console.log(__dirname,__filename);
class Person {
	constructor(name, age){
		this.name = name;
		this.age = age;
	}
	greeting(){
		console.log(`${this.name} is ${this.age} years old`);
	}
}


module.exports = Person;