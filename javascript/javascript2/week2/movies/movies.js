import { movies } from "./moviesArray.js";
// array of movies with short title
const shortTitleMovies = movies.filter((movie) => {
  return movie.title.length <= 5;
});
console.log(shortTitleMovies);
// array of movie titles with long movie title
const longMovieTitles = movies
  .filter((movie) => {
    return movie.title.length >= 10;
  })
  .map((movie) => {
    return movie.title;
  });

console.log(longMovieTitles);

// number of movies made between 1980-1989

const numberOfMovies = movies.filter((movie) => {
  return movie.year >= 1980 && movie.year <= 1989;
});
console.log(numberOfMovies.length);

// A new array that has an extra key called tag based on rating
// rating: Good (>= 7), Average (>= 4 and < 7), Bad (< 4)
const moviesWithRatingTag = movies.map((movie) => {
  let tag = "";
  if (movie.rating >= 7) {
    tag = "Good";
  } else if (movie.rating >= 4 && movie.rating < 7) {
    tag = "Average";
  } else if (movie.rating < 4) {
    tag = "Bad";
  }
  return {
    ...movie,
    tag,
  };
});
console.log(moviesWithRatingTag);

//Filter the movies array to only contain the movies rated higher
// than 6, map the movies array to only the rating of the
//movies.

const movieRatingArray = movies
  .filter((movie) => {
    return movie.rating > 6;
  })
  .map((movie) => {
    return movie.rating;
  });
console.log("Movies with rating greater than 6");
console.log(movieRatingArray);

//Count the total number of movies with key word Surfer,
//Alien or Benjamin.
const searchKeys = ["Surfer", "Alien", "Benjamin"];
const searchValue = searchKeys.map((key) => {
  return key.toLowerCase();
});

const moviesWithKeyWord = movies
  .map((movie) => {
    const movieName = movie.title;
    return movieName;
  })
  .filter((item) =>
    searchValue.some((word) => item.toLowerCase().includes(word))
  ).length;

console.log("The count of movies with keyword ", moviesWithKeyWord);
