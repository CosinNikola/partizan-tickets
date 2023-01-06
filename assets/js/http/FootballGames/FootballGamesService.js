import FootballGamesGateway from "./FootballGamesGateway.js";

export default class FootballGamesService {
    static getAllGames() {
        return new FootballGamesGateway().getAllGames();
    }

    static getGameById(id) {
        return new FootballGamesGateway().getGameById(id);
    }
}