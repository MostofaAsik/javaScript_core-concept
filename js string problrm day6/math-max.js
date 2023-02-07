// const jim = 84;
// const dela = 67;
// const chinku = 97;
// if (jim > dela) {
//     console.log("Jim will get the Cake")
// }
// else {
//     console.log("dela will get the cake")
// }

function getMax(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return num1;
    }
    else if (num2 > num1 && num2 > num3) {
        return num2;
    }
    else {
        return num3;
    }
}
let num1 = 99;
let num2 = 98;
let num3 = 88;
var max = getMax(num1, num2, num3);
console.log(max);
// let max = Math.max(num1, num2, num3);
// console.log(max);
