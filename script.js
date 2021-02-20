"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('How many movies have you seen?', '');
    
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('How many movies have you seen?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert('You have seen not enough movies');
    } else if (personalMovieDB.count > 30) {
        alert('You are real movies fan');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        alert('You are classic viewer');
    } else {
        alert('Error');
    }
}

detectPersonalLevel();

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const lastMovieFirst = prompt('Name a movie you have seen lately', ''),
              lastMovieScoreFirst = prompt('How do you rate this movie?', '');
    
        if (lastMovieFirst != null && lastMovieScoreFirst != null && lastMovieFirst != '' && lastMovieScoreFirst != '' && lastMovieFirst.length < 50) {
            personalMovieDB.movies[lastMovieFirst] = lastMovieScoreFirst;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }      
    }
}

rememberMyFilms();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i-1] = prompt(`Your favourite genre number ${i}`);
    }
}

writeYourGenres();