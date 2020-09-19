"use strict";
const numberOfFilms = +prompt('Сколько фильмов Вы уже просмотрели?', '');

let personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false
};

for (let i = 1; i < 3; i++) {
console.log(i);
const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = +prompt('На сколько оцените его?', '');
       
      if (a !== '' && a != null && b !== '' && b != null && a.length < 50) {
           personalMovieDB.movies[a] = b;
           console.log('OK');
    } else {
        console.log('Error');
        i--;
        console.log('i= '+ i +' Try again');
      }
     
}

console.log(personalMovieDB);

if (personalMovieDB.count < 10) {
    alert('Просмотрено довольно мало фильмов');
} else if ((personalMovieDB.count > 10) && (personalMovieDB.count <= 30)) {
    alert('Вы классический зритель');
} else if (personalMovieDB.count > 30) {
    alert ('Вы киноман');
} else {
    alert('Произошла ошибка');
}