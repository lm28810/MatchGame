let cards = document.querySelectorAll('.card')
// starting parameters
// Cards Array, timer

let t = document.getElementById('time-remaining');
let num = 60;
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;


// console.log(cards)


function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

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
            t.innerText = num
            // reset flips
          resetBoard()
            // reset matches
        })
    })

}

gamestart()

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);

  resetBoard();
}

function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove('visible');
    secondCard.classList.remove('visible');

    resetBoard();
  }, 1500);
}



function checkForMatch() {
  let image = data.image
 let isMatch = firstCard.image == secondCard.image;

  isMatch ? disableCards() : unflipCards();
}


function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add('visible');

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;

    return;
  }

  secondCard = this;
  checkForMatch();
}


// const flip = () => {
   
//     cards.forEach((card) => { card.addEventListener('click', () => card.classList.add('visible')) })
// console.log()
// // cards.forEach((card) => { card.addEventListener('click', card.classList.add('visible')  ) })

// }

// flip()

cards.forEach(card => {
    card.addEventListener("click", flipCard)
})
