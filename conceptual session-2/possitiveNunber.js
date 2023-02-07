let numbers = [1, 2, 4, 6, -2, -4, 7, 8, 9];
function isPositive(number) {
    let positiveNumber = [];
    for (let i = 0; i < number.length; i++) {
        const element = number[i];
        // console.log(element);
        if (element > 0) {
            positiveNumber.push(element);
        }
        else {
            break;
        }
    }
    console.log(positiveNumber)
}
isPositive(numbers);