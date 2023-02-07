function woodCalculator(chairQuantity, tableQuantity, bedQuantity) {

    const perChairWood = 3;
    const pertableWood = 10;
    const perBedWood = 50;

    const totalChair = perChairWood * chairQuantity;
    const totalTable = pertableWood * tableQuantity;
    const totalBed = perBedWood * bedQuantity;

    // console.log(totalChair, totalTable, totalBed);
    const totalWood = totalChair + totalTable + totalBed;
    // console.log(totalWood);
    return totalWood;
}
const totalWood = woodCalculator(2, 3, 4)
console.log(totalWood);


// function paperRequirements(firstBookCopy, secondBookCopy, thirdBookCopy) {
//     const firstBookPage = 100;
//     const secondBookPage = 200;
//     const thirdBookPage = 300;

//     const firstbookTotalPage = firstBookCopy * firstBookPage;
//     const secondbookTotalPage = secondBookCopy * secondBookPage;
//     const thirdbookTotalPage = thirdBookCopy * thirdBookPage;
//     const totalPage = firstbookTotalPage + secondbookTotalPage + thirdbookTotalPage;

//     return totalPage;
// }
// const pages = paperRequirements(0, 5, 0);
// console.log(pages);