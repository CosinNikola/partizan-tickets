import HandballGamesGateway from "./HandballGamesGateway.js";

export default class HandballGamesService {
    static getAllGames() {
        return new HandballGamesGateway().getAllGames();
    }

    static getGameById(id) {
        return new HandballGamesGateway().getGameById(id);
    }
}