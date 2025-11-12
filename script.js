// concat()
const array1 = [1, 4];
const array2 = [2, 3, 7];
const result = array1.concat(array2);
console.log(result); // [1, 4, 2, 3, 7]

// find()
const findValue = (number) => number === 2;
const foundValue = result.find(findValue);
console.log(foundValue); // 2

// filter()
const filterValues = (number) => number > 5;
const filteredValues = result.filter(filterValues);
console.log(filteredValues); // [7]

// map()
const mapValues = (number) => 'Son: ' + number;
const mappedValues = result.map(mapValues);
console.log(mappedValues); // ['Son: 1', 'Son: 4', 'Son: 2', 'Son: 3', 'Son: 7']

// sort()
const sortValues = (number1, number2) => number1 - number2;
result.sort(sortValues);
console.log(result); // [1, 2, 3, 4, 7]

let fruits = ["olma", "banan", "nok"];

// oxiriga element qo‘shish
fruits.push("gilos");
console.log(fruits); // ["olma", "banan", "nok", "gilos"]

// oxirgi elementni o‘chirish
fruits.pop();
console.log(fruits); // ["olma", "banan", "nok"]

// boshiga element qo‘shish
fruits.unshift("anor");
console.log(fruits); // ["anor", "olma", "banan", "nok"]

// boshidagi elementni o‘chirish
fruits.shift();
console.log(fruits); // ["olma", "banan", "nok"]

// o‘rtadan elementni o‘chirish yoki qo‘shish
let fruits = ["olma", "banan", "nok","apple"
];
splice(startIndex,delete, )
fruits.splice(1, 2, "shaftoli","Qulupnay");
console.log(fruits); // ["olma", "shaftoli", "nok"]
let numbers=[1,2,3,4,5,6,7];
numbers.splice(2);
numbers.splice(2,2);
numbers.splice(2,2,10);
numbers.splice(2,0,10,11);
console.log(numbers);
oraliqni olish (asl massiv o‘zgarmaydi)
let fruits = ["olma", "banan", "nok","apple"]
let newFruits = fruits.slice(0, 2);
console.log(newFruits); // ["olma", "shaftoli"]
let numbers=[1,2,3,4,5,6,7];
console.log(numbers.indexOf(5))
let numbers=[1,2,5,3,8,4,5,7,6,7];
console.log(numbers.lastIndexOf(5));
console.log(numbers.includes(7));
console.log(numbers.find(function(number){
    return number>5;
}))
console.log(numbers.find(number=>number>5));
console.log(numbers.findIndex(Number=>Number>3));
console.log(numbers.some(Number=>Number===5));
console.log(numbers.every(Number=>Number>1));
let sonlar=[1,2,3,4,5,6,7];
const kvadrat=sonlar.map(son=>`${son} ning kvadrati: ${son*son} `)
console.log(kvadrat)
let numbers=[1,2,3,4,5,6,7,8,9,10];
console.log(numbers.filter(son=>son>5));
console.log(numbers.filter(son=>son%2==0));
let sum = numbers.reduce((acc, n) => acc + n, 0);
                    acc=(0+1)
                    acc=(1+2)
                    acc=(3+3)
                    acc=(6+4)
let products=[1,2,3,4,5];
let product=products.reduce((a,n)=>a*n,1)
                    a=(1*1);
                    a=1*2
                    a=2*3
                    a=6*4
                    
console.log(sum); // 15
console.log(product)
let nested = [1, [2, [3, 4,[5,6]]]];
console.log(nested.flat(3)); // [1, 2, 3, 4]

console.log([5,9,8,7,2,6,1].sort((Number1,Number2)=>Number1-Number2))
console.log([1,2,3,4,5].reverse())
console.log([1,2,3,4].join(" Mirziyo "));
