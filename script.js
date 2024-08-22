//complete this code
class Person {
	constructor (name,age){
		this.name = name;
		this.age = age;
	}
}
const person = new Person('john',30);
person.name;
person.age = 25;


class Student extends Person {
	study = () => console.log(`${this.name} is studying`)
}

class Teacher extends Person {
	teach = () => console.log(`${this.name} is teaching`)
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
