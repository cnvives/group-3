// Netflix & Grill

// First HTML page: Main landing page
    // Will have a nav bar on top with links to about/contact info, socials, etc

    // Background images (split?) showing something related to a theater/movie on one side and food on the other

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
        // You shall use the TMDb logo to identify your use of the TMDb APIs.
        // You shall place the following notice prominently on your application: "This product uses the TMDb API but is not endorsed or certified by TMDb."
        // Any use of the TMDb logo in your application shall be less prominent than the logo or mark that primarily describes the application and your use of the TMDb logo shall not imply any endorsement by TMDb.

    // Footer with necessary info



// API fetching
// Tasty
// fetch("https://salty-mountain-68764.herokuapp.com/https://tasty.p.rapidapi.com/recipes/list?from=0&size=1&tags=under_30_minutes&q=chicken", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-key": "9db6727369mshcadc7a2e617b437p14279djsnff586e532c9e",
// 		"x-rapidapi-host": "tasty.p.rapidapi.com"
// 	}
// })
// .then(response => {
// 	return response.json();
// })
// .then(data => {
// 	console.log(data);
// })
// .catch(err => {
// 	console.error(err);
// });


// The Movie Database or IMDB alternative (RapidAPI)
// fetch("https://salty-mountain-68764.herokuapp.com/https://api.themoviedb.org/3/movie/550?api_key=1f0c12a5a877dc629a002fa2c6169442", {
// })
// .then(response => {
// 	return response.json();
// })
// .then(data => {
// 	console.log(data);
// })
// .catch(err => {
// 	console.error(err);
// });
