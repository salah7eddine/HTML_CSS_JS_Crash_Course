// console.log

// alert('Hello world!!');
// console.log('Hello world!!');
// console.error('This is an error');
// console.warn('This is a warning');

// var, let, const 

// const  age = 30;
// age = 31;
// console.log(age);

// type of data : String, Numbers, Boolean, null, undefined, Symbol

/* const name = 'John';
const age = 30;
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z;
console.log(typeof name);
console.log(typeof age);
console.log(typeof rating);
console.log(typeof isCool);
console.log(typeof x);
console.log(typeof y);
console.log(typeof z); */

// Concatenation

/* const name = 'John';
const age = 30;
console.log('My name is '+ name + ' and I am ' + age);
// Template String
const hello = `My name is ${name} and I am ${age}`;
console.log(hello); */

// Methods for Strings 

/* const s = 'Hello World!';
const t = 'technology, computers, it, code';
console.log(s.length);
console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.substring(0, 5).toUpperCase());
console.log(s.split(''));
console.log(t.split(', '));
 */

// Methods for array
// Arrays - vaariables that hold multiple values

/*  const numbers = new Array(1,2,3,4,5);
 console.log(numbers); */

/*  const fruits = ['apples', 'oranges', 'pears', 10, true];
 console.log(fruits);
 fruits[5]= 'grapes';
 console.log(fruits);
 fruits.push('mangos');
 console.log(fruits);
 fruits.unshift('strawberries');
 console.log(fruits);
 fruits.pop();
 console.log(fruits);
 console.log(fruits[1]);
 console.log(Array.isArray(fruits));
 console.log(Array.isArray('Hello'));
 console.log(fruits.indexOf('oranges')); */
/* 
 const person = {
   firstName: 'John',
   lastName: 'Doe',
   age: 30,
   hobbies: ['music', 'movies', 'sports'],
   address: {
     street: '50 main st',
     city: 'Boston',
     state: 'Ma'
   }
 }
 console.log(person);
 console.log(person.firstName, person.lastName);
 console.log(person.hobbies[1]);
 console.log(person.address.city);
 
 const { firstName, lastName, address: { city }} = person;
 console.log(firstName);
 console.log(city);
 
 person.email = 'john@gmail.com';
 console.log(person); */

/* const todos = [
  {
    id: 1,
    text: 'Take out trach',
    isCompleted: true
  },
  {
   id: 2,
   text: 'Meeting with boss',
   isCompleted: true
 },
 {
   id: 3,
   text: 'Dentist appt',
   isCompleted: false
 }
]; */

/*  console.log(todos);
 console.log(todos[1].text);
const todoJSON = JSON.stringify(todos);
console.log(todoJSON); */

// For
/* for (let i= 0; i <= 10; i++) {
  console.log(`For Loop Number: ${i}`);
} */
// While
/* let i = 0;
while (i < 10) {
  console.log(`For Loop Number: ${i}`);
  i++;
} */


/* for (let i= 0; i <= todos.length - 1; i++) {
  console.log(todos[i].text);
}  */

/* for (let todo of todos) {
  console.log(todo.text);
} */

// forEach, map, filter
/* todos.forEach(function(todo) {
  console.log(todo.text);
});
const todoText = todos.map(function(todo) {
  return todo.text;
});
console.log(todoText);
/* const todoCompleted = todos.filter(function(todo) {
  return todo.isCompleted === true;
}); */

/* const todoCompleted = todos.filter(function(todo) {
  return todo.isCompleted === true;
}).map(function(todo) {
  return todo.text;
});
console.log(todoCompleted); */

// Conditionals
// const x = 6;
// const y = 11;

// if(x === 10) {
//   console.log('x is 10');
// } else if( x > 10) {
//   console.log('x is greater than 10');
// } else {
//   console.log('x is less than 10');
// }

/* if( x > 5 || y > 10) {
  console.log('x is more than 5 or y is more than 10');
} */

/* const x = 10;
const color = x > 10 ? 'red' : 'blue';
switch(color) {
  case 'red':
    console.log('color is red');
    break;
  case 'blue':
    console.log('color is blue');
    break;
  default: 
  console.log('color is NOT red or blue');
} */

// function

/* function addNums(num1 = 1, num2 = 1) {
  return num1 + num2;
}
console.log(addNums(5, 5));
addNums(); */

// const addNums = (num1, num2) => {
//   return num1 + num2;
// }

// const addNums = (num1, num2) => num1 + num2;
// console.log(addNums(4, 5));

// Constructor function
/* function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = new Date(dob);
  this.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
  }
}
Person.prototype.getBirthYear = function() {
  return this.dob.getFullYear();
}; */

// Class ES6
/* class Person {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
  }
  getBirthYear() {
    return this.dob.getFullYear();
  };
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  };
} */


// Instantiate object
/* const pers1 = new Person('mizo', 'Mizo', '8-4-1994');
const pers2 = new Person('mido', 'Mido', '3-24-1992');
console.log(pers2.dob.getDate());
console.log(pers1.getBirthYear());
console.log(pers2.getFullName()); */

// DOM 

// console.log(window);
// window.alert(1);

// Single element 
// const form = document.getElementById('my-form');
// console.log(document.querySelector('h1'));

// Multiple element
// console.log(document.querySelectorAll('.item'));
// console.log(document.getElementsByClassName('item'));
// console.log(document.getElementsByTagName('li'));

// const items = document.querySelectorAll('.item');
// items.forEach((item) => console.log(item));

// const ul = document.querySelector('.items');
// ul.remove();
// ul.lastElementChild.remove();
/* ul.firstElementChild.textContent = 'Hello';
ul.children[1].innerText = 'Brad';
ul.lastElementChild.innerHTML = '<h1>Hello</h1>';
const btn = document.querySelector('.btn');
btn.style.background = 'red'; */

/* const btn = document.querySelector('.btn');
// click, mouseover, mouseout
btn.addEventListener('mouseover', (e) => {
  e.preventDefault();
  // console.log(e.target.id);
  document.querySelector('#my-form').style.background = '#ccc';
  document.querySelector('body').classList.add('bg-dark');
  document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>'
}); */


const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  if (nameInput.value === '' || emailInput.value === '') {
    // alert('Please enter fields');
    msg.classList.add('error');
    msg.innerHTML = 'Please enter fields';
    setTimeout(() => msg.remove(), 3000);
  } else {
    console.log('success');
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

    userList.appendChild(li);

    // Clear fields
    nameInput.value = '';
    emailInput.value = '';
  }
}
