"use strict";

const numberOfFilms = +prompt('How many movies have you seen?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const lastMovieFirst = prompt('Name a movie you have seen lately', ''),
      lastMovieScoreFirst = prompt('How do you rate this movie?', ''),
      lastMovieSecond = prompt('Name a movie you have seen lately?', ''),
      lastMovieScoreSecond = prompt('How do you rate this movie?', '');

personalMovieDB.movies[lastMovieFirst] = lastMovieScoreFirst;
personalMovieDB.movies[lastMovieSecond] = lastMovieScoreSecond;

console.log(personalMovieDB);