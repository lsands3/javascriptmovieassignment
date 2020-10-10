let allMovies = [];

//Movie object contructor
function Movie(title, rating, havewatched) {
    this.title = title;
    this.rating = rating;
    this.havewatched = havewatched;
}

//add a movie OBJECT to the allMovies array
function addMovie (movie) {
    allMovies.push(movie);
    console.log("A new movie is added");

}

//iterate through all elements of allMovies array
//print out to console in a correct format
//print out the total number of movies in allMovies array
function printMovies () {
    console.log("Printing all movies...");
    for (i = 0; i < allMovies.length; i++) { 
        console.log(allMovies[i].title + ", rating of " + allMovies[i].rating + ", havewatched: " + allMovies[i].havewatched);
    }
    console.log("You have " + allMovies.length + " movies in total");
}

//print out to console, only the movies that has a rating higher than rating(argument)
//print out the total number of matches
function highRatings (rating) {
    var newCount = 0;
    console.log("printing movie that has a higher rating than " + rating);
    for (var i = 0; i < allMovies.length; i++) {
        if (allMovies[i].rating > rating) {
            console.log(allMovies[i].title + " has a rating of " + allMovies[i].rating);
            newCount++;
        }
    }
    console.log("In total, there are " + newCount + " matches");

}

//Toggle the 'haveWatched' property of the specified movie 
function changeWatched (title) {
    console.log("changing the status of the movie...");
    for (var i = 0; i < allMovies.length; i++) {
        if (allMovies[i].title == title) {
            if (allMovies[i].havewatched == "true") {
                allMovies[i].havewatched == "false";
            } else if (allMovies[i].havewatched == "false") {
                allMovies[i].havewatched == "true";
            }
        }
    }
  
}



////////////////////////////////////////////////////////////
//Test code - DO NOT DELETE OR EDIT
let x = new Movie("Spiderman", 3, "true");
let y = new Movie("Citizen Kane", 4, "false");
let z = new Movie("Zootopia", 4.5, "true");

allMovies.push(x,y,z);

console.log("----------------");
console.log("running program......");
console.log("----------------");
printMovies();


let movie1 = new Movie("Parasite", 2, "false");


console.log("----------------");
addMovie(movie1);
console.log("----------------");



changeWatched("Spiderman");
console.log("----------------");

printMovies();
console.log("----------------");

changeWatched("Spiderman");
console.log("----------------");

printMovies();
console.log("----------------");

highRatings(3.5);