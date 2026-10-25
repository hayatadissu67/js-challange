// used them to separate the reult to make it readable
console.log(" ");
console.log("Q5");
//----------------------------------------------
const movies = [
  {
    title: "inception",
    rating: 9,
    minutes: 148,
  },
  {
    title: "cars",
    rating: 7,
    minutes: 117,
  },
  {
    title: "titanic",
    rating: 8,
    minutes: 195,
  },
  {
    title: "shrek",
    rating: 6,
    minutes: 90,
  },
];

function verdict(rating) {
  if (rating >= 8) {
    return "must watch";
  } else if (rating >= 7) {
    return "good";
  } else {
    return "skip";
  }
}

const formatMovie = ({ title, rating }) => {
  return `${title.toUpperCase()} -${rating}/10 - ${verdict(rating)} `;
};

const formatedMovie = movies.map(formatMovie);
for (const movies of formatedMovie) {
  console.log(movies);
}

const shortMovies = movies.filter((todos) => todos.minutes < 120);
console.log(`Short movies (under 120 min): ${shortMovies.length}`);

const totalRunTime = movies.reduce((sum, movies) => sum + movies.minutes, 0);
let totalRun = totalRunTime;
console.log(`Total runtime: ${totalRun}`);

const newMovie = [{ title: "coco", rating: 8, minutes: 105 }];

const finalMovieList = [...movies, newMovie];
console.log(`Watchlist size after adding Coco: ${finalMovieList.length}`);
