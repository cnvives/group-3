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

// Footer with necessary info

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

    // Then save to local storage
    localStorage.setItem("ingredient", JSON.stringify(ingredInput));
    localStorage.setItem("genre", JSON.stringify(genreInput));

    location.replace(redirectURL);

});

// On indecisive button click, pass in random genre value and no ingredient value
$("#indecisiveBtn").click(function(){

    var ingredInput = "";

    var genreArray = ["28", "12", "16", "35", "80", "99", "18", "10751", "14", "36", "27", "10402", "9648", "10749", "878", "10770", "53", "10752", "37"];

    for (var i = 0; i < genreArray.length; i++) {
        var i = Math.floor(Math.random() * genreArray.length)
        var genreInput = genreArray[i];
        console.log(genreInput);
    }

    localStorage.setItem("genre", JSON.stringify(genreInput));
    localStorage.setItem("ingredient", JSON.stringify(ingredInput));

    location.replace(redirectURL);
});

// API fetching

// Using DOM manipulation
    // Add the associated images, descriptions, recipe ingredients/instructions, names to the various parts of the cards

// Re-rolling 
    // Maybe store the API call results in local storage
    // Retrieve another random object from the returned array 
    // Repeat the DOM manipulation with that new object?

// Expanded recipe instructions/ingredients list
    // Upon clicking on the initial recipe card, display another card/modal(?) with a more detailed list
