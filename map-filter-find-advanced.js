// array object-property 
const students = [
    {id:12, class:'ten', name:'mahmudul hasan'},
    {id:45, class:'eight', name:'kaziul islam'},
    {id:26, class:'nine', name:'tania khan'},
    {id:68, class:'ten', name:'imam mahadi'}
]

const names = students.map(x => x.name);
console.log(names);

const result = students.filter(y => y.id>40);
console.log(result);

const result2 = students.find(x => x.id>10);
console.log(result2);