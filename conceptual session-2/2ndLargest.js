// function secondLargestNumber(number) {
//     let largeNumber = numbers[0];
//     let secondLargestNumber = numbers[0];
//     for (let i = 0; i < number.length; i++) {
//         const element = number[i];
//         if (element > largeNumber) {
//             secondLargestNumber = largeNumber;
//             largeNumber = numbers[i];
//         } else if (element > secondLargestNumber) {
//             secondLargestNumber = element;
//         }
//     }
//     return secondLargestNumber;

// }
// const numbers = [11, 22, 33, 44, 55, 66, 77, 88, 99];
// const result = secondLargestNumber(numbers);
// console.log(result);

// function secondLargestNumber(number) {
//     let largeNumber = numbers[0];
//     for (let i = 0; i < number.length; i++) {
//         const element = number[i];
//         // console.log(element);
//         if (element > largeNumber) {
//             largeNumber = element;
//         }

//     }
//     console.log(largeNumber);
// }
// const numbers = [11, 22, 33, 44, 55, 66, 77, 88, 99];
// const result = secondLargestNumber(numbers);


function secondLargestName(friends) {
    let largeName = bestFriends[0];
    let secondLargeName = bestFriends[0];
    for (let i = 0; i < friends.length; i++) {
        const element = friends[i];
        // console.log(element);
        if (element.length > largeName.length) {
            secondLargeName = largeName;
            secondLargeName = element;
        }
    }
    console.log(secondLargeName);
}

let bestFriends = ['Sharif', 'Arif', 'Babul', 'Alauddin', 'Rahamotullahshahgurbaz', 'Kabir', 'Mahabub'];
secondLargestName(bestFriends);