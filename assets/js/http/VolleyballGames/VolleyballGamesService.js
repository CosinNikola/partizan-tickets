import VolleyBallGamesGateway from "./VolleyBallGamesGateway.js";

export default class VolleyBallGamesService {
    static getAllGames() {
        return new VolleyBallGamesGateway().getAllGames();
    }

    static getGameById(id) {
        return new VolleyBallGamesGateway().getGameById(id);
    }
}