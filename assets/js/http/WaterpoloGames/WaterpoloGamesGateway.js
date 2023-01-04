export default class WaterpoloGamesGateway {
    async getAllGames() {
        const res = await fetch('http://localhost:3000/waterpolo-games');
        const data = res.json();
        return data;
    }

    async getGameById(id) {
        const res = await fetch(`http://localhost:3000/waterpolo-games/${id}`);
        const data = res.json();
        return data;
    }
}