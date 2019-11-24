
addClass(obj, 'new');   // obj.className='open menu new'
addClass(obj, 'open');  // без змін (клас вже існує)
addClass(obj, 'me');    // obj.className='open menu new me'

console.log( obj.className ); // "open menu new me"

camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';

removeClass(obj, 'open');   // obj.className='menu'
removeClass(obj, 'blabla'); // без змін (такого класу немає)

let arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 1, 4);
console.log( arr );

arr = [1, 6, 5, 2, 7, 5, 1, 4, 3, 9, 8, 11, 10, 18];
let num = 5;
findCouple(arr, num);

const arr1 = ['Капуста', 'Капітал'];
const arr2 = ['Ракета', 'Ракушка', 'Рак'];

console.log(startingSubstring(arr1)); // Кап;
console.log(startingSubstring(arr2)); // Рак;

arr = [1, 2, 3, 4, 5];
arr.sort(compare);
console.log(arr); // елементи у випадковому порядку, наприклад [3,5,1,2,4]

const jhon = { name: "Jhon", age: 23 };
const bill = { name: "Bill", age: 18 };
const donald = { name: "Donald", age: 6 };

const people = [ jhon, bill , donald ];
console.log(people[0].age); // 6

let strings1 = ["C++", "C#", "C++", "С#",
  "C", "C++", "JavaScript", "C++", "JavaScript"
];

console.log( unique(strings1) ); // C++, C#, C, JavaScript