// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    return moviesArray.map(movie => movie.director);
}

// Bonus: Iteration 1.1
function getUniqueDirectors(moviesArray) {
    const directors = moviesArray.map(movie => movie.director);
    return [...new Set(directors)];
  }
  

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    return moviesArray.filter(movie => 
    movie.director === 'Steven Spielberg' && 
    movie.genre.includes('Drama')).length;
}
// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) return 0;
    const totalScore = moviesArray.reduce((acc, movie) => {
      return acc + (movie.score || 0);
    }, 0);
    return parseFloat((totalScore / moviesArray.length).toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter(movie => movie.genre.includes('Drama'));
    if (dramaMovies.length === 0) return 0;
    const totalScore = dramaMovies.reduce((acc, movie) => {
      return acc + (movie.score || 0);
    }, 0);
    return parseFloat((totalScore / dramaMovies.length).toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const moviesCopy = [...moviesArray];

    // Ordenar la copia del array
    moviesCopy.sort((a, b) => {
      if (a.year === b.year) {
        return a.title.localeCompare(b.title); // Ordenar alfabéticamente por título si el año es el mismo
      }
      return a.year - b.year; // Ordenar por año
    });
  
    return moviesCopy; // Devolver la nueva matriz ordenada
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {

  const moviesCopy = [...moviesArray];

  // Extraer solo los títulos de las películas
  const titles = moviesCopy.map(movie => movie.title);

  // Ordenar los títulos alfabéticamente
  titles.sort((a, b) => a.localeCompare(b));

  // Devolver los primeros 20 títulos o todos si hay menos de 20
  return titles.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    return moviesArray.map(movie => {
        const durationParts = movie.duration.split(' '); // Dividir la duración en partes
        let minutes = 0;
    
        // Convertir cada parte de la duración a minutos
        durationParts.forEach(part => {
          if (part.includes('h')) {
            minutes += parseInt(part) * 60; // Convertir horas a minutos
          } else if (part.includes('min')) {
            minutes += parseInt(part); // Añadir minutos
          }
        });
    
        // Devolver un nuevo objeto de película con la duración en minutos
        return { ...movie, duration: minutes };
      });
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    if (moviesArray.length === 0) return null;

  const yearScores = moviesArray.reduce((acc, movie) => {
    if (!acc[movie.year]) {
      acc[movie.year] = { totalScore: 0, count: 0 };
    }
    acc[movie.year].totalScore += movie.score || 0;
    acc[movie.year].count += 1;
    return acc;
  }, {});

  let bestYear = null;
  let bestAvg = 0;

  for (const year in yearScores) {
    const avgScore = yearScores[year].totalScore / yearScores[year].count;
    if (avgScore > bestAvg) {
      bestAvg = avgScore;
      bestYear = year;
    } else if (avgScore === bestAvg && parseInt(year) < parseInt(bestYear)) {
      bestYear = year;
    }
  }

  return `The best year was ${bestYear} with an average score of ${bestAvg}`;
}
