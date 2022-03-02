// In javascript all numbers are internally stored as floating point numbers 
console.log(23 == 23.0); // true

// this is the reason all numbers have one data type also numbers are represented internally as 64 base 2 format so basically of 0 and 1 


// Base10   0 to 9 
//Binary base2 - 0 to 1



// conversion
console.log(Number('23'));
console.log((+'23'));


// Parsing

console.log(Number.parseInt('30px',10)); // 30 
console.log(Number.parseInt('e23')); // NaN

//String need to start with a number 

// parseInt take another argument which is called redix redix is base of the system which we are using 


console.log(Number.parseFloat('2.5rem')); // 2.5

console.log(Number.parseInt('2.5rem')); // 2


//This are the global function like this
console.log(parseInt('2.5rem'));

// but it is the more traditional way of doing this 

console.log(Number.isNaN(20)); //false 
console.log(Number.isNaN('20')); //false 
console.log(Number.isNaN(+'20X')); //True
console.log(Number.isNaN(23/0)); //False



//Better way to check if value is a number 
console.log(Number.isFinite(20)); //true
console.log(Number.isFinite('20')); //false it's string
console.log(Number.isFinite(+'20X')); //false
console.log(Number.isFinite(23/0)); // false

console.log(Number.isInteger(23)); // True
console.log(Number.isInteger(23.0)); //true



///////////////////////////////////////////////////
// Math and Rounding 

console.log(Math.sqrt(25));

console.log(25 ** (1/2));  //square root : 5
console.log(8 ** (1/3));  // cubic root  : 2

console.log(Math.max(23,343,656,75,75,65,7,56)); // 656 
//here max does type  coercion
console.log(Math.max(23,343,'656',75,75,65,7,56)); // 656 

// doesnot do parsing 
console.log(Math.max(23,343,'656px',75,75,65,7,56)); // NaN 
 

console.log(Math.PI * Number.parseFloat('10px') ** 2);

const randomInt = (min,max) => Math.floor(Math.random() * (max -min) + 1) + min; 
//0...1 -> 0...(max-min) -> min...(max-min+min);
console.log(randomInt(10,20));


//Rounding
//trunc removes decimal part
console.log(Math.trunc(23.3));  //23
console.log(Math.trunc(23.9));  //24


//rounds to the nearest number 
console.log(Math.round(23.3)); //23
console.log(Math.round(23.9));  //24


// rounds to the ciel 
console.log(Math.ciel(23.3));  //24
console.log(Math.ciel(23.9));  //24

// rounding to floor of a number 
console.log(Math.floor(23.3));  //23
console.log(Math.floor(23.9));  //23 

//all this method also do type coercion
console.log(Math.floor('23.4')); //23

console.log(Math.floor(-23.4));  //-24
console.log(Math.trunc(-23.4));  //-23



//Rounding decimals 
console.log((2.7).toFixed(0));  //3
//to fixed return a string and not a number 

console.log((2.7).toFixed(3));  //2.700
console.log(+(2.345).toFixed(2));  //2.35(Now it is a number);




//Remainder operator 

console.log( 5 % 2);   // 1 


// Big Int 

// Numbers are internally as 64 bits that means  that there are exactly 64 ones or zeroes to represent any given number Now of these 64 bits only 53 are used to store the rest are for design and demical

console.log(2 ** 53 -1); // Biggest number that javascript savly represent
console.log(Number.MAX_SAFE_INTEGER); //above both are same

// If we do calculation with these numbers that means we will loose precision 


 console.log(465478645498646479864596496456749867465498647n);
 // the n at last convert these bignumber into big int 


 // We can also create big int by creating big Int 

 console.log(BigInt(17867987));    

 //Operation 
 console.log(1000n + 1000n); //2000n
 console.log(46546546149641446n * 554156464n); // => correct answer

 
 const huge = 2346549798464984n;
 const num  = 23;
 console.log(huge * BigInt(num));


//  use comparison and === operator  // Exception

console.log(20n > 15); // true
console.log(20n === 15);  // false,  === checks datatype]
console.log(20n == 15);  // true,  == doesnot  checks datatype]

console.log(huge + ' is really a big number');

// Division
console.log(10n / 3n); //3n simply return the closest big int or cuts the decimal part
console.log(10 / 3); 3.3333333



// Dates and Times 

// Create a Date 
//1
const now = new Date();
console.log(now);

//2
console.log(new Date('December 24, 2015')); 


console.log(new Date(2037, 10, 19, 15, 23, 5)); // thu Nov 19 2037 15:23:00 GMT+0000 (Western European Standard Time)

console.log(new Date(0)); // time passed after intitial unix time 
console.log(new Date(3* 24 * 60 *60 *1000));  // in milisecond ;

// Working with dates 
const future = new Date(2037, 10,19, 15, 23)
console.log(future.getFullYear());
console.log(future.getMonth());  // 0 Based  
console.log(future.getDate());
console.log(future.getDay()); //day of weak 4 =thursday 

// getHOurs , getMIn and getSecond are also there


console.log(future.toISOString()); // Internatinal Standard 
console.log(future.getTime()); // time(ms) that is passed after jan first  1970

console.log(Date.now());

future.setFullYear(2040);