import WaterpoloGamesGateway from "./WaterpoloGamesGateway.js";

export default class WaterpoloGamesService {
    static getAllGames() {
        return new WaterpoloGamesGateway().getAllGames();
    }

    static getGameById(id) {
        return new WaterpoloGamesGateway().getGameById(id);
    }
}