// Movie card variables
var movieTitle = document.querySelector(".movieTitle");
var releaseDate = document.querySelector(".releaseDate");
var overview =document.querySelector(".overview");
var moviePoster = document.querySelector(".movieImage");
// var movieRating =();

// Recipe card variables
var recipeTitle = document.querySelector(".recipeTitle");
var recipeInstructions = document.querySelector(".recipeInstructions");
var recipeImage = document.querySelector(".recipeImage");
var recipeIngredients = document.querySelector(".recipeIngredients");
var ingredientList = document.querySelector(".ingredientList");
var instructionList = document.querySelector(".instructionList");

// Primary function that runs on page load
$(document).ready( function () {
    var ingredient = JSON.parse(localStorage.getItem("ingredient"));
    console.log(ingredient);
    var genre = JSON.parse(localStorage.getItem("genre"));
    console.log(genre);
    
    // Recipe api fetch request for recipe card details
    fetch(`https://salty-mountain-68764.herokuapp.com/https://tasty.p.rapidapi.com/recipes/list?from=0&size=100&tags=date_night&q=${ingredient}`, {
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

        var i = Math.floor(Math.random() * data.results.length)

        checkForComp();

        function checkForComp() {
            var canonicalValue = data.results[i].canonical_id;
            console.log(canonicalValue);

        if (canonicalValue.includes("compilation")) {
            console.log('error: compilation of recipes');
            i = Math.floor(Math.random() * data.results.length);

            checkForComp();
            return i;
          };
        }

        recipeTitle.textContent=data.results[i].name;
        console.log(data.results[i].name);

        recipeImage.src=data.results[i].thumbnail_url;
        // console.log(data.results[i].thumbnail_url);

        for (var index = 0; index < data.results[i].sections[0].components.length; index++) {
             
            var ingredientItem = document.createElement("li");

            ingredientItem.textContent=data.results[i].sections[0].components[index].raw_text;

            ingredientList.appendChild(ingredientItem)
        }

        for (var index = 0; index < data.results[i].instructions.length; index++) {
             
            var instructionItem = document.createElement("li");

            instructionItem.textContent = data.results[i].instructions[index].display_text;

            instructionList.appendChild(instructionItem)
        }

        // Add if statement to remove canonical_id's that contain "compilation" (data.results[index].canonical_id != compilation)
    })
    .catch(err => {
        console.error(err);
    });

    // Movie api fetch request for movie card details
    fetch(`https://salty-mountain-68764.herokuapp.com/https://api.themoviedb.org/3/discover/movie?api_key=1f0c12a5a877dc629a002fa2c6169442&language=en-US&sort_by=popularity.desc&include_adult=false&page=10&with_genres=${genre}`, {
        })
        .then(response => {
            return response.json();
        })
        .then(data => {
            var i = Math.floor(Math.random() * data.results.length)
            console.log(data);

            movieTitle.textContent=data.results[i].title;
            console.log(data.results[i].title);

            releaseDate.textContent="Released on: " + data.results[i].release_date;
            console.log("Released on:  " + data.results[i].release_date);

            overview.textContent=data.results[i].overview;
            console.log(data.results[i].overview);

            var posterImgPath = data.results[i].poster_path

            moviePoster.src=`https://image.tmdb.org/t/p/w500${posterImgPath}`;
            console.log(data.results[i].poster_path);
        })
        .catch(err => {
            console.error(err);
        });
});

   
// Re-roll recipe api fetch request

$("#recipeReroll").click(randomRecipeFetch);

    function randomRecipeFetch() {
        localStorage.clear();
        ingredientList.innerHTML = "";
        instructionList.innerHTML = "";

    fetch(`https://salty-mountain-68764.herokuapp.com/https://tasty.p.rapidapi.com/recipes/list?from=0&size=100&tags=date_night`, {
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

        var i = Math.floor(Math.random() * data.results.length);
        
        checkForComp();

        // If statement to remove canonical_id's that contain "compilation" (data.results[index].canonical_id != compilation)
        function checkForComp() {
            var canonicalValue = data.results[i].canonical_id;
            console.log(canonicalValue);

        if (canonicalValue.includes("compilation")) {
            console.log('error: compilation of recipes');
            i = Math.floor(Math.random() * data.results.length);

            checkForComp();
            return i;
          };
        }

        recipeTitle.textContent=data.results[i].name;
        console.log(data.results[i].name);

        recipeImage.src=data.results[i].thumbnail_url;

        for (var index = 0; index < data.results[i].sections[0].components.length; index++) {
             
            var ingredientItem = document.createElement("li");

            ingredientItem.textContent=data.results[i].sections[0].components[index].raw_text;

            ingredientList.appendChild(ingredientItem)
        }

        for (var index = 0; index < data.results[i].instructions.length; index++) {
             
            var instructionItem = document.createElement("li");

            instructionItem.textContent = data.results[i].instructions[index].display_text;

            instructionList.appendChild(instructionItem)
        }
    })
    .catch(err => {
        console.error(err);
    });
}

// Re-roll movie api fetch request
$("#movieReroll").click(randomMovieFetch);

    function randomMovieFetch() {
        localStorage.clear();

    fetch(`https://salty-mountain-68764.herokuapp.com/https://api.themoviedb.org/3/discover/movie?api_key=1f0c12a5a877dc629a002fa2c6169442&language=en-US&sort_by=popularity.desc&include_adult=false&page=10`, {
        })
        .then(response => {
            return response.json();
        })
        .then(data => {
            var i = Math.floor(Math.random() * data.results.length)
            console.log(data);

            movieTitle.textContent=data.results[i].title;
            console.log(data.results[i].title);

            releaseDate.textContent="Released on: " + data.results[i].release_date;
            console.log("Released on:  " + data.results[i].release_date);

            overview.textContent=data.results[i].overview;
            console.log(data.results[i].overview);

            var posterImgPath = data.results[i].poster_path

            moviePoster.src=`https://image.tmdb.org/t/p/w500${posterImgPath}`;
            console.log(data.results[i].poster_path);
        })
        .catch(err => {
            console.error(err);
        });
};