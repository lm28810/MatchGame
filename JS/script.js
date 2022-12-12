// starting parameters
// Cards Array, timer

let cards = document.querySelectorAll('.card')
let t = document.getElementById('time-remaining');
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

// console.log(cards)


// shuffle cards
    
function shuffle() {
  cards.forEach(card => {
    let randomCard = Math.floor(Math.random() * cards.length);
    card.style.order = randomCard;
  });
}
shuffle();


// start count down
let timer = () => {
    let countDown = setInterval(() => {
        
        t.innerText--;
        if (t.innerText <= 0) {
            clearInterval(countDown);
            document.getElementById('game-over-text').classList.add('visible');
        }
    }, 1000);

   }
 
    
// remove overlay & start Game 
// make visible class disappear

const gamestart = () => {
    let overlays = document.querySelectorAll('.overlay-text');
    overlays.forEach(overlay => {
        overlay.addEventListener('click', () => {
            overlay.classList.remove('visible');
            // delay timer until after overlay disappears
            setTimeout(timer, 2000);
            // reset timer
            t.innerText = 10
            // reset flips
            // reset matches
        })
    })

}

gamestart()



const flip = () => {
    cards.forEach(card=>{card.addEventListener('click',()=> card.classList.add('visible') )})
}

flip()

// const gameOver = ()=> {
//     clearInterval(countDown);
//     document.getElementById('game-over-text').classList.add('visible');
    
// }
//     gameOver()