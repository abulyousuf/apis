const btn = document.querySelector("#btn");
const activity = document.querySelector("#activity");
const title = document.querySelector("#title");

btn.addEventListener("click", () => {
    fetch("https://www.boredapi.com/api/activity")
        .then(response => response.json())
        .then(data => {
            activity.textContent = data.activity;
            title.textContent = "🦾 HappyBot 🦿";
            document.body.classList.add("fun");
        })
});