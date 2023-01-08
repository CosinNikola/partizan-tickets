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

// const ticketsList = () => {
//     const ul = document.createElement("ul");
//     for(let ticket of tickets) {
//         let li = document.createElement("li");
//         li.textContent = ticket.section + ": " + ticket.price + " din."; 
//         ul.appendChild(li);
//     }
//     return ul;
// }

const ticketsList = () => {
    let listElements = "";
    for(let ticket of tickets) {
        listElements += `<li>${ticket.section}: ${ticket.price} din.</li>`;
    }
    return listElements;
}

// const selectMenu = () => {
//     const select = document.createElement("select");
//     for(let ticket of tickets) {
//         let option = document.createElement("option");
//         option.value = ticket.section;
//         option.textContent = ticket.section;
//         select.appendChild(option);
//     }

//     return select;
// }

// const selectMenu = () => {
//     let options = "";
//     for(let ticket of tickets) {
//         options += `<option value=${ticket.section}>${ticket.section}</option>`;
//     }
//     return options;
// }



const checkboxes = () => {
    let checkboxGroup = "";
    let i = 0;
    for(let ticket of tickets) {
        checkboxGroup += `<span><input type='checkbox' class="checkbox" value=${ticket.section}/> ${ticket.section} <input type="number" id="${i}" class="quantity"/></span>`;
        // document.querySelector(".checkbox")[i].addEventListener('change', () => {toggleInput(i)});
        i++;
    }
    return checkboxGroup;
}


const toggleInput = (id) => {
    console.log(id)
    const field = document.getElementById(id);
    if(field.style.visibility === "visible"){
        field.style.visibility = "hidden";
    }
    else {
        field.style.visibility = "visible";
    }
}

const addToggle = () => {
    let i = 0;
    const checkboxes = document.querySelectorAll(".checkbox");
    const checkboxesArr = [...checkboxes];
    console.log(typeof checkboxesArr)
    for(let checkbox of checkboxes){
        checkbox.addEventListener("change", () => {toggleInput(checkboxesArr.indexOf(checkbox))});
        i++;
    }
}

const addPriceCount = () => {
    let i = 0;
    const inputs = document.querySelectorAll('.quantity');
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener('change', () => {countPrice(i)});
        
    }
    // inputs.forEach(input => input.addEventListener('change', () => {
    //     countPrice(i);
    //     i++;
    //     }
        // ));
}


// const checkboxes = () => {
//     let i = 0;
//     const checkboxGroup = document.createElement("div");
//     const span = document.createElement("span");

//     for(let ticket of tickets) {
//         let checkbox = document.createElement("input");
//         checkbox.type = "checkbox";
//         checkbox.value = ticket.section;
//         checkbox.id = i;
//         span.appendChild(checkbox);
//         checkboxGroup.appendChild(span);
//         i++;
//     }

//     return checkboxGroup;
// }

const countPrice = (id) => {
    const priceDisplay = document.getElementsByClassName("total-price")[0];
    let price = +priceDisplay.innerText;
    const ticket = tickets[id].price;
    // console.log(document.getElementById(id).value);
    // console.log(ticket)
    const quantity = document.getElementById(id).value;
    price += ticket * quantity;
    console.log(price)
    priceDisplay.innerText = price;
}

await loadData();
console.log(tickets)
console.log(game)


console.log(ticketsList())

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
    <ul class="ticket-prices">${ticketsList()}</ul>
    <h3>Odaberi kartu:</h3>
    <form>
    <div class="checkbox-group">
    ${checkboxes()}
    </div>
    <div class="pay">
    <h2>Cena: <span class="total-price">0</span> din</h2>
    <input type="submit" value="Kupi">
    </div>
    </form>
` ;

addToggle();
addPriceCount();