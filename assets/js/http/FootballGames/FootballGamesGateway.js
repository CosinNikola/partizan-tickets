export default class FootballGamesGateway {
    async getAllGames() {
        const res = await fetch('http://localhost:3000/football-games');
        const data = res.json();
        return data;
    }

    async getGameById(id) {
        const res = await fetch(`http://localhost:3000/football-games/${id}`);
        const data = res.json();
        return data;
    }
}