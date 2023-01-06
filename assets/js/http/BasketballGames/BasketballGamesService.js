import BasketballGamesGateway from "./BasketballGamesGateway.js";

export default class BasketballGamesService {
    static getAllGames() {
        return new BasketballGamesGateway().getAllGames();
    }

    static getGameById(id) {
        return new BasketballGamesGateway().getGameById(id);
    }
}