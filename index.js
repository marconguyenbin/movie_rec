let searchBtn = document.getElementById("search-btn");
let movieResult = document.getElementById("result");
let movieTitle = document.getElementById("movie-name");

//function to fetch info from API

let getMovie = () => {
    let movieName = movieTitle.value;
    let url = `http://www.omdbapi.com/?t=${movieName}&apikey=${key}`;
//empty input
    if(movieName.length <= 0){
        result.innerHTML = `<h3 class="msg"> Please Enter a Movie Name </h3>`;

    }
    else{
        fetch(url).then((resp) => resp.json()).then((data) => {
            if(data.Response == 'True'){
                result.innerHTML = `
                <div class = "info">
                    <img src = ${data.Poster} class = "poster"
                    <div>
                        <h2> ${data.Title}</h2>
                        <div class = "rating">
                            <img src = "icons8-star-48.png">
                            <h4> ${data.imdbRating} </h4>
                        </div>
                        <div class = "details">
                            <span>${data.Rated}</span>
                            <span>${data.Runtime}</span>
                            <span>${data.Year}</span>
                        </div>
                        <div class = "genre">
                            <span>${data.Genre.split(",").join("</div><div>")}
                        </div>
                    </div>
                    <h3>Plot:</h3>
                    <p>${data.Plot}</p>
                    <h3>Cast:</h3>
                    <p>${data.Actors}</p>

                `
            }
            else{
                result.innerHTML = `<h3 class = "msg">${data.Error}</h3>`;
            }

        })
        .catch(() =>{
            result.innerHTML = `<h3 class = "msg">Error Occured</h3>`;


        })
    }
};

searchBtn.addEventListener("click", getMovie);
window.addEventListener("load",getMovie);