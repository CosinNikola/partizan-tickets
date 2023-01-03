const main = document.querySelector("main");
let games = [];
console.log(window)

const getGames = async () => {
    const res = await fetch("http://localhost:3000/games");
    const data = await res.json();
    return data;
}
    await getGames()
    .then(res => {
        games = [...res];
    });

console.log(games);

const writeData = () => {
    for(let game of games) {
        main.innerHTML += 
        `<div class="game">
            <div class="overlay">
                <button>Kupi kartu</button>
            </div>
            <img src="${game.img}" alt="">
            <div class="game-text">
                <h1>${game.team1} - ${game.team2}</h1>
                <h2>${game.arena}</h2>
                <span>${game.date}</span>
                <span>${game.time}</span>
            </div>
        </div>`
    }
}

writeData();


