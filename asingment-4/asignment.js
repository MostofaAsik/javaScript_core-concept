/* 
mindGame function which take input positive number.now need to multiply that number by 3, then add 10, then divide by 2, then subtract 5, and return the output.
*/
function mindGame(positiveNumber) {
    //validation
    if (typeof positiveNumber !== 'number') {
        return "Enter Number.Plz!!"
    }
    const multiplicationResult = positiveNumber * 3;
    const sumResult = multiplicationResult + 10;
    const divisionResult = sumResult / 2;
    const subResult = divisionResult - 5;
    return subResult;
}


/* 
  evenOdd function which take input as a string. now the output given based on the total number of characters of that string.Output will be 'even' or 'odd'
*/

function evenOdd(string) {
    //validation
    if (typeof string !== 'string') {
        return "Enter String.Plz!!"
    }

    if (string.length % 2 == 0) {
        return "even";
    }
    else {
        return "odd";
    }
}





/* 
 isLGSeven function take input as a number.now need to find the difference between the input value and 7. If this difference is smaller than 7,must return the subtraction. Otherwise must return double of the input.
*/

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



/* 
 findingBadData function take input a array.Any number of numbers will be in the array.Numbers can be negative numbers (less than zero) and positive numbers (greater than or equal to zero). which called "Bad data" & "Good Data".now How many bad data are there in the array and must return that number.
*/

function findingBadData(array) {
    //validation-start
    if (Array.isArray(array) !== true) {
        return "Enter Array. plz!!"
    }
    //validation-end
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (element < 0) {
            newArray.push(element);

        }
    }
    return newArray.length;
}



/* 
gemsToDiamond function take 3 input as number which 3 friends gems number.Now figure out how many diamonds get in total by combining the gems of 3 friends.If the number of total diamond is over twice 1000, then subtracting 2000 from the total diamond.must return diamonds number after subtracting 2000.Otherswise return totalDiamond.
*/

function gemsToDiamond(firstFriendGem, secondFriendGem, thirdFriendGem) {

    //validation
    if (typeof firstFriendGem !== 'number' || typeof secondFriendGem !== 'number' || typeof thirdFriendGem !== 'number') {
        return "Enter Number. plz!!"
    }

    const firstFriendGemPower = 21;
    const secondFriendGemPower = 32;
    const thirdFriendGemPower = 43;

    const firstFriendDimond = firstFriendGem * firstFriendGemPower;
    const secondFriendDimond = secondFriendGem * secondFriendGemPower;
    const thirdFriendDimond = thirdFriendGem * thirdFriendGemPower;

    const totalDimond = firstFriendDimond + secondFriendDimond + thirdFriendDimond;

    if (totalDimond > 2 * 1000) {
        const sub = totalDimond - 2000;
        return sub;
    }
    else {
        return totalDimond;
    }

}

const result = gemsToDiamond(100, 5, 1);
console.log(result);