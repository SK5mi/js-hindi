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


/*

const table =[12,24,36,48,60,72,84,96,108,120];
console.log(LearnTable(table));
function LearnTable(anything){
    const result = (`table of 12 * 5 = ${anything[[5]-1]}`)
    return result;
}

*/




    //   *******************************************
// we can acess these function form anywhere even before declaration(as we did in table function) but if we create a function by variable name so we can access that only 
// after declaration of that 

/*

//   function with variable 

const greet = function(){
    console.log("namaste");
}

greet() ;
*/

// const table =[12,24,36,48,60,72,84,96,108,120];
// console.log(LearnTable(table));
// function LearnTable(anything){
//     // const result = (`table of 12 * 5 = ${anything[[5]-1]}`)

//     console.log(this)
//     // return result;
// }
// LearnTable(table);

// arrow function

// function subject (sub1,sub2){

// }

const table = [12, 24, 36, 48, 60, 72, 84, 96, 108, 120];

function LearnTable() {
    const result = `Table of 12 * 5 = ${this[5 - 1]}`;
    return result;
}
const multiplication = LearnTable(table)

// const boundLearnTable = LearnTable.bind(table);
// console.log(boundLearnTable());

console.log(multiplication());