// map using array for many kind of operation 
const numbers = [2,5,6,7,4,8];

// using map and using array function 

const result1 = numbers.map(x=> x+x);
console.log(result1);

// using filter 
const result2 = numbers.filter(x => x > 5); 

// using find 
const result3 = numbers.find(x => x > 6 );

// filter and find r same but little bit different show this example......
console.log(result2, result3);