function isEven(number) {
    const remainder = number % 2;
    if (remainder === 0) {
        return true;
    }
    else {
        return false;

    }
}
const myNumber = 2023;
const isNumberEven = isEven(myNumber);
console.log(isNumberEven);