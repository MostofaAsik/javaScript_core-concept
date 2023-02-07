function isLGSeven(numbers) {
    //validation
    if (typeof numbers !== 'number') {
        return "Enter Number.Plz!!"
    }

    if (numbers < 7) {
        const sub = numbers - 7;
        return sub;
    }
    else {
        const result = 2 * numbers;
        return result;
    }
}
const final = isLGSeven(15);
console.log(final);