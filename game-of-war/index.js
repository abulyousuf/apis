let deckId = "";

const handleClick = () => {
    fetch("https://deckofcardsapi.com/api/deck/new/shuffle/")
        .then(res => res.json())
        .then(data => {
            deckId = data.deck_id;

            console.log(deckId);
        });
};

document.querySelector("#new-deck").addEventListener("click", handleClick);