
'use strict'

// console.log(this);


// const calcAge = function(birthyear){
//     console.log(2037 - birthyear);
//     console.log(this);
// };
// calcAge(2002);


// const calcAgeArrow = birthyear =>{
//     console.log(2037 -birthyear);
//     console.log(this);
// };
// calcAgeArrow(2005)

// // arrow function donot get there this keyword they use lexical this . that means they use this of there parents 


// const jonas = {
//     year: 1991,
//     calcAge: function(){
//         console.log(this);
//         console.log( 2037 - this.year);
//     }
// }
// jonas.calcAge();

// const matilda = {
// year = 2017,
// };
// matilda.calcAge = jonas.calcAge



// let lastName ='william';
// let oldLastName = 'davis'


const arr = [1, 2, 3];


const [x, y, z] = arr;
console.log(x, y, z);



const restaurant = {
  name: 'classico Italinano',
  location: 'Via Angelo Tavanti 23, Firenze Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Oraganic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic', 'Bread', 'Caprese Salad'],
  mainmenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    }
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainmenu[mainIndex]];
  },

  orderDilevery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(`order Received! ${this.starterMenu[starterIndex]} and ${this.mainmenu[mainIndex]} will be delivered shortly Stay Tuned }`);
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`here is your delicious pasta   `);
  },

};


const { name, categories, openingHours } = restaurant;
console.log(name, openingHours, categories);

// giving different name 
const { name: naam, categories: categorys, openingHours: Hours } = restaurant;

// giving default values 
const {menu = [], starterMenu: starters = []} = restaurant;



// mutating variables in objects 
let a= 111;
let b = 434;

const obj = {a: 23 , b: 7 , c: 14 };
( {a,b} = obj );

console.log(a,b);








// const  {name ,openingHours ,mainmenu} = restaurant;
// console.log(name , openingHours, mainmenu);


// Destructing objects and array 
// const {name , openingHours, mainmenu} = restaurant;
// console.log(name,openingHours, mainmenu);

// const{ fri :{open,close}} = openingHours;

// Spread  array

const arres = [7, 8, 9];


console.log(...arres);

const newArray = [1, 3, 4, ...arres];
console.log(newArray);

const newMainMenu = [...restaurant.categories, ...restaurant.starterMenu];
console.log(newMainMenu);



/*

restaurant.orderDilevery({
    time: '22:30',
    address:'via del soel',
    mainIndex: 2,
    starterIndex: 2,
})
// Nested object 


const {fri: {open,close}} = openingHours;
console.log(open, close);
 


let [main, ,secondary] = restaurant.categories;

//Switching variables

// const temp = main;
// main = secondary;
// secondary = temp;


// Receive two values from a function 
[main,secondary] = [secondary,main]
const [starter, mainCourse ] = restaurant.order(2,1);  
console.log(starter, mainCourse);

// Destructing inside destructing

const nested = [2,3,4,[5,6]];
const [i,j, , [k , l]] = nested;
console.log(i,j,k,l);

// Default values 
const [p,q= 1,r =1] = [8,9];
console.log(p,q,r)




//Spread Operator

const newMenu = [...restaurant.mainmenu , 'virat'];
console.log(newMenu);

// creating shallow copy 
 
const mainmenus = [...restaurant.mainmenu];

// Mergeing main menu and menu

const menu = [...restaurant.mainmenu , ...restaurant.starterMenu]

// Iterable: array , strings , maps , sets , NOT objects 

const str = ' sanskar';
const letters = [...str, ' ','s']



//Rest opeator used left side of =  operator 

//



 
const [pizza ,  , Risotto, ...others] =[...restaurant.mainmenu , ...restaurant.starterMenu];
console.log(pizza, Risotto,others);


//  Functions

const add = function(...numbers){
  let sum = 0;
  for(let  i=0; i<numbers.length;i++){
      sum = sum + numbers[i];
  }
console.log(sum);
};
const pure = [1,23,3,5];
add(...pure);
add(1,44,64,7,6,87);

*/


// coding challenge practice 
/*
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
/*
*/
/*
  const  [ player1,player2 ] = game.players;
  console.log(player1,player2);

  const [gk, ...fieldplayer] = [...player1];
console.log(gk, fieldplayer);

const allPlayer = [...player1, ...player2];
console.log(allPlayer);

const player1Final = [...player1, 'Thiago' , 'Coutinho', 'Peristic'];

const {team1 , x:draw , team2} = game.odds;

function printGoals (){
  console.log(playerNames)

}

printGoals()


// Optional chaning

if(restaurant.openingHours && restaurant.openingHours.mon)
console.log(restaurant.openingHours);

// With optional chaining
console.log(restaurant.openingHours.mon?.open);

// Optional chaining on method

console.log(restaurant.order?.(0,1)  ?? 'Method does not exist ');
console.log(restaurant.orderRisotto?.(0,1)  ?? 'Method does not exist ');

// Optional chaining on array
const users = [
  {name:'jonas', email: 'User array empty'}
];

console.log(users[0]?.name ?? 'User array empty ');



// Looping objects 


const entries = Object.entries(openingHours);
console.log(entries);
for (const [days, {open , close}] of entries)
{
console.log( `on  ${days}  we open at ${open} and close at ${close}`);
}

*/

// ;
// for (const  [i, player] of game.scored.entries()){
//   console.log(`Goal ${i +1}:`, player);
// }
// console.log(Object.values(game.odds));

//  let average = 0;
// for(const avgOdd of Object.values(game.odds)){
//     average += avgOdd;
// }
// console.log(average/Object.values(game.odds).length);




//  for(const [team , odd] of Object.entries(game.odds)){
//  console.log(`Odd of ${odd}`);
//  }





//  maps in javascript

const rest = new Map();
rest.set('name', 'Classici Italiano');
rest.set(1, 'firenze,Itality');
rest.set(2, 'lisbin').set('categories', [1, 3, 4]).set('open', 1).set('close', 12).set(true, 'we are open :D').set(false, 'we are close :(');

console.log(rest.set('hello', 'sam'));

const time = 13;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

//checking if map has certain key

console.log(rest.has('categories'));

// deleting certain items from map
rest.delete('hello');
console.log(rest);
console.log(rest.size);


//  Removing all the elements  from maps 

// rest.clear();
// console.log(rest);


// Using objects or arrays as map keys 

rest.set([1, 2], 'Test');
console.log(rest);


console.log(rest.get([1, 2])); // undefined

// AS we learned from behind the scene lecture objects don't behave the same way as primitives 

// to make them work 

const arrays = [1, 2];
rest.set(arrays, 'test');

console.log(rest.get(arrays));


//doing the same with dom element because they are also basically objects
rest.set(document.querySelector('h1', 'Heading'));


const question = new Map(
  [
    ['question', 'what is your favourite programming language'],
    [1, 'c'],
    [2, 'java'],
    [3, 'javascript'],
    ['correct', 3],
    [true, 'correct answer'],
    [false, 'try again dude'],

  ])
console.log(question);
console.log(Object.entries(openingHours));



// Converting an pre made  Object to an Map
const hoursMap = new Map(Object.entries(openingHours));

console.log(hoursMap);






// Maps Iteration

// iteration is possible for maps as we know maps are also iterables and using for loop we can iterate it 





// Quiz app
console.log(question.get('question'));

for (const [key, value] of question) {
  if (typeof key == 'number')
    console.log(`Answer ${key}: ${value}`);

}

const answer = 3;
// const answer = Number(prompt('what is your answer'));
console.log(answer);

console.log(question.get(answer == question.get('correct')));


// Convert map to array 
console.log(question);
console.log([...question]);
//using array methods 

console.log([...question.keys()]);
console.log([...question.entries()]);
console.log([...question.values()]);