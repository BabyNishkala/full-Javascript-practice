const peoples=[
    {name:"Baby",age:22,position:"Student",id:1,salary:50000},
    {name:"Poori",age:22,position:"Student",id:1,salary:50001},
    {name:"Nishkala",age:22,position:"Student",id:1,salary:50002},
    {name:"Gadda",age:22,position:"Student",id:1,salary:50003},
];
const newArray = peoples.reduce(function(total,current){
    console.log(`Total Salary :${total}`);
    console.log(`present current:${current.salary}`);
    total += current.salary;
    return total;
},0);
