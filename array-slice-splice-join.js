const numbers =[2,4,6,7,8,9,0];

const Slice = numbers.slice(2, 5);
console.log(Slice); 
console.log(numbers);

const num1 = numbers.splice(0, 4);
console.log(num1);
console.log(numbers);

const num2 = numbers.join(',');
console.log(num2);



