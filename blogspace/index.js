const blogList = document.querySelector("#blog-list");

fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(data => {
        const postsArr = data.slice(0, 5);

        let html = "";

        for (let post of postsArr) {
            html += `
                <h3>${post.title}</h3>
                <p>${post.body}</p>
                <hr>
            `;
        }

        blogList.innerHTML = html;
    });

const newPost = document.querySelector("#new-post");

newPost.addEventListener("submit", (e) => {
    e.preventDefault();

    const postTitle = document.querySelector("#post-title");
    const postBody = document.querySelector("#post-body");

    const data = {
        title: postTitle.value,
        body: postBody.value
    };

    postTitle.value = "";
    postBody.value = "";

    const options = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    };

    fetch("https://jsonplaceholder.typicode.com/posts", options)
        .then(res => res.json())
        .then(post => {
            blogList.insertAdjacentHTML("afterbegin", `<h3>${post.title}</h3><p>${post.body}</p><hr>`);
        });
});