

// Main Function
let ready = () => {
    let overlays = document.querySelectorAll('.overlay-text')
    let cards = document.querySelectorAll(".card")

    // Making sure overlays and cards are in arrays
    console.log(overlays)
    console.log(cards)

    // Add click events
    overlays.forEach(overlay => {
        // this will make the overlay disappear at game start
        overlay.addEventListener('click',()=>{overlay.classList.remove('visible')})
    })
    //start game 
}

// Calling Main Function
ready()