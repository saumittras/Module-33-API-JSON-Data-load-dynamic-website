const url = "https://jsonplaceholder.typicode.com/comments";
function loadData() {
  fetch(url)
    .then((respon) => respon.json())
    .then((data) => console.log(data))
    .catch((error) => console.log("Error Happen", error));
}

const loadComment2 = async () => {
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
};

const loadComments3 = async () => {
  try {
    const res = await fetch(urdl);
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.error("data loading error");
  }
};
