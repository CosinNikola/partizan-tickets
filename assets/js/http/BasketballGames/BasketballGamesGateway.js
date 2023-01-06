export default class BasketballGamesGateway {
    async getAllGames() {
        const res = await fetch('http://localhost:3000/basketball-games');
        const data = res.json();
        return data;
    }

    async getGameById(id) {
        const res = await fetch(`http://localhost:3000/basketball-games/${id}`);
        const data = res.json();
        return data;
    }
}