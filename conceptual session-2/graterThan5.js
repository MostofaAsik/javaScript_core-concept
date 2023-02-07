let numbers = [-1, 2, -3, 4, 5, 6, -7, 8, -9, 10];
function graterThan5(input) {
    let count = 0;

    for (let i = 0; i < input.length; i++) {
        const element = input[i];

        if (element > 5) {
            console.log("yes", element, "is greter than 5");

        }
    }
    // console.log(count);
}
let result = graterThan5(numbers);
console.log(result);
