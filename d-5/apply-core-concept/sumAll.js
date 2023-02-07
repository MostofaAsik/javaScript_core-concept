function getSumOfArray(numbers) {
    let sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        // console.log(i, numbers[i]); ////>>>process-1
        const index = i;
        const element = numbers[index];
        sum = sum + element;
        console.log(index, element, sum);
    }
    return sum;
}
const myNumber = [12, 65, 45, 78, 32, 45, 58];
getSumOfArray(myNumber);