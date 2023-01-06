export default class TicketsPricesGateway {
    async getAllTicketsPrices() {
        const res = await fetch('http://localhost:3000/tickets-prices');
        const data = res.json();
        return data;
    }

    async getTicketPriceById(id) {
        const res = await fetch(`http://localhost:3000/tickets-prices/${id}`);
        const data = res.json();
        return data;
    }
}