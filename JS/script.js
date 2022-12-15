let cards = document.querySelectorAll('.card')
let cardValue = document.querySelectorAll('.card-Value')
let flips = document.getElementById('flips')
// starting parameters
// Cards Array, timer

let t = document.getElementById('time-remaining');
let num = 60;
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let Pickedcards = []


// console.log(cards)


function resetCards() {
  cards.forEach(card => card.classList.remove('visible'))
  cards.forEach(card => {
    card.addEventListener("click", flipCard)
  })
  
}



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
          if (document.getElementById('victory-text').classList.contains('visible')) {
              document.getElementById('game-over-text').classList.remove('visible');

          }else {          document.getElementById('game-over-text').classList.add('visible');
}
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
          t.innerText = num;
            // reset flips
          flips.innerText = 0;
          shuffle()
          resetCards()
          
            // reset matches
        })
    })

}

gamestart()

function disableCards() {
  
  firstCard.removeEventListener('click', flipCard);
  
  secondCard.removeEventListener('click', flipCard);
  flips.innerHTML++;
  if (flips.innerHTML >= 8) {
    document.getElementById('victory-text').classList.add('visible')
  }
  console.log(flips.innerHTML)




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
  // create a loop to see if i === i+1
  // isMatch = if firstcard = item && secondcard== element
  let isMatch = firstCard.dataset.image === secondCard.dataset.image


  isMatch ? disableCards() : unflipCards(); 
  
  //console.log(Pickedcards)
  }


  function flipCard() {
    if (lockBoard) return;
    //console.log(this, 'this')
    
    if (this === firstCard) {
      return;
    }

    this.classList.add('visible');

    if (!hasFlippedCard) {
      hasFlippedCard = true;
      firstCard = this;
      Pickedcards.push(firstCard.getAttribute('data-image'))

      return;
    }

    secondCard = this;
    Pickedcards.push(secondCard.getAttribute('data-image'))
  checkForMatch();
  }





  //find a way to show victory screen when user wins
  //add match to cards when matched


  

  cards.forEach(card => {
    card.addEventListener("click", flipCard)
  })
