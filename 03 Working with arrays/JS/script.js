'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];


const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');






const displayMovements = function (movements,sort = false) { 
  containerMovements.innerHTML = '';
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal'


    const html = `
  <div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
    <div class="movements__value">${mov}€</div>
</div>`;

    containerMovements.insertAdjacentHTML('afterbegin', html)
  });
}




const calcDisplayBalance = function (acc) {
  acc.balance = movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}€`
};





const user = 'Steven Thomas Williams'; // stw
const createUsername = function (accs) {

  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(names => names.slice(0, 1))
      .join('');
  })
};
createUsername(accounts);




const updateUI = function (acc) {
  // Display movement 
  displayMovements(acc.movements);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
}






const calcDisplaySummary = function (acc) {
  const incomes = movements.filter(mov => mov > 0).reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€ ` // alt + 0128 for euro sign
  // console.log(incomes);


  const withdrawal = movements.filter(mov => mov < 0).reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(withdrawal)}€`;


  // Interest will only be given when it is greater than 1
  const interest = movements.filter(mov => mov > 0).map(deposit => deposit * 1.2 / 100).filter(intr => intr > 1).reduce((acc, intr) => acc + intr, 0);
  labelSumInterest.textContent = `${interest}€`
};


// Display movement 
// displayMovements(currentAccount.movements)

// Display balance
// calcDisplayBalance(currentAccount.movements);

// Display summary 


//Event Handler

let currentAccount;
btnLogin.addEventListener('click', function (e) {
  e.preventDefault();

  // console.log('Login');
  currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);

  if (currentAccount.pin === Number(inputLoginPin.value)) {
    // Display UI and welcome msg
    //  console.log('sanskar khandelwal');
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`;

    containerApp.style.opacity = 1;

    // CLear input fields
    inputLoginPin.value = inputLoginUsername.value = '';
    inputLoginPin.blur();


    // Update UI
    updateUI(currentAccount)
  };

})



// Transfering money from one account to other

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);

  const receiverAcc = accounts.find(acc => acc.username === inputTransferTo.value);
  //  console.log(receiverAcc);


  inputTransferAmount.value = inputTransferTo.value = '';

  if (receiverAcc
    && amount > 0
    && currentAccount.balance >= amount
    && receiverAcc?.username !== currentAccount.username) {
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    //  console.log('Transfer Valid'); 
    updateUI(currentAccount)
  }



});


// Loan 
// Bank grants Loan if it has atleast one deposit that is equal to more than 10% of loan amount


btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const loanAmount = Number(inputLoanAmount.value);

  if(amount > 0 && currentAccount.movements.some(mov => mov >= 0.1 * loanAmount)){
    //Add movement
    currentAccount.movements.push(loanAmount);

    // Update UI
    updateUI(currentAccount);

    inputLoanAmount.value = ''; 
  
  }
});


// Deleting account 

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (inputCloseUsername.value == currentAccount.username && Number(inputClosePin.value) == currentAccount.pin) {


    const deleteIndex = accounts.findIndex(acc => inputCloseUsername.value == currentAccount.username && Number(inputClosePin.value) == currentAccount.pin);

    accounts.splice(deleteIndex, 1);

    // console.log(accounts);

    // Hide UI
    containerApp.style.opacity = 0;

  }



  inputCloseUsername.value = currentAccount.username = '';

});


/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
/*

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);


//////////////////////////////////////////////////


let arr = ['a', 'b', 'c', 'd', 'e'];

// slice method
arr.slice()



const [numver1, number2] = ['first', 'second'];
console.log(numver1, number2);


// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);


currencies.forEach(function (value, key, map) {
  console.log(value, key);
});



// Coding challenge 1
/*
const juliaDog = [3,5,2,12,7];
const kateDog = [4,1,15,8,3];



const checkDogs = function(dogsJulia, dogsKate){
      const copyJulia = [...dogsJulia];
      copyJulia.splice(0,1);
      copyJulia.splice(-2);
      console.log(copyJulia);
    const newArray = dogsKate.concat(copyJulia);
    console.log(newArray);
    newArray.forEach(function(dogAge,i){
         let type = dogAge >= 3 ? 'Adult' : 'Puppy 🐶';
         console.log(`Dog number ${i+1} is an ${type}, and is ${dogAge} year old`);
    });
};

checkDogs( juliaDog,kateDog);


*/

/*

const eurToUsd = 1.1;
const movementsUSD = movements.map(function (mov) {
  return mov * eurToUsd;
});
console.log(movements);
console.log(movementsUSD);

const movementsUSDfor = [];
for (const mov of movements) {
  movementsUSDfor.push(mov * 1.1);
};
console.log(movementsUSDfor);




// filter method

const deposit = movements.filter(function (mov) {
  return mov > 0;

});
console.log(movements);
console.log(deposit);



const withdrawal = movements.filter(function (mov) {
  return mov < 0
});
console.log(withdrawal);




// Reduce method.
// accumulator is like a snow ball

/*
const balance = movements.reduce(function (acc, cur, i, arr) {
  return acc + cur;
}, 0);
console.log(balance)



let balance2 = 0;
for (const mov of movements) balance2 = balance2 + mov;

console.log(balance2);


// Maximum value of an array

const max = movements.reduce(function (acc, mov) {
  if (acc > mov) {
    return acc;
  }
  else {
    return mov;
  }
}, movements[0]);

console.log(max);


// Dog's age coding challenge #2
/*
const calcAverageHumanAge = function (ages) {
  const humanAge = ages.map(function (age, key) {
    if (age <= 2) {
      return 2 * age
    }
    else {
      return 16 + age * 4;
    }
  })
  const greaterThan18 = humanAge.filter(Hage => Hage >= 18
  );
  console.log(humanAge);
  console.log(greaterThan18);

  const averageHumanage = greaterThan18.reduce((acc, value) => {
    return (acc + value) / greaterThan18.length;
  }, 0)
  console.log(averageHumanage);
};
calcAverageHumanAge([2, 5, 6, 7, 8, 4,]);

*/


// PIPELINE
/*
const eurotodlr = 1.1;

const totalDeposit = movements
  .filter(mov => mov > 0)
  .map((mov,i,arr) => {
    // This is how to debug if You find any problem;
    // console.log(arr);
    mov * eurotodlr
  })
  // .map(mov => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov, 0);
console.log(totalDeposit);

*/

/*

const calcAverageHumanAge =  (ages) => { ages
  .map(age =>(age <= 2 ? 2 * age : 16 + age * 4))
  .filter(age =>age >= 18 )
  .reduce((acc, age,i, arri) =>
  {
     acc + age / arri.length);
      console.log(arr)
    };
};
console.log(calcAverageHumanAge([5,2,4,1,15,8,3]));

*/




// find method
//find method doesnot return a array but it will only return the first element that satisfy

/*
movements.find((mov,i,arr) => mov<0); 


const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);


for(const acc of accounts){
  if(acc.owner === 'Jessica Davis')
  {
    console.log(acc);
  }
}
*/



// Some and Every methods 
// FOR EQUALITY
movements.includes(-130); // True 


// FOR CONDITION
movements.includes(mov => mov === -130)


// In include we can check certain value exist or not but in some method we can check wheather a condition is fulfilled or not 

// const anyDeposits = movements.some(mov => mov > 0); // True
// const anyDeposits = movements.some(mov => mov > 5000); // false
// const anyDeposits = movements.some(mov => mov > 1500); // True



// Sorting arrays.

const owners = ['jonas','jack','adam','martha'];
console.log(owners.sort());

// It mutate the original array 


// Number 

console.log(movements);
console.log(movements.sort());
// sort method is just sort the strings it first convert the number into strings and then sort it



console.log(movements  );
//return < 0 // A,B; (keep order)
//return > 0 // B,A; (switch order)

//Ascending
movements.sort((a,b) => {
  if(a<b) return -1;  
  if(a>b) return 1;
})
movements.sort((a,b) => a - b );


//descending
movements.sort((a,b) => {
  if(a<b) return 1;  
  if(a>b) return -1;
});
movements.sort((a,b) => b - a );

// a and b are just two consecutive numbers in the array where 


const movementsi = [-3,26546,3245,56,63,74,78,88];

movementsi.sort((a,b) => {
  if(a<b) return -1;  
  if(a>b) return +1;
})


console.log(movementsi);


console.log('b'+'a'+ + 'n' + 'a');


// More ways to fill array 

const z = Array.from({length: 7}, (_,i) => i+1);
console.log(z);
// _ is throw parameter we have to write it as an argument but it is not of any use 


const random = Array.from({length:10}, () => Math.floor(Math.random() * 7));
console.log(random); 


// Array.from() function is introduced inorder to create arrays from array like structure

 

// which array method to use  



// Coding challenge 4

const dogs = [
  {weight: 22, curFood: 250, owners: ['Alice','Bob']},
  {weight: 8, curFood: 200, owners: ['Matilda']},
  {weight: 13, curFood: 375, owners: ['Sarah', 'john']},
  {weight: 32, curFood: 340, owners: ['Micheal']},
];



dogs.forEach((mov) =>  {
 return mov.recommendedFood =Math.floor(mov.weight ** 0.75 *28);
});
console.log(dogs);

//2 

const x = dogs.find((mov) => mov.owners.find(mov => mov == 'Sarah'));

if(x.curFood > x.recommendedFood){
  console.log('Too much');
}
else{
  console.log('too Little ');
}

//3.  
const ownerEatTooMuch = dogs.filter(function(itr){
 return itr.curFood > itr.recommendedFood;
}).map(dog => dog.owners ).flat();
console.log(ownerEatTooMuch);
const ownerEatTooLess = dogs.filter(function(itr){
 return itr.curFood < itr.recommendedFood;
}).map(dog => dog.owners ).flat();
console.log(ownerEatTooLess);

//4. 
console.log(`${ownerEatTooMuch.join(' and ')}'s dog eat too much `);
console.log(`${ownerEatTooLess.join(' and ')}'s dog eat too much `);

//5. 
const ans = dogs.some(dog => dog.curFood == dog.recommendedFood);

console.log(ans);

//6. 
const answer = dogs.some(dog =>( dog.curFood > (dog.recommendedFood*0.90) && dog.curFood < (dog.recommendedFood *1.10) ));

console.log(answer);


const answer7 = dogs.filter(dog =>( dog.curFood > (dog.recommendedFood*0.90) && dog.curFood < (dog.recommendedFood *1.10) ));

console.log(answer7);