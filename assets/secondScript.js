// jQuery
// var ingredient = JSON.parse(localStorage.getItem("ingredient"));
//     console.log(ingredient);
//     var genre = JSON.parse(localStorage.getItem("genre"));
//     console.log(genre);

var movieTitle = document.querySelector(".movieTitle");
var releaseDate = document.querySelector(".releaseDate");
var overview =document.querySelector(".overview");
var moviePoster = document.querySelector(".movieImage");
// var movieRating =();


var recipeTitle = document.querySelector(".recipeTitle");
var recipeInstructions = document.querySelector(".recipeInstructions");
var recipeImage = document.querySelector(".recipeImage");
var recipeIngredients = document.querySelector(".recipeIngredients")




$(document).ready( function () {
    var ingredient = JSON.parse(localStorage.getItem("ingredient"));
    console.log(ingredient);
    var genre = JSON.parse(localStorage.getItem("genre"));
    console.log(genre);
    
    fetch(`https://salty-mountain-68764.herokuapp.com/https://tasty.p.rapidapi.com/recipes/list?from=0&size=10&tags=under_30_minutes&q=${ingredient}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "9db6727369mshcadc7a2e617b437p14279djsnff586e532c9e",
            "x-rapidapi-host": "tasty.p.rapidapi.com"
        }
    })
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);
        recipeTitle.textContent=data.results[0].name;
        console.log(data.results[0].name);

        recipeImage.src=data.results[0].thumbnail_url;
        console.log(data.results[0].thumbnail_url);

        recipeTitle.textContent=data.results[0].name;
        console.log(data.results[0].name);

       
        // do all of the fun stuff
        // renderRecipe(); {


        // }

    })
    .catch(err => {
        console.error(err);
    });

fetch(`https://salty-mountain-68764.herokuapp.com/https://api.themoviedb.org/3/discover/movie?api_key=1f0c12a5a877dc629a002fa2c6169442&language=en-US&sort_by=popularity.desc&include_adult=false&page=1&with_genres=${genre}`, {
    })
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);

        // do all of the fun stuff
        // renderMovie(); {


        // }
        movieTitle.textContent=data.results[0].title;
        console.log(data.results[0].title);

        releaseDate.textContent="Released on: " + data.results[0].release_date;
        console.log("Released on:  " + data.results[0].release_date);

        overview.textContent=data.results[0].overview;
        console.log(data.results[0].overview);

        var posterImgPath = data.results[0].poster_path

        moviePoster.src=`https://image.tmdb.org/t/p/w500${posterImgPath}`;
        console.log(data.results[0].poster_path);

        //https://image.tmdb.org/t/p/w500



    })
    .catch(err => {
        console.error(err);
    });

    
  });

   