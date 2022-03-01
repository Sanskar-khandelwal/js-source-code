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

// parseInt take another argument whivh is called redix redix is base of the system which we are using 


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

const randomInt = (min,max) => Math.trunc(Math.random() * (max -min) + 1) + min; 
//0...1 -> 0...(max-min) -> min...(max-min+min);
console.log(randomInt(10,20));


//Rounding
//trunc removes decimal part
console.log(Math.trunc(23.3));  //23
console.log(Math.trunc(23.9));  //24


//rounds to the nearest number 
console.log(Math.round(23.3));
console.log(Math.round(23.9));


// rounds to the ciel 
console.log(Math.ciel(23.9));  //24
console.log(Math.ciel(23.9));  //24

// rounding to floor of a number 
console.log(Math.floor(23.9));  //24
console.log(Math.floor(23.9));  //24
