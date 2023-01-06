import TicketsPricesService from "./http/TicketsPrices/TicketsPricesService.js";
import BasketballGamesService from "./http/BasketballGames/BasketballGamesService.js";

const main = document.querySelector("main");
let tickets = [];
let game = {};

const loadData = async () => {
    await TicketsPricesService.getAllTicketsPrices()
    .then(res => tickets = [...res]);

    await BasketballGamesService.getGameById(tickets[0].gameId)
    .then(res => game = res)
}

const ticketsList = () => {
    const ul = document.createElement("ul");
    for(let ticket of tickets) {
        let li = document.createElement("li");
        li.textContent = ticket.section + ": " + ticket.price + " din."; 
        ul.appendChild(li);
    }
    return ul;
}

const selectMenu = () => {
    
}

await loadData();
console.log(tickets)
console.log(game)

main.innerHTML += `
    <h1>${game.team1} - ${game.team2}</h1>
    <div class="datetime">
    <span class="material-symbols-outlined">calendar_month</span>
    <div class="datetime-text">
        <span>${game.date}</span>
        <span>${game.time}</span>
    </div>
    </div>
    <p>${game.desc}</p>
    <hr />
    <h3>CENE POJEDINAČNIH ULAZNICA ZA UTAKMICU PARTIZAN MOZZART BET - CIBONA SU:</h3>
    ${ticketsList()}
` ;