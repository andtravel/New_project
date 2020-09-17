"use strict";
const numberOfFilms = +prompt('Сколько фильмов Вы уже просмотрели?', '');

let personalMovieDB = {
        count: numberOfFilms,
        movies: {
            
        },
        actors: {

        },
        genres: [],
        privat: false
};

const a = prompt('1) Один из последних просмотренных фильмов?', ''),
      b = prompt('1) На сколько оцените его?', ''),
      c = prompt('2) Один из последних просмотренных фильмов?', ''),
      d = prompt('2) На сколько оцените его?', '');
personalMovieDB.movies[a] = b,
personalMovieDB.movies[c] = d;
console.log(personalMovieDB);
