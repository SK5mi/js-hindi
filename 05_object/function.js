// function without return variable
/*function AddTwoNumber(a,b){
console.log(a + b);
}
const ans = AddTwoNumber(8,8);
console.log(ans);

*/


// functio with  return 

/*
function AddTwoNumber(a,b){
   const Ans = a + b;
   return Ans
    }
    const ans = AddTwoNumber(8,8);
    console.log(ans);

  or


function AddTwoNumber(a,b){
    return ( a + b);
}
 console.log(AddTwoNumber(8,8));
 */ 

//  function which takes Object and array as input
/*const cricket ={
    Name : "India",
    Class :"Rohit",
    World : "Win"
}

const student ={
    Name : "satyam",
    Class :12,
    stetus :true
};

function Intro(details){
console.log(`Hii my name is  ${details.Name} and i have just passed my ${details.World}`)
}

Intro(student);   // this will return undefined in the place of world  bcz in student class we did not have variable name World

*/ 



const table =[12,24,36,48,60,72,84,96,108,120];

function LearnTable(anything){
    const result = (`table of 12 * 5 = ${anything[[5]-1]}`)
    return result;
}
console.log(LearnTable(table));
