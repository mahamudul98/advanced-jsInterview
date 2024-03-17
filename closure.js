// when return function inside form a function then create a closure environment...it is closure 

function stopWatch(){
    let count = 0;
    return function(){
        count++;
        return count;
    }
}
const clock1 = stopWatch()
console.log(clock1());
console.log(clock1());
console.log(clock1());

const clock2 = stopWatch()
console.log(clock2());
console.log(clock2());
console.log(clock1());