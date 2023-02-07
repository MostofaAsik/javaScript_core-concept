function maxInArray(numbers) {
    let largestNumber = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        let element = numbers[i];
        console.log(element);


    }
    if (numbers == largestNumber) {
        return largestNumber;
    }
}
var heights = [160, 165, 197, 120, 133];
var tallest = maxInArray(heights);
console.log(tallest);

let sum = 0;
for (let i = 0; i <= 3; i++) {
    sum = sum + i;
}
console.log(sum);