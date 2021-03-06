const url = "http://www.omdbapi.com/?s=";
const apikey = "thewdb";

document.getElementById("search-btn").addEventListener("click", () => {
  const movie = document.getElementById("movie-input").value;
  clearRow();
  getMovies(movie);
});

async function getMovies(movie) {
  const {
    data: { Search },
  } = await axios.get(`${url}${movie}&apikey=${apikey}`);
  Search.forEach((el) => {
    let img;
    if (el.Poster === "N/A") {
      img =
        "data:image/png;base64,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";
    } else {
      img = el.Poster;
    }

    html = `<div class="col-md-2 movie-container" id = ${el.imdbID}>
    <img
      src= ${img}
      alt="${el.Title}"
    />
    <h5>Movie Title : ${el.Title}</h5>
    <button class="btn btn-details btn-info"><a href="details.html#${el.imdbID}" target="_blank">Details</a></button>
    </div>`;

    document.querySelector(".row").insertAdjacentHTML("beforeend", html);
  });
}

function clearRow() {
  document.querySelector(".row").innerHTML = "";
  document.getElementById("movie-input").value = "";
}

// function addEventToBtns() {
//   const btns = document.querySelectorAll(".btn-details");
//   if (btns) {
//     btns.forEach((el) => {
//       el.addEventListener("click", getDetails);
//     });
//   }
// }
