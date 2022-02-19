'use strict';


// Default parameter 


const bookings = [];

 const createBooking = function(flightNum,
     numPassengers =1,
     price =199* numPassengers ){
// Before ES6 way or ES 5 way 
// numPassengers = numPassengers || 1;
// price = price || 1;



  const booking ={
      flightNum,
      numPassengers,
      price,
  }
  console.log(booking);
  bookings.push(booking); 
 }

createBooking('LH123');

// we can override the default value 

createBooking('LH124', 2 , 800*1.2);
// funtion parameter can even contain a expression


// We can not  leave a parameter to leave a parameter just set it value to undefined 

createBooking("SaM", undefined, 199);





// How passing arguments Works Values vs Reference


const flight = 'LH123';
const sam = {
    name: 'sam khandelwal',
    passport: 2529838558
}


const checkIn = function ( flightName, passenger){
flightName = 'LH999';
passenger.name = 'Mr. ' + passenger.name;

if(passenger.passport ===  2529838558){
    // alert('checked in')
}
else{
    // alert('checked out ')
}
}
checkIn(flight,sam);



// Real life consequences of the following

const newPassport = function(person){
person.passport = Math.trunc(Math.random()* 100000000);

}
newPassport(sam);


checkIn(flight, sam);



/// Function accepting callback function 

const oneWord = function(str){
    return str.replace(/ /g, '').toLowerCase();
}


const upperFirstWord = function(str){
  const [first, ...others ] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
}


// Higher order function
const transformer = function(str,fn){
console.log(`Transfomed string is : ${fn(str)}`); 
console.log(`Transfomed string is : ${fn.name}`); 
}
transformer('javascript is the best', upperFirstWord);
transformer('javascript is the best', oneWord);

// we are only passing the value  not calling the function in upper code 



// practising function inside function 



const greet = function(greeting){
    return function(name){
        console.log(`${greeting} ${name}`);
    }
}


// two liner to call a function 
const heyGreeter = greet('hey'); 
heyGreeter("jonas");
heyGreeter("steven");


// one linear 

greet('hello')('jonas');
// greet('hello') is a function so we can immediately call it by passing another arguments.






// Small  challenge writing above function into arrow function.

const greeting = function(greeting){
    return function(name){
        console.log(`${greeting} ${name}`);
    }
}

const greetHi = greeting => name =>  console.log(`${greeting} ${name}`);
greetHi('hi')('jonas');


// the call and apply method 

const lufthansa = {
    airline: 'Lufthansa',
    iatacode: 'LH',
    bookings: [],

    // Enhanced object literal
    // book: function(){};
    book(flightNum, name){
        console.log(
            `${name} booked a seat on ${this.airline} flights ${this.iatacode}${flightNum}`
        );
        this.bookings.push({flight:`${this.iatacode} ${flightNum}`, name })
}
}
console.log(lufthansa.bookings);
lufthansa.book(239, 'jonas');


const eurowings = {
    airline: 'Eurowings',
    iatacode:  'Ew',
    bookings: [],
};

const book = lufthansa.book;


// Does not work 
// book(23,'sarah william');

// here book function is a regular function call and in regular function call this keyword is undefined 
 


// How to tell java script explicitly that that at what this keyword is pointing to 
// we use call ot apply method 


book.call(eurowings, 23 , 'Sarah Williams');
book.call(lufthansa, 239, 'ronaldo');
console.log(lufthansa);





//  Bind method 


const bookEw = lufthansa.book;
bookEw.call(eurowings, 23 , 'sanskar khandelwal');


const bookingEw = book.bind(eurowings, 23)
bookingEw('sanskar khadnelwal');

//  spacificing the part of arguments before hand is a common pattern called partial application 



// other situation when bind method is very useful
// 1. when we use objects together with event listeners 

lufthansa.planes = 300;


lufthansa.buyplanes = function(){
    console.log(this);
    this.planes++;
    console.log(this.planes);
}


document.querySelector('.btn1').addEventListener('click', lufthansa.buyplanes);

// In event handler function this keyword will always point to the element it is attached to 


// differece between call and bind is call method calls a function and bind method creates a new function 


 lufthansa.buyplanes.bind(lufthansa)




 // Application of partial application


 // partial application simply means setting the argument before calling the function 


 const addTax = (rate, value)  => value = value *rate;

 console.log(addTax(0.1,200));

 // if we want to fix the tax rate as  23%

 const fixRate = addTax.bind(null,.23);
 // null can be any other value but it's kind of standard to set it as null,

 console.log(fixRate);



 const addingTax = function(rate){
     return function(value){
             return value+ value *rate;  
     }
 }

 const addVat = addingTax(0.32);



 // coding challenge 1


 const poll = {
     question: 'What is your favourite programming language?',
     options: ['0:JavaScript', '1:Python', '2:Rust', '3:C++'],
// This generates [0,0,0,0].
     answers: new Array(4).fill(0),
 }





 const arr = ['1: khandelwal', '2:sam'];
   for(const [key,value] of arr.entries()){
       console.log(key,value);
   }



   poll.displayResults = function(type){
    type =='string' ? console.log(poll.answers) : console.log(poll.answers.join(' '));
 }




 poll.registerNewAnswer = function(){
 const answer = Number(prompt(`${this.question} \n ${this.options.join('\n')}`));
  console.log(answer);
  for(const [i,value] of this.answers.entries()){
 if(answer == i)
    poll.answers[answer]++;
 }
this.displayResults('array');
this.displayResults('string');
}
 


document.querySelector('.btn2').addEventListener('click',poll.registerNewAnswer.bind(poll));




// Closure example 


// example 1

let f;

const g = function(){
    const a = 23;
    f = function(){
        console.log(a);
    };
};

g();
f();



const h = function(){
    const b = 33;
    f = function(){
        console.log(b);
    };
};
 
g();
h();



// Example 2 
 

// const boardPassengers = function(n,wait){
//     const perGroup = n/3;
//   setTimeout(function(){
//       console.log(`we are now boarding all ${n} passengers`);
//       console.log(`There are 3 groups, each with ${perGroup} passengers`);
//   },2000)

//     console.log(`will start boarding in ${wait}`);
// }


// boardPassengers(180,3);


// closures have priority over scope chain





// Coding challenge of closures 

(function(){
    const header = document.querySelector('h1');
    console.log(header);
    header.style.color = 'pink';
    document.addEventListener('click', function(){
    header.style.color = 'blue'
});
})();
