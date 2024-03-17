function sum(num1, num2){
    console.log([...arguments]);
    return num1+num2 + arguments[2];
}

const result = sum(2,4,3);
console.log(result);