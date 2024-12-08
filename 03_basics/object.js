const mysym = Symbol("bihhi");
const student ={
    name :"Satyam",
    last_name :"mishra",
    std : 12,
    [mysym] :"or bhai",
    sub1 :"Physics",
    sub2 :"Chemistry",
    sub3 :"Maths",
    score :[120,78,96]
};

console.log(student.sub1);
console.log(student[mysym]);
console.log(typeof student[mysym]);