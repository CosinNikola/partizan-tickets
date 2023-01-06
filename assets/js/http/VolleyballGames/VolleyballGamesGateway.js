export default class VolleyballGamesGateway {
    async getAllGames() {
        const res = await fetch('http://localhost:3000/volleyball-games');
        const data = res.json();
        return data;
    }

    async getGameById(id) {
        const res = await fetch(`http://localhost:3000/volleyball-games/${id}`);
        const data = res.json();
        return data;
    }
}