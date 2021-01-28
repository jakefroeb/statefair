import { FoodTicketHolders } from "./food/FoodTicketHolders.js"
import {RideTicketHolders} from "./rides/RideTicketHolders.js"
import {GameTicketHolders} from "./games/GameTicketHolders.js"
import { SideshowTicketHolders } from "./sideshows/SideshowTicketHolders.js"

const contentTarget = document.querySelector(".entry")
const eventHub = document.querySelector("#state-fair")

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "rideTicket"){
        clickEvent.preventDefault();
        const rideEvent = new CustomEvent("rideTicketPurchased")
        eventHub.dispatchEvent(rideEvent)
    }
})
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "foodTicket"){
        clickEvent.preventDefault();
        const foodEvent = new CustomEvent("foodTicketPurchased")
        eventHub.dispatchEvent(foodEvent)
    }
})
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "gameTicket"){
        clickEvent.preventDefault();
        const gameEvent = new CustomEvent("gameTicketPurchased")
        eventHub.dispatchEvent(gameEvent)
    }
})
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "sideshowTicket"){
        clickEvent.preventDefault();
        const sideshowEvent = new CustomEvent("SideshowTicketPurchased")
        eventHub.dispatchEvent(sideshowEvent)
    }
})
export const TicketBooth = () => {
    RideTicketHolders()
    FoodTicketHolders()
    GameTicketHolders()
    SideshowTicketHolders()
    
    contentTarget.innerHTML = `
        <div class="ticketBooth">
            <button id="rideTicket">Ride Ticket</button>
            <button id="foodTicket">Food Ticket</button>
            <button id="gameTicket">Game Ticket</button>
            <button id="sideshowTicket">Sideshow Ticket</button>
        </div>
    `
}

