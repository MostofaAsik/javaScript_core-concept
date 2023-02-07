function publicBusFair(people) {
    const busPeople = 50;
    const microPeople = 11;
    const publicBusPrice = 250;
    if (people <= 365) {
        const bus2people = 7 * busPeople;
        const micro1People = 1 * microPeople;
        const remaingPeople = people - 361;
        const remaingPeopleCost = remaingPeople * publicBusPrice;
        return remaingPeopleCost;
    }
}
let result = publicBusFair(365);
console.log(result);

// function publicBusFair(people) {
//     let busSeatCapacity = 50;
//     let microBusSeatCapacity = 11;
//     let remaining = 0;
//     remaining = people % busSeatCapacity;
//     console.log(remaining);
//     remaining = remaining % microBusSeatCapacity;
//     console.log(remaining);
//     let publicBusCost = remaining * 250;
//     return publicBusCost;
// }
// console.log(publicBusFair(365));