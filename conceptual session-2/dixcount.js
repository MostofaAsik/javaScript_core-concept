function discountPrice(totalTicket) {
    const first100TicketRate = 100;
    const secocnd100TicketRate = 90;
    const restTickeRate = 70;
    if (totalTicket <= 100) {
        const first100TicketPrice = totalTicket * first100TicketRate;
        return first100TicketPrice;
    }
    else if (totalTicket <= 200) {
        const first100Price = 100 * first100TicketRate;
        const remainingTicket = totalTicket - 100;
        const remainingTicketPrice = remainingTicket * 90;
        const remainingPrice = first100Price + remainingTicketPrice;
        return remainingPrice;
    }
    else {
        const first100Price = 100 * first100TicketRate;
        const second100Price = 100 * secocnd100TicketRate;
        const remainingTicket = totalTicket - 200;
        const remainingTicketPrice = remainingTicket * restTickeRate;
        const remainingPrice = first100Price + second100Price + remainingTicketPrice;
        return remainingPrice;

    }
}
const totalTaka = discountPrice(201);
console.log(totalTaka);