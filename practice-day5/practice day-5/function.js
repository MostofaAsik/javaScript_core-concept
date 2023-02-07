function sum(num1, num2) {
    var sum = num1 + num2;
    return sum;
}
function sub(num1, num2) {
    var sub = num1 - num2;
    return sub;
}
var input1 = 20;
var input2 = 10;
var total1 = sum(input1, input2);
var total2 = sub(input1, input2);
console.log("Total1 =", total1);
console.log("Total2 =", total2);
var total = total1 + total2;
console.log(total);
