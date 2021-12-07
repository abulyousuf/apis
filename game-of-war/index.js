let deckId = "";

const handleClick = () => {
    fetch("https://deckofcardsapi.com/api/deck/new/shuffle/")
        .then(res => res.json())
        .then(data => {
            deckId = data.deck_id;

            console.log(deckId);
        });
};

const drawCards = () => {
    fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
        });
};

document.querySelector("#new-deck").addEventListener("click", handleClick);

document.querySelector("#draw-cards").addEventListener("click", drawCards);