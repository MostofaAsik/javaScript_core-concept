// function functionName(parameters) {
//     //function body
//     //return
// }
// var returnedvalue = functionName(parameters - value);


function getAvg(asignment1, asignment2, asignment3) {
    const total = asignment1 + asignment2 + asignment3;
    const avg = total / 3;

    return avg;
}
const asignment1Marks = 12;
const asignment2Marks = 13;
const asignment3Marks = 12;
const myavg = getAvg(asignment1Marks, asignment2Marks, asignment3Marks);
console.log("My avg is low", myavg);

