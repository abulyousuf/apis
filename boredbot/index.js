const btn = document.querySelector("#btn");
const activity = document.querySelector("#activity");

btn.addEventListener("click", () => {
    fetch("https://www.boredapi.com/api/activity")
        .then(response => response.json())
        .then(data => {
            activity.textContent = data.activity;
        })
});