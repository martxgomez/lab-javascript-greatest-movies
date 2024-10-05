// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const directorsArray = moviesArray.map((movies) => {
    return movies.director;
  });
  return directorsArray;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const SpielbergDramaMovies = moviesArray.filter((movie) => {
    return (
      movie.genre.includes("Drama") && movie.director === "Steven Spielberg"
    );
  });
  return SpielbergDramaMovies.length;
}

// const movies1 = [
//   {
//     title: "The Shawshank Redemption",
//     year: 1994,
//     director: "Frank Darabont",
//     duration: "2h 22min",
//     genre: ["Crime", "Drama"],
//     score: ""
//   },
//   {
//     title: "The Godfather",
//     year: 1972,
//     director: "Francis Ford Coppola",
//     duration: "2h 55min",
//     genre: ["Crime", "Drama"],
//     score: 9.2,
//   },
//   {
//     title: "The Godfather: Part II",
//     year: 1974,
//     director: "Francis Ford Coppola",
//     duration: "3h 22min",
//     genre: ["Crime", "Drama"],
//     score: 9,
//   },
//   {
//     title: "The Dark Knight",
//     year: 2008,
//     director: "Christopher Nolan",
//     duration: "2h 32min",
//     genre: ["Action", "Crime", "Drama", "Thriller"],
//     score: 9,
//   },
// ];

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }
  const filteredMoviesScore = moviesArray.filter((movie) => {
    return movie.score;
  });
  const totalScore = filteredMoviesScore.reduce((acc, cur) => {
    return acc + cur.score;
  }, 0);

  const scoreAverage = totalScore / filteredMoviesScore.length;
  const scoreFixered = Number(scoreAverage.toFixed(2));
  console.log(scoreAverage);
  console.log(scoreFixered);

  return scoreFixered;
}

scoresAverage(movies1);

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaArrays = moviesArray.filter((movie) => {
    return movie.genre.includes("Drama");
  });

  const dramaMoviesAverage = scoresAverage(dramaArrays);

  return dramaMoviesAverage;
}



// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
