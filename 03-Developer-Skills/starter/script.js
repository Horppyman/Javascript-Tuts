// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// const x = 23;
// if (x === 23) console.log(23);

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// const calcTempAmplitude = function (temps) {
//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== "number") continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };

// const amplitude = calcTempAmplitude(temperatures);
// console.log(amplitude);

// calcTempAmplitude should receive two arrays, merge them before calculating amplitude

const calcTempAmplitudeNew = function (t1, t2) {

    // cocnat is an array method that joins two arrays
    const temps = t1.concat(t2);
    let max = temps[0];
    let min = temps[0];
  
    for (let i = 0; i < temps.length; i++) {
      const curTemp = temps[i];
      if (typeof curTemp !== "number") continue;
  
      if (curTemp > max) max = curTemp;
      if (curTemp < min) min = curTemp;
    }
    console.log(max, min);
    return max - min;
  };
  
  const amplitudeNew = calcTempAmplitudeNew(temperatures, [21,5,7,2,55]);
  console.log(amplitudeNew)

 
const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];
 
  const printForecast = function (arr) {
    let str = '';
    for (let i = 0; i < arr.length; i++) {
        str += `${arr[i]}C in ${i + 1} days ... `;
    }
    
    console.log('...' + str);
  }

  printForecast(data1)