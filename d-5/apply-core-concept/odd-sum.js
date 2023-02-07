function getOddNumbers(numbers) {
    const oddNumbers = [];
    for (var i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        if (element % 2 !== 0) {
            console.log(index, element);
            oddNumbers.push(element);
        }

    }
    return oddNumbers;

}
const myNumber = [12, 65, 45, 78, 32, 45, 58];
const oddNumbers = getOddNumbers(myNumber);
console.log(oddNumbers);
