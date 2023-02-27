//* 1. Create an object using object Literals
const player ={};
player.name = 'Messi';
player.specialty = 'Footballer';
player.ball = function(){
    // console.log('Hit the ball');
};



// console.log(player);
// player.ball();

const student = {
    name: 'Evo',
    job: 'student',
    football: function(){
        console.log('throw the ball');
    },
    salary: 1000000,
}

//* 2. object constructor
const person = new Object();
// console.log(person);

//* 3. Object create method
// const item = Object.create(null);
const atel = Object.create(student);
// console.log(atel.name);

//* 4. Class
class Person{
    name = 'Abul';
    address = 'sadar ghat';
    constructor(age){
        this.age = age;
    }
}
const person1 = new Person(56);
console.log(person1);

//* 5. Function
function Car(model, price){
    this.model = model;
    this.price = price;
}

const tesla = new Car('elon', 32)