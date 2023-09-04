'use strict';

// const calcAverage = (val1, val2, val3) => {
//     const averageScore = (val1 + val2 + val3) / 3;
//     return averageScore;
// }

// const calcAverage = (a,b,c) => (a + b + c) / 3;

// const averageDolphinScore1 = calcAverage(44,23,61);
// const averageKoalaScore1 = calcAverage(65,54,49);

// const averageDolphinScore = calcAverage(85,54,41);
// const averageKoalaScore = calcAverage(23,34,27);

// function checkWinner(averageDolphinScore, averageKoalaScore) {
//     if(averageDolphinScore >= (averageKoalaScore * 2)){
//         console.log(`Dolphins win (${averageDolphinScore} vs ${averageKoalaScore})`);
//     } else if (averageKoalaScore >= (averageDolphinScore * 2)) {
//         console.log(`Koalas wins (${averageKoalaScore} vs ${averageDolphinScore})`);
//     } else {
//         console.log(`They are both shites.`)
//     }
// }

// checkWinner(averageDolphinScore1, averageKoalaScore1);

// const price = 275;
// const tip = price <= 300 && price >= 50 ? bill * 0.15 : bill * 0.2;
// console.log(`The bill was ${price}, the tip was ${tip} and the total value ${price + tip}`);

// const calcTip = function (bill) {
//     if (bill <= 300 & bill >= 50) {
//         return bill * 0.15;
//     } else {
//         return bill * 0.2;
//     }
// }

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]

// console.log(bills, tips)

// const man = {
//     firstName: 'Tall',
//     lastName: 'Tall',
//     birthYear: 1991,
//     job: 'techie',
//     friends: ['Mike', 'Tundun wada', 'kuchingoro'],
//     calcAge: function () {
//         this.age = 2023 - this.birthYear;
//         return this.age;
//     },
//     hasDriversLicence: true,
//     getSummary: function(){
//         return `${this.firstName} is a ${this.calcAge()}-year old ${man.job}, and he has ${this.hasDriversLicence ? 'a' : 'no'} driver's license.`
//     }
// }

// // console.log(`${man.firstName} has ${man.friends.length} friends, and his best friend is ${man.friends[0]}`)

// console.log(man.getSummary())

// const mark = {
//     fullName: 'Mark Miller',
//     mass: 78,
//     height: 1.69,
//     calcBMI: function(){
//         this.bmi = this.mass / (this.height ** 2);
//         return this.bmi;
//     }
// }

// const john = {
//     fullName: 'John Smith',
//     mass: 92,
//     height: 1.95,
//     calcBMI: function(){
//         this.bmi = this.mass / (this.height ** 2);
//         return this.bmi;
//     }
// }
// mark.calcBMI()
// john.calcBMI()

// if (mark.bmi > john.bmi){
//     console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than John's (${john.bmi})!`);
// } else {
//     console.log(`${john.fullName}'s BMI (${john.bmi}) is greater then Mark's (${mark.bmi})!`);
// }

//for loop
const jonas = [
    'Jonas',
    'Boygirl',
    2023 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
]

// for (let i = 0; i < jonas.length; i++){
//     console.log(jonas[i], typeof jonas[1]);
// }

//create a new array from a loop
// const years = [1994, 1991,1987, 1998];
// const ages = [];
// for(let i = 0; i < years.length; i++){
//     ages.push(2023 - years[i]);
// }
// console.log(ages);

//continue and break
// console.log('---ONLY STRINGS---');
// for (let i = 0; i < jonas.length; i++){
//     if (typeof jonas[i] !== 'string') continue;
//     console.log(jonas[i], typeof jonas[i]);
// }

// console.log('---BREAK WITH NUMBERS---');
// for (let i = 0; i < jonas.length; i++){
//     if (typeof jonas[i] === 'number') break;
//     console.log(jonas[i], typeof jonas[i]);
// }

//looping backwards
// for (let i = jonas.length -1; i>= 0; i--){
//     console.log(jonas[i]);
// }

//loops inside loops
for(let exercise = 1; exercise < 4; exercise++){
    console.log(`--------- Starting exercise ${exercise}`);
    for (let rep = 1; rep <=5; rep++){
        console.log(`Lifting weight repetition ${rep}`);
    }
}