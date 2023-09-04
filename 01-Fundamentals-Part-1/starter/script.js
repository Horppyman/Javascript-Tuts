// const marksHeight = 1.69;
// const marksWeight = 78;
// const johnsHeight = 1.95;
// const johnsWeight = 92;

// marksBMI = marksWeight / (marksHeight ** 2);
// console.log(marksBMI);

// johnsBMI = johnsWeight / (johnsHeight ** 2);
// console.log(johnsBMI);

// const markHigherBMI = marksBMI > johnsBMI;
// console.log(markHigherBMI);

// if(marksBMI > johnsBMI){
//     const res1 = `Marks BMI (${marksBMI}) is higher than John's (${johnsBMI}).`;
//     console.log(res1);
// } else {
//     const res2 = `John's BMI (${johnsBMI}) is higher than Mark's (${marksBMI}).`;
//     console.log(res2);
// }

// const dolphinScores = [96, 108, 89];
// const koalaScores = [88, 91, 110];

// let averageDolphinScore = dolphinScores.reduce((a, b) => a + b, 0) / dolphinScores.length;
// let averageKoalaScores = koalaScores.reduce((a,b) => a + b, 0) / koalaScores.length;
// if(averageDolphinScore > averageKoalaScores && averageDolphinScore > 100){
//     console.log(`Dolphins wins with an average of ${averageDolphinScore}!`)
// } else if (averageKoalaScores > averageDolphinScore && averageKoalaScores > 100) {
//     console.log(`Koalas wins ith an averaage of ${averageKoalaScores}!`)
// } else if (averageDolphinScore === averageKoalaScores && averageDolphinScore > 100 && averageKoalaScores > 100){
//     console.log('seems like they both have stone head.')
// } else {
//     console.log('No one wins the trophy')
// }

const price = 275;
const tip = price <= 300 && price >= 50 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${price}, the tip was ${tip} and the total value ${price + tip}`);