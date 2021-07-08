// Netflix & Grill

// First HTML page: Main landing page
// Will have a nav bar on top with links to about/contact info, socials, etc

// Background images (split?) showing something related to a theater/movie on one side and food on the other
// At least two primary text inputs

// At least two primary text inputs (with tooltips to describe )

// At least two primary text inputs (with tooltips to describe )

// Movie genre
// Recipe ingredient or style

// Try to have a button that then will return a random combo?

// The two primary inputs will need to be saved to local storage, and then those can be accessed by the second html page to display the movie & recipe info

// Footer with necessary info

// Second HTML page: Movie and Recipe cards/info
// Two cards, each will show title, image, maybe try for description/ingredients

// One for the movie result
// Should be to expand/open up a modal to show more details (cast, etc)
// One for the recipe result
// Should be to expand/open up a modal to show more details (list all steps and ingredients)

// Need to access the local storage to grab the search input and make the API requests

// We will need to go through the API requests and determine what info is obtainable/usable

// Then append that usable info to the respective cards on the page

// Ability to re-roll search results
// First try to display the next result from the API object array
// If successful, try to randomize the re-roll result

// Reference the API's as source of data

// Footer with necessary info

// console.log("connected");

// Reference the API's as source of data
// You shall use the TMDb logo to identify your use of the TMDb APIs.
// You shall place the following notice prominently on your application: "This product uses the TMDb API but is not endorsed or certified by TMDb."
// Any use of the TMDb logo in your application shall be less prominent than the logo or mark that primarily describes the application and your use of the TMDb logo shall not imply any endorsement by TMDb.


// Local storage
    // saves the search inputs from the first/landing page in local storage
        // Then redirect to the second page

    // Those saved inputs would then be accessed by the second page 
        // Then the API call would run


// Reference the API's as source of data
// You shall use the TMDb logo to identify your use of the TMDb APIs.
// You shall place the following notice prominently on your application: "This product uses the TMDb API but is not endorsed or certified by TMDb."
// Any use of the TMDb logo in your application shall be less prominent than the logo or mark that primarily describes the application and your use of the TMDb logo shall not imply any endorsement by TMDb.

// Footer with necessary info


var redirectURL = './secondpage.html'

// On search button click, grab input and select values
$("#searchBtn").click(function(){
    var ingredInput = $("#searchInput").val();
    var genreInput = $("#genreSel").val();
    // console.log(ingredInput);
    // console.log(genreInput);

    // Then save to local storage
    localStorage.setItem("ingredient", JSON.stringify(ingredInput));
    localStorage.setItem("genre", JSON.stringify(genreInput));

    location.replace(redirectURL);

});


// API fetching (commented out to prevent unnecessary fetch requests)

// Tasty

    // Search for recipes that can be made in under 30 minutes, and will pass in the searched ingredient pulled from input


    // var ingredient = JSON.parse(localStorage.getItem("ingredient"));
    // console.log(ingredient);
    // var genre = JSON.parse(localStorage.getItem("genre"));
    // console.log(genre);


    // fetch(`https://salty-mountain-68764.herokuapp.com/https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes&q=${ingredient}`, {
    //     "method": "GET",
    //     "headers": {
    //         "x-rapidapi-key": "9db6727369mshcadc7a2e617b437p14279djsnff586e532c9e",
    //         "x-rapidapi-host": "tasty.p.rapidapi.com"
    //     }
    // })
    // .then(response => {
    //     return response.json();
    // })
    // .then(data => {
    //     console.log(data);

    //     // do all of the fun stuff

    // })
    // .catch(err => {
    //     console.error(err);
    // });


// The Movie Database or IMDB alternative (RapidAPI)

    // Genre variables
    // var action = actionSel.value (28);
    // var adventure = adventureSel.value (12);
    // var animation = animationSel.value (16);
    // var comedy = comedySel.value (35);
    // var crime = crimeSel.value (80);
    // var documentary = documentarySel.value (99);
    // var drama = dramaSel.value (18);
    // var family = familySel.value (10751);
    // var fantasy = fantasySel.value (14);
    // var history = historySel.value (36);
    // var horror = horrorSel.value (27);
    // var music = musicSel.value (10402);
    // var mystery = mysterySel.value (9648);
    // var romance = romanceSel.value (10749);
    // var scienceFiction = scienceFictionSel.value (878);
    // var tvMovie = tvMovieSel.value (10770);
    // var thriller = thriller.value (53);
    // var war = warSel.value (10752);
    // var western = westernSel.value (37);

    // To search by genre, we just need to change the last number of this fetch URL (after genres=...")

    // fetch(`https://salty-mountain-68764.herokuapp.com/https://api.themoviedb.org/3/discover/movie?api_key=1f0c12a5a877dc629a002fa2c6169442&language=en-US&sort_by=popularity.desc&include_adult=false&page=1&with_genres=${genre}`, {
    // })
    // .then(response => {
    //     return response.json();
    // })
    // .then(data => {
    //     console.log(data);

    //     // do all of the fun stuff

    // })
    // .catch(err => {
    //     console.error(err);
    // });


// Using DOM manipulation
    // Add the associated images, descriptions, recipe ingredients/instructions, names to the various parts of the cards

// Re-rolling 
    // Maybe store the API call results in local storage
    // Retrieve another random object from the returned array 
    // Repeat the DOM manipulation with that new object?

// Expanded recipe instructions/ingredients list
    // Upon clicking on the initial recipe card, display another card/modal(?) with a more detailed list