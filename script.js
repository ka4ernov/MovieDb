"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
    start: function() {
        personalMovieDB.count = +prompt('How many movies have you seen?', '');
        
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('How many movies have you seen?', '');
        }
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            alert('You have seen not enough movies');
        } else if (personalMovieDB.count > 30) {
            alert('You are real movies fan');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
            alert('You are classic viewer');
        } else {
            alert('Error');
        }
    },
    rememberMyFilms: function() {
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
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
        let personalMovieDBGenres = prompt(`Name your favourite genre of movies number ${i}`);
        
        if (personalMovieDBGenres === null || personalMovieDBGenres === '') {
            console.log('Data is incorrect');
            i--;
        } else {
            personalMovieDB.genres[i-1] = personalMovieDBGenres;
        }     
    }  
    personalMovieDB.genres.forEach((item, i) => {
        console.log(`Your favourite genre number ${i + 1} is ${item}`);
    });
    }
};

personalMovieDB.start();

personalMovieDB.detectPersonalLevel();

personalMovieDB.rememberMyFilms();

personalMovieDB.toggleVisibleMyDB();

personalMovieDB.showMyDB(personalMovieDB.privat);

personalMovieDB.writeYourGenres();