// // // const myInches = 48;
// // // const myFeet = myInches / 12;
// // // console.log(myFeet);

// // function inchToFeet(inchs) {
// //     const feet = inchs / 12;
// //     return feet;
// // }
// // // const dadaInch = 48;
// // const dadaFeet = inchToFeet(48);
// // console.log("dadaFeet =", dadaFeet);


// ....>>process1
function feetToInch(feets) {
    const convertInch = feets * 12;
    console.log(convertInch);
    return convertInch;
}
feetToInch(4)

// ///...process2
// // function feetToInch(feets) {
// //     const convertInch = feets * 12;
// //     return convertInch;
// // }
// // const inputYourFeet = 4;
// // const yourInchs = feetToInch(inputYourFeet);
// // console.log("yourInchs =", yourInchs);


// //miles to kilomerter  >>>process1

// // function milesToKilometer(miles) {
// //     const km = miles * 1.60934;
// //     console.log("Kilometer =", km.toFixed(2));
// //     return km;
// // }
// // milesToKilometer(2);


// // miles to kilometer>>>>procwess-2
// function milesToKilometer(miles) {
//     const km = miles * 1.60934;
//     return km;
// }
// const miles = 2;
// const kiloMeter = milesToKilometer(miles);
// console.log("Kilometer =", kiloMeter.toFixed(2));


//farenheit to celsius 

function farToCel(fars) {
    const celsius = (fars - 32) * (5 / 9);
    return celsius;

}
const inputFarhenheit = 98.6;
const Celsius = farToCel(inputFarhenheit);
console.log(Celsius);