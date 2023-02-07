function mindGame(positiveNumber) {
    //validation
    if (typeof positiveNumber !== 'number') {
        return "Enter Number.Plz!!"
    }
    const multiplicationResult = positiveNumber * 3;
    const sumResult = multiplicationResult + 10;
    const divisionResult = sumResult / 2;
    const subResult = divisionResult - 5;
    return subResult;
}
let result = mindGame(33);
console.log(result);