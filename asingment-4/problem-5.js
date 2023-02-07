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