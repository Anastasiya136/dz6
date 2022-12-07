
let number = parseInt(prompt("Write a number")) ;

console.log(number, number === 12);

if(number >= 1 && number <= 2) {
    alert('Зима');
} else if(number >= 3 && number <= 5) {
    alert('Весна');

} else if(number >= 6 && number <= 8) {
    alert('Літо');
}
 else if(number >= 9 && number <= 11) {
    alert('Осінь');
}  else if(number === 12) {
    alert('Зима');
}


let question1 = parseInt(prompt("Скільк місяців в році?")) ;

let rightResultCounter = 0;

if(question1 === 12) {
    rightResultCounter++;
}


let question2 = parseInt(prompt("Який айфон випущено у 2022р.?(номера моделі)")) ;

if(question2 === 14) {
    rightResultCounter++;
}

let question3 = parseInt(prompt("Скільки днів у тижні?")) ;

if(question3 === 7) {
    rightResultCounter++;
}

let question4 = parseInt(prompt("У якому році Україна стала незалежною?")) ;

if(question4 === 1991) {
    rightResultCounter++;
}




alert("True questions = " + rightResultCounter);



