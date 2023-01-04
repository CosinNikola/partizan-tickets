export default class HandballGamesGateway {
    async getAllGames() {
        const res = await fetch('http://localhost:3000/handball-games');
        const data = res.json();
        return data;
    }

    async getGameById(id) {
        const res = await fetch(`http://localhost:3000/handball-games/${id}`);
        const data = res.json();
        return data;
    }
}