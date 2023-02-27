const student = {
    name: 'Kodom Ali',
    money: 5000,
    study: 'Math',
    subjects: ['Calculus', 'Algebra', 'Geometry'],
    exam: function(){
        return (this.name + ' is participating in an exam');
    },
    improveExam: function(subject){
        this.exam();
        return `${this.name} is taking an improvement exam on ${subject}`;
    },
    treatDe: function(amount, tips){
        this.money = this.money - amount - tips;
        return this.money;
    }
}

const output = student.exam();
// console.log(output);
const reExam = student.improveExam('Algebra')
// console.log(reExam);
const remaining = student.treatDe(900, 100);
console.log(remaining)