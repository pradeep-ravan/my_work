// Q1..................
// function f(x,y) {
//     let sum = 0;
//     for (let x in arguments) {
//         sum += arguments[x];
//     }
//     return sum;
// }
// console.log(f(1,2,3));

//....................
//Q2....................

function f(flag) {
    let sum = 0;
    if(flag=="m"){

        
    }
    for (let x in arguments){
        sum += arguments[x];
    }
    return sum;
}
console.log(f("a",2,4));