// function ticketPrice(ticketQuantity) {
//     const first100Rate = 100;
//     const second100Rate = 90;
//     const restTicket = 70;
//     if (ticketQuantity <= 100) {
//         const price = ticketQuantity * first100Rate;
//         return price;
//     }
//     else if (ticketQuantity <= 200) {
//         const first100Price = 100 * first100Rate;
//         const remaining = ticketQuantity - 100;
//         const secondPrice = remaining * second100Rate;
//         const total = first100Price + secondPrice;
//         return total;
//     }
//     else {
//         const first100Price = 100 * first100Rate;
//         const second100Price = 100 * second100Rate;
//         const remaining = ticketQuantity - 200;
//         const remainingPrice = remaining * 70;
//         const totalCost = first100Price + second100Price + remainingPrice;
//         return totalCost;
//     }
// }
// const totalTaka = ticketPrice(201);
// console.log(totalTaka);


/* >>>>>>>>>>>>>>>>>>>>>>> */

// function ticketPrice(ticketQuantity) {
//     const first100Rate = 100;
//     const second100Rate = 90;
//     const restRate = 70;
//     if (ticketQuantity <= 100) {
//         const price = ticketQuantity * first100Rate;
//         return price;

//     }
//     else if (ticketQuantity <= 200) {
//         const first100Price = 100 * first100Rate;
//         const remaining = ticketQuantity - 100;
//         const remainingPrice = remaining * 90;
//         const second100Price = first100Price + remainingPrice;
//         return second100Price;

//     }
//     else {
//         const first100Price = 100 * first100Rate;
//         const second100Price = 100 * second100Rate;
//         const remaining = ticketQuantity - 200;
//         const remainingPrice = remaining * 70;
//         const lastDaysPrice = first100Price + second100Price + remainingPrice;

//         return lastDaysPrice;
//     }
// }
// const total = ticketPrice(201);
// console.log(total);


function discountPrice(totalTicket) {
    const first100TicketRate = 100;
    const secocnd100TicketRate = 90;
    const restTickeRate = 70;
    if (totalTicket <= 100) {
        const first100TicketPrice = totalTicket * first100TicketRate;
        return first100TicketPrice;
    }
    else if (totalTicket <= 200) {
        const first100TicketPrice = 100 * first100TicketRate;
        const remainingTicket = totalTicket - 100;
        const remainingTicketPrice = remainingTicket * 90;
        const secondTotal = first100TicketPrice + remainingTicketPrice;
        return secondTotal;

    }
    else {
        const first100TicketPrice = 100 * first100TicketRate;
        const secocnd100TicketPrice = 100 * secocnd100TicketRate;
        const remainingTicket = totalTicket - 200;
        const remainingTicketPrice = remainingTicket * 70;
        const finalTotal = first100TicketPrice + secocnd100TicketPrice + remainingTicketPrice;
        return finalTotal;

    }

}
const total = discountPrice(201);
console.log(total)