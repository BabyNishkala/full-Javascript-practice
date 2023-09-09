 const month=[
    "January",
    "Feburary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
 ];
 const days=[
    "sunday",
    "monday",
    "Tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
 ];

 const date= new Date();
 console.log(date);  
 console.log(date.getMonth());
 const months= date.getMonth()
 console.log(month[months]);
 const weekDay = date.getDay();
 console.log(weekDay);
 console.log(days[weekDay]);
 console.log(date.getFullYear());
 console.log(date.getDate());
 const sentence=`${days[weekDay]},${date.getDate()},${month[months]},${date.getFullYear()}`;
 console.log(sentence);