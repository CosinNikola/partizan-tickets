import TicketsPricesGateway from "./TicketsPricesGateway.js";

export default class TicketsPricesService {
    static getAllTicketsPrices() {
        return new TicketsPricesGateway().getAllTicketsPrices();
    }

    static getTicketPriceById(id) {
        return new TicketsPricesGateway().getTicketPriceById(id);
    }
}