let person = [
    { name: "sakib", age: 30 },
    { name: "sakil", age: 20 },
    { name: "sajib", age: 50 },
    { name: "saki", age: 10 }
];

function smallerAge(numbers) {
    let smallAge = person[0];
    for (let i = 0; i < numbers.length; i++) {
        let personAge = numbers[i];
        // console.log(personAge);
        if (personAge.age < smallAge.age) {
            smallAge = personAge;
        }
    }
    return smallAge;
}
let mostSmall = smallerAge(person);
console.log(mostSmall);