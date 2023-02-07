// function factorial(number) {
//     var mul = 1;
//     for (var i = 1; i <= number; i++) {
//         mul = mul * i;
//     }
//     return mul;
// }
// var result = factorial(5);
// console.log(result);

// function factorial(number) {
//     var result = 1;
//     for (var i = number; i >= 1; i--) {
//         result = result * i;

//     }
//     return result;
// }
// var fact = factorial(3);
// console.log(fact);


function factorial(num) {
    let mul = 1;
    for (var i = num; i >= 1; i--) {
        mul = mul * i;

    }
    return mul;
}
var sum = factorial(5);
console.log(sum);