"use strict";
let numberOfFilms; 
function start() {
    numberOfFilms = +prompt('Сколько фильмов Вы уже просмотрели?', '');

   while (numberOfFilms === "" || typeof(numberOfFilms) == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('Сколько фильмов Вы уже просмотрели?', '');
    }
}

start();

let personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false
};

function rememberMyFilms(){
    for (let i = 1; i < 3; i++) {
        console.log(i);
        const a = prompt('Один из последних просмотренных фильмов?', ''),
              b = +prompt('На сколько оцените его?', '');
               
              if (a !== '' && a != null && b !== '' && b != null && a.length < 50 && !isNaN(b)) {
                   personalMovieDB.movies[a] = b;
                   console.log('OK');
            } else {
                console.log('Error');
                i--;
                console.log('i= '+ i +' Try again');
              }
             
        }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert('Просмотрено довольно мало фильмов');
    } else if ((personalMovieDB.count > 10) && (personalMovieDB.count <= 30)) {
        alert('Вы классический зритель');
    } else if (personalMovieDB.count > 30) {
        alert ('Вы киноман');
    } else {
        alert('Произошла ошибка');
    }
}

detectPersonalLevel();

function showMyDB() {
   if (personalMovieDB.privat === false) { console.log(personalMovieDB);}
}

showMyDB();

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`, '');
    }
}
writeYourGenres();
console.log(personalMovieDB.genres);