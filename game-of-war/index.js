let deckId = "";

const cardsContainer = document.querySelector("#cards");
const newDeckBtn = document.querySelector("#new-deck");
const drawCardsBtn = document.querySelector("#draw-cards");
const header = document.querySelector("#header");
const remainingCards = document.querySelector("#remaining");

const handleClick = () => {
    fetch("https://deckofcardsapi.com/api/deck/new/shuffle/")
        .then(res => res.json())
        .then(data => {
            deckId = data.deck_id;
        });
};

const getCardWinner = (card1, card2) => {
    const valuesArray = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "JACK", "QUEEN", "KING", "ACE"];

    const card1ValueIndex = valuesArray.indexOf(card1.value);
    const card2ValueIndex = valuesArray.indexOf(card2.value);

    if (card1ValueIndex > card2ValueIndex) {
        return "Computer wins!";
    } else if (card1ValueIndex < card2ValueIndex) {
        return "You win!";
    } else {
        return "War!";
    }
};

const drawCards = () => {
    fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`)
        .then(res => res.json())
        .then(data => {
            remainingCards.textContent = `Remaining cards: ${data.remaining}`;

            for (let i = 0; i < cardsContainer.children.length; i++) {
                cardsContainer.children[i].innerHTML = `
                    <img src="${data.cards[i].image}" alt="card" class="card">
                `;
            }

            header.textContent = (getCardWinner(data.cards[0], data.cards[1]));
        });
};

newDeckBtn.addEventListener("click", handleClick);

drawCardsBtn.addEventListener("click", drawCards);