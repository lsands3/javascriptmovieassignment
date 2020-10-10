let allMovies = [];

//Movie object contructor
function Movie(title, rating, havewatched) {
 
}

//add a movie OBJECT to the allMovies array
function addMovie (movie) {

}

//iterate through all elements of allMovies array
//print out to console in a correct format
//print out the total number of movies in allMovies array
function printMovies () {
    for (i = 0; i < array.length; i++) { 
        console.log(array[i]); 
    }
}

//print out to console, only the movies that has a rating higher than rating(argument)
//print out the total number of matches
function highRatings (rating) {
    var newCount = 0;
    console.log("Printing movies that have a higher rating than " + rating);
    for (var i = 0; i < allMovies.length; i++) {
        if (allMovies[i].rating > rating) {
            console.log(i);
            newCount++;
        }
    }
    console.log(newCount);

}

//Toggle the 'haveWatched' property of the specified movie 
function changeWatched (title) {
    console.log("Changing the status of the movie...");
    for (var i = 0; i < allMovies.length; i++) {
        if (allMovies[i].title == title) {
            if (allMovies[i].havewatched == "true") {
                allMovies[i].havewatched == "false";
            } else {
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