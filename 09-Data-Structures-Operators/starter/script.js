'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const weekdays = ['mon', 'tue', 'wed', 'thur', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  //ES6 enhanced object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

//LOOPING OBJECTS - FOR OF
// Property names
const properties = Object.keys(openingHours);

let openStr = `We are open on ${properties.length} days: `;
for (const day of properties) {
  openStr += `${day}, `;
}
// console.log(openStr);

//Property values
const values = Object.values(openingHours);
// console.log(values);

//Entire Object
const entries = Object.entries(openingHours);
// console.log(entries)

// for (const [day, {open, close}] of entries ){
//   console.log(`On ${day}, we open at ${open} and close at ${close}.`);
// }

//OPTIONAL CHAINING
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);

//   //Example
// const days = ['mon', 'tue', 'wed', 'thur', 'fri', 'sat', 'sun'];
// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`on ${day}, we open at ${open}`);
// }
//   //Methods
// console.log(restaurant.order?.(0,1) ?? 'Method does not exists');
// console.log(restaurant.orderRissoto?.(0,1) ?? 'MEthod does not exist');

//FOR-OF LOOP
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// for (const x of menu) console.log(x);

// // restaurant.orderDelivery({
// //   time: '22:30',
// //   address: 'Somewhere on earth',
// //   mainIndex: 2,
// //   starterIndex: 2,
// // });

// //destructuring objects
// const { name, openingHours, categories } = restaurant;
// // console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// // console.log(restaurantName, hours, tags);

// // Assigning default values
// // const { menu = [], starterMenu: starters = [] } = restaurant;
// // console.log(menu, starters);

// // Mutating variables - objects
// // let a = 111;
// // let b = 999;
// // const obj = { a: 23, b: 7, c: 14 };
// // ({ a, b } = obj);
// // console.log(a, b);

// // Destructuring nested objects
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// // console.log(o, c);

// // Destructuring arrays
// let [main, , secondary] = restaurant.categories;
// // console.log(main, secondary);

// // Switching variables
// // const temp = main;
// // main = secondary;
// // secondary = temp;
// // console.log(main, secondary);

// //Mutating variables - arrays
// [main, secondary] = [secondary, main];
// // console.log(main, secondary);

// const [starter, mainCourse] = restaurant.order(2, 0);
// // console.log(starter, mainCourse);

// // Nested destructuring
// const nested = [2, 4, [5, 6]];
// const [i, , [j, k]] = nested;
// // console.log(i, j, k);

// //Default values
// const [p = 1, q = 1, r = 1] = [8, 2];
// // console.log(p, q, r);

// //spread operators
// const arr = [7, 8, 9];
// const newArr = [1, 2, ...arr];
// // console.log(newArr);
// // console.log(...newArr);

// //create new array from existing array
// const newMenu = [...restaurant.mainMenu, 'Eba'];
// // console.log(newMenu);

// //join 2 arrays
// const completeMenu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// // console.log(completeMenu);

// // Real world example
// // Array
// const ingredients = [
//   // prompt("Let's make pasta! Ingredient 1?"),
//   // prompt('Ingredient 2'),
//   // prompt('Ingredient 3')
// ];

// // restaurant.orderPasta(...ingredients);

// // Objects
// // const newRestaurant = { foundedIn:1998, ...restaurant, founder: 'Agbabiaka'}
// // console.log(newRestaurant);

// // REST Operator
// //Arrays
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// // console.log(a, b, others);

// //Objects
// const { sat, ...weekdays } = restaurant.openingHours;
// // console.log(weekdays);

// //Functions
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
// };

// // add(2, 3);
// // add(4, 5, 6, 7, 8);
// // add(-2, 3, 4, 8, -8, -7, 9);

// const addArr = [34, 9, 7, 8];
// // add(...addArr);

// // restaurant.orderPizza('chicken', 'saauce', 'onions')

// // Modern operators
// const rest1 = {
//   name: 'Capri',
//   // numGuests: 20,
//   numGuests: 0,
// }

// const rest2 = {
//   name: 'La Piazza',
//   owner: 'Giovanni Rossi',
// }

// //OR assignment operator - takes 0 as null
// // rest1.numGuests = rest1.numGuests || 10;
// // rest2.numGuests = rest2.numGuests || 10;
// // rest1.numGuests ||= 10;
// // rest2.numGuests ||= 10;

// //nullish assignment operator (null or undefined)
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// //AND assignment operator
// // rest1.owner = rest1.owner && '<ANONYMOUS';
// // rest2.owner = rest2.owner && '<ANONYMOUS';
// rest1.owner &&= '<ANONYMOUS';
// rest2.owner &&= '<ANONYMOUS';
// // console.log(rest1);
// // console.log(rest2);

// // Exercise 1
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// // //CODING CHALLENGE
// // //1.
// // const [players1, players2] = game.players;
// // console.log(players1, players2)

// // //2.
// // const [gk, ...fieldPlayers] = players1;
// // console.log(gk, fieldPlayers)

// // //3.
// // const allPlayers = [...players1, ...players2]
// // console.log(allPlayers)

// // //4.
// // const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic']
// // console.log(players1Final)

// // //5.
// // const {odds: {team1, x:draw, team2}} = game;
// // console.log(team1, draw, team2)

// // //6.
// // const printGoals = function (...players) {
// //   console.log(`${players.length} goals were scored`);
// // }

// // printGoals('a','b','c','d');
// // printGoals('a','b');
// // printGoals(...game.scored)

// // //7.
// // team1 < team2 && console.log('Team 1 is more likely to win');
// // team1 > team2 && console.log('Team 2 is more likely to win');

// CODING CHALLENGE 2
// 1.
// for (const [i, player] of game.scored.entries()) console.log(`Goal ${i + 1}: ${player}`)

//2.
// const odds = Object.values(game.odds);
// let average = 0;
// for (const odd of odds) average += odd;
// average /= odds.length;
// console.log(average);

//3.
// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
//   console.log(`Odd of ${teamStr} ${odd}`);
// }

//SETS

const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
// console.log(ordersSet);
// console.log(ordersSet.size);
// console.log(ordersSet.has('Pizza'));

//MAPS
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open')
  .set(false, 'We are closed');

//example
const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));