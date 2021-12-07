let deckId = "";

const cardsContainer = document.querySelector("#cards");
const newDeckBtn = document.querySelector("#new-deck");
const drawCardsBtn = document.querySelector("#draw-cards");

const handleClick = () => {
    fetch("https://deckofcardsapi.com/api/deck/new/shuffle/")
        .then(res => res.json())
        .then(data => {
            deckId = data.deck_id;
        });
};

const drawCards = () => {
    fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`)
        .then(res => res.json())
        .then(data => {
            for (let i = 0; i < cardsContainer.children.length; i++) {
                cardsContainer.children[i].innerHTML = `
                    <img src="${data.cards[i].image}" alt="card" class="card">
                `;
            }
        });
};

newDeckBtn.addEventListener("click", handleClick);

drawCardsBtn.addEventListener("click", drawCards);