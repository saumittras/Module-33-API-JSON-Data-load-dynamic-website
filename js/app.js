function loadData2() {
  const url = "https://jsonplaceholder.typicode.com/todos/1";

  fetch(url)
    .then((res) => res.json())
    .then((json) => console.log(json));
}

function loadUsers() {
  const apiURL = "https://jsonplaceholder.typicode.com/users";
  fetch(apiURL)
    .then((res) => res.json())
    .then((data) => displayUsers(data));
}

function displayUsers(data) {
  console.log(data);
}
