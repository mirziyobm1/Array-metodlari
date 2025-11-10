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
