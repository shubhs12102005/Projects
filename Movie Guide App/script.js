let form = document.querySelector("form");
let movieContainer = document.querySelector(".movie-container");
let inputBox = document.getElementById("inputBox");
let Searchbtn = document.getElementById("Searchbtn");


// Function to fetch movie data
const getMovieInfo = async (MovieName) =>{
    movieContainer.innerHTML = `<h1>Fetching Movie Info...</h1>`;
    try{
    const myApiKey = "695c116d";
    const url = `http://www.omdbapi.com/?apikey=${myApiKey}&t=${MovieName}`;

    const response = await fetch(url);
    const data = await response.json();

    console.log(data);
    showMovieData(data);
    } catch(error){
        showError("Sorry, Movie not found!!!");
    }
}

const showMovieData = (data) =>{
    movieContainer.innerHTML = "";
    const {Title, imdbRating, Genre, Released, Runtime, Actors, Plot, Poster} = data;

    const movieElement = document.createElement("div");
    movieElement.classList.add("movie-element");
    movieElement.innerHTML = `
        <h2>${Title}</h2>
        <p><strong>Rating: &#11088</strong>${imdbRating}</p>
    `

    const movieGenreElement = document.createElement("div");
    movieGenreElement.classList.add("movie-genre");

    Genre.split(",").forEach(element => {
        const p = document.createElement("p");
        p.innerText = element;
        movieGenreElement.appendChild(p);
    });


    movieElement.appendChild(movieGenreElement);

    movieElement.innerHTML += `
        <p class="tags"><strong>Release:</strong>${Released}</p>
        <p class="tags"><strong>Duration:</strong>${Runtime}</p>
        <p class="tags"><strong>Cast:</strong>${Actors}</p>
        <p class="tags"><strong>Plot:</strong>${Plot}</p>
    `

    const moviePoster = document.createElement("div");
    moviePoster.classList.add("movie-poster");
    moviePoster.innerHTML = `<img src="${Poster}">`;

    movieContainer.appendChild(moviePoster);
    movieContainer.appendChild(movieElement);
}

const showError = (msg) =>{
    movieContainer.innerHTML = `<h2>${msg}</h2>`;
}

// Adding EventLister to search movie
form.addEventListener("submit", (e)=>{
    e.preventDefault();
    const MovieName = inputBox.value.trim();
    if(MovieName !== ''){
        getMovieInfo(MovieName);
    } else {
       showError("Enter Movie Name to get Information.");
    }
})