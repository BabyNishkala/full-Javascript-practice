//getelementById()
console.log(document.getElementById("div"));
// getelementByTagName()
const tagitems=document.getElementsByTagName("h1");
console.log(tagitems);
 const newTagItems=[...tagitems];
 console.log(newTagItems);
 //getelementbyclassname()
 const classitems = document.getElementsByClassName("para1");
 console.log(classitems);
 console.log(classitems[0]);