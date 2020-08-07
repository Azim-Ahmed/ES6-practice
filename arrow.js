// function doubleIt(num){
// return num * 2;
// }


// const doubleIt = function(num){
//     return num * 2;
//     }



//single line parameter ES6 function
const doubleIt = num => num * 2;

//double  parameter function 
const add = (x , y) => x + y;
const result2 = add(3, 4);
console.log(result2);



const result = doubleIt(5);
console.log(result);



//for multiple line and multiple parameter 



const doTheSum = (x , y) => {
    const add = x + y;
    const minus = x - y;
    const result = add * minus;
    return result;
}
const result3 = doTheSum(7 , 5);
console.log(result3);