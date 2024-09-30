const url = "https://jsonplaceholder.typicode.com/posts";

function loadPosts() {
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayPosts(data));
}

/**
1. grt the cont
 * 
 */

function displayPosts(posts) {
  const postContainer = document.getElementById("post-container");
  for (const post of posts) {
    const div = document.createElement("div");
    div.classList.add("post");
    div.innerHTML = `
    <h4>User: ${post.userId}</h4>
    <h5>Post Title: ${post.title}</h5>
    <p>Post Description: ${post.body}</p>
    `;
    postContainer.appendChild(div);
  }
}

loadPosts();
