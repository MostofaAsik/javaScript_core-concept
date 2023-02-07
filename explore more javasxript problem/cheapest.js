const phones = [

    { name: "Waltin", camera: 24, storage: "32gb", color: "silver", price: 22000 },
    { name: "Iphone", camera: 12, storage: "32gb", color: "silver", price: 82000 },
    { name: "Xiomi", camera: 12, storage: "32gb", color: "silver", price: 52000 },
    { name: "oppo", camera: 12, storage: "32gb", color: "silver", price: 20000 },
    { name: "nokia", camera: 12, storage: "32gb", color: "silver", price: 44000 },
    { name: "HTC", camera: 12, storage: "32gb", color: "silver", price: 15000 }

];
function cheapestPhone(allphones) {
    let cheap = phones[0];
    for (let i = 0; i < allphones.length; i++) {
        const phone = allphones[i];
        // console.log(phone);
        if (phone.price < cheap.price) {
            cheap = phone;
        }


    }
    return cheap;
}
let mostCheap = cheapestPhone(phones);
console.log(mostCheap);


// let numbers = [12, 45, 23, 34, 23, 13, 88, 199];
// let mostLargestNumber = numbers[0];
// function largestNumber(num) {
//     for (let i = 0; i < num.length; i++) {
//         let element = num[i];
//         // console.log(element);
//         if (element > mostLargestNumber) {
//             mostLargestNumber = element;
//         }
//     }
//     return mostLargestNumber;
// }
// const largest = largestNumber(numbers);
// console.log(largest);














// function cheapestPhone(phones) {
//     let chepeast = phones[0];
//     for (let i = 0; i < phones.length; i++) {
//         const phone = phones[i];

//         if (phone.price < chepeast.price) {
//             chepeast = phone;
//         }
//     }
//     return chepeast;
// }
// const mostChepeast = cheapestPhone(phones);
// console.log(mostChepeast);



// function cheapestPhone(allphones) {
//     let chepeast = phones[0];
//     for (let i = 0; i < allphones.length; i++) {
//         const phone = allphones[i];

//         if (phone.price < chepeast.price) {
//             chepeast = phone;
//         }
//     }
//     return chepeast;
// }
// const mostChepeast = cheapestPhone(phones);
// console.log(mostChepeast);

