// const mysym = Symbol("bihhi");
// const student ={
//     name :"Satyam",
//     last_name :"mishra",
//     std : 12,
//     [mysym] :"or bhai",
//     sub1 :"Physics",
//     sub2 :"Chemistry",
//     sub3 :"Maths",
//     score :[120,78,96]
// };

// console.log(student.sub1);
// console.log(student[mysym]);
// console.log(typeof student[mysym]);

//if we do not want that anyone can make change on our code so we can put that in freez 

// Object.freeze(student);

const first ={ a : 1, b : 2, c: 3};
const second ={d :4 ,e : 5,f : 6};
// const third = Object.assign({},first,second)    // they store the data in first variable and it should be our target variable where we want to store the marzed of that arrays
//  if we write only variable without writing any empty boxes so it store data in first variable
const third ={...first, ...second};
console.log(third)
console.log(first)
console.log(Object.keys(first));
console.log(Object.values(first));
console.log(Object.entries(first));