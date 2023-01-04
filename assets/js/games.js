import BasketballGamesService from "./http/BasketballGames/BasketballGamesService.js";
import FootballGamesService from "./http/FootballGames/FootballGamesService.js";
import HandballGamesService from "./http/HandballGames/HandballGamesService.js";
import WaterpoloGamesService from "./http/WaterpoloGames/WaterpoloGamesService.js";
import VolleyballGamesService from "./http/VolleyballGames/VolleyballGamesService.js";

const main = document.querySelector("main");
let games = [];

const getPageDesc = () => {
    let url = document.URL;
    let desc = url.substring((url.length - 5), (url.length - 7))
    return desc;
}

console.log(getPageDesc())

const checkImg = (img) => {
    let imgSrc;
    if(img !== ""){
        imgSrc = img;
    }
    else {
        imgSrc = "./assets/img/no-image.png"
    }
    return imgSrc;
}

const loadData = async () => {
    if(getPageDesc() === "kk"){
        await BasketballGamesService.getAllGames()
        .then(res => games = [...res]);
    }
    else if(getPageDesc() === "fk"){
        await FootballGamesService.getAllGames()
        .then(res => games = [...res]);
    }
    else if(getPageDesc() === "rk"){
        await HandballGamesService.getAllGames()
        .then(res => games = [...res]);
    }
    else if(getPageDesc() === "vk"){
        await WaterpoloGamesService.getAllGames()
        .then(res => games = [...res]);
    }
    else if(getPageDesc() === "ok"){
        await VolleyballGamesService.getAllGames()
        .then(res => games = [...res]);
    }
}

// const getBasketballGames = async () => {
//     await BasketballGamesService.getAllGames()
//     .then(res => games = [...res]);
// }

// const getFootballGames = async () => {
//     await FootballGamesService.getAllGames()
//     .then(res => games = [...res]);
// }




// if(getPageDesc() === "kk") {
//     await getBasketballGames();
// }
// else if(getPageDesc() === "fk"){
//     await getFootballGames();
// }
// else if(getPageDesc() === "rk"){

// }

await loadData();


const writeData = () => {
    for(let game of games) {
        main.innerHTML += 
        `<div class="game">
            <div class="overlay">
                <button>Kupi kartu</button>
            </div>
            <img src="${checkImg(game.img)}" alt="">
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


