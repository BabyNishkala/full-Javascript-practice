const people=[
    {name:"Baby",age:22,position:"Student",id:1},
    {name:"Baby",age:22,position:"Student",id:1},
    {name:"Baby",age:22,position:"Student",id:1},
    {name:"Baby",age:22,position:"Student",id:1},
];
const finding =people.find(function(person){
    return person.id == 1;
});
console.log(finding);  

const newNames=["Baby","priya","Kantha","john"];
const findings = newNames.find(function(name){
    return name=="priya";
});
console.log(findings); 

const finding1 =people.filter(function(person){
    return person.id == 1;
});
console.log(finding1);  
console.log(finding1[0].name);

