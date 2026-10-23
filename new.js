// question one

const students = [
  { name: "abel", score: 85, subject: "math" },
  { name: "sara", score: 42, subject: "math" },
  { name: "kalkidan", score: 91, subject: "math" },
  { name: "dawit", score: 67, subject: "math" },
];

function getGrade(score) {
  if (score >= 80) {
    return "A";
  } else if (score >= 60) {
    return "B";
  } else {
    return "f";
  }
}
const formatStudent = ({ name, score }) => {
  return `${name.toUpperCase()} scored ${score} Grade -> ${getGrade(score)}`;
};

const formattedStudents = students.map(formatStudent);

for (const students of formattedStudents) {
  console.log(students);
}

const passed = students.filter((students) => students.score >= 60);

console.log(`passed: ${passed.length} outof ${students.length}`);

const total = students.reduce((sum, students) => sum + students.score, 0);

let average = total / students.length;

console.log("class average:" + average);

const student = {
  name: "Marta",
  score: 78,
  subject: "Math",
};

const allStudents = [...students, student];
console.log("New class size after adding marta:" + allStudents.length);

//----------------------------------------------------------
console.log("end of question one ");
console.log("    ");
console.log("    ");

// question two

const cart = [
  { name: "apple", price: 10, quantity: 3 },
  { name: "bread", price: 25, quantity: 1 },
  { name: "milk", price: 18, quantity: 2 },
  { name: "chocolate", price: 55, quantity: 1 },
];

function itemTotal(item) {
  return item.price * item.quantity;
}

const formatItem = ({ name, price, quantity }) => {
  return `${name.toUpperCase()} x${quantity} = ${itemTotal({ price, quantity })} birr`;
};
const formattedItem = cart.map(formatItem);

for (const item of formattedItem) {
  console.log(item);
}

const expense = cart.filter((cart) => cart.price >= 20);
console.log(`Expensive items (over 20 birr): ${expense.length}`);

const totali = cart.reduce((sum, cart) => sum + cart.price * cart.quantity, 0);
let grandTotal = totali;
console.log(`Grand total: ${grandTotal} birr`);

if (totali > 100) {
  console.log("Free delivery unlocked!");
} else {
  console.log("Add more items for free delivery.");
}

const newItem = [{ name: "water", price: 8, quantity: 6 }];

const afterAddition = [...cart, newItem];
console.log(`Cart now has ${afterAddition.length} items`);

console.log("    ");
console.log("end of question two ");
console.log("    ");
console.log("    ");

// question three

const week = [
  { day: "Monday", temp: 21 },
  { day: "Tuesday", temp: 28 },
  { day: "Wednesday", temp: 31 },
  { day: "Thursday", temp: 19 },
  { day: "Friday", temp: 26 },
];

function describe(temp) {
  if (temp >= 30) {
    return "hot";
  } else if (temp >= 25) {
    return "warm";
  } else {
    return "cool";
  }
}

const formatDay = ({ day, temp }) =>
  `${day.toUpperCase()}: ${temp}°C ( ${describe(temp)})`;

const formattedDay = week.map(formatDay);
for (const week of formattedDay) {
  console.log(week);
}

const warmer = week.filter((week) => week.temp >= 25);
console.log(`Warm or hot days: ${warmer.length}`);

const totalTemp = week.reduce((sum, week) => sum + week.temp, 0);
let totalTemprature = totalTemp;
console.log(`Average temperature: ${totalTemprature}°C`);

const fullWeek = [{ day: "Saturday", temp: 24 }];

const full = [...week, fullWeek];

console.log(`Days recorded after adding Saturday: ${full.length}`);
//----------------------------------------------------
console.log("    ");
console.log("end of question three ");
console.log("    ");
console.log("    ");

// qustion four

const todos = [
  { task: "wash dishes", done: true, priority: "low" },
  { task: "do homework", done: false, priority: "high" },
  { task: "call mom", done: true, priority: "high" },
  { task: "buy groceries", done: false, priority: "low" },
  { task: "study javascript", done: false, priority: "high" },
];

function statusIcon(done) {
  if (done === true) {
    return "[x]";
  } else {
    return "[ ]";
  }
}

const formatTodo = ({ task, done, priority }) => {
  return `${statusIcon(done)} ${task.toUpperCase()} (${priority})`;
};

const formattedTo = todos.map(formatTodo);

for (const todos of formattedTo) {
  console.log(todos);
}

const notDone = todos.filter((todos) => todos.done === false);
console.log(`Tasks remaining: ${notDone.length}`);

const totalHiTasks = todos.reduce(
  (sum, todos) => sum + (todos.priority === "high" ? 1 : 0),
  0,
);
let totalHighPPriority = totalHiTasks;
console.log(`High priority tasks: ${totalHighPPriority}`);

const newTask = [{ task: "sleep early", done: false, priority: "low" }];
const afterAdding = [...todos, newTask];
console.log(`Total tasks after adding one more: ${afterAdding.length}`);

//--------------------------------------------------------------
console.log("    ");
console.log("end of question four ");
console.log("    ");
console.log("    ");

// question five

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

//---------------------------------------------------------
console.log("    ");
console.log("end of question five ");
console.log("    ");
console.log("    ");

// question six

const books = [
  { title: "atomic habits", pages: 320, available: true },
  { title: "clean code", pages: 464, available: false },
  { title: "the alchemist", pages: 208, available: true },
  { title: "deep work", pages: 304, available: false },
];

function availability(available) {
  if (available === true) {
    return "on shelf";
  } else {
    return "borrowed";
  }
}

const formatBook = ({ title, pages, available }) => {
  return `${title.toUpperCase()} (${pages}pages-) ${availability(available)} `;
};

const formatedBook = books.map(formatBook);
for (const books of formatedBook) {
  console.log(books);
}
const availableBooks = books.filter((books) => books.available === true);
console.log(`Available books: ${availableBooks.length}`);

const totalPages = books.reduce(
  (sum, books) => sum + (books.available ? 0 : 1),
  0,
);
let totalPa = totalPages;
console.log(`Total pages in library: ${totalPa}`);

const hasCleanCode = formatedBook.some((books) => books.includes("CLEAN CODE"));
console.log(`Clean Code is in the catalog: ${hasCleanCode}`);

const newBook = [{ title: "1984", pages: 328, available: true }];

const newBookList = [...books, newBook];
console.log(`Catalog size after adding 1984: ${newBookList.length}`);

//---------------------------------------------------------------
console.log("    ");
console.log("end of question six ");
console.log("    ");
console.log("    ");

// qustion seven

const playList = [
  { title: "tizita", artist: "mulatu", seconds: 240 },
  { title: "perfect", artist: "Ed sheeran", seconds: 263 },
  { title: "blinding light", artist: "The weekend", seconds: 200 },
  { title: "beliver", artist: "Imagine Dragon", seconds: 204 },
];

function lengthLabel(seconds) {
  if (seconds >= 240) {
    return "long";
  } else {
    return "short";
  }
}
const formatSong = ({ title, artist, seconds }) => {
  return `${title.toUpperCase()} by ${artist} (${seconds}s, long)`;
};
const formattedMusic = playList.map(formatSong);
for (const playList of formattedMusic) {
  console.log(playList);
}

const shortSongs = playList.filter((playList) => playList.seconds < 240);
console.log(`Short songs: ${shortSongs.length}`);

const totalSeconds = playList.reduce(
  (sum, playList) => sum + playList.seconds,
  0,
);
let totalSec = totalSeconds / 60;
let rounded = Math.round(totalSec);
console.log(`Total playlist length: ${rounded}`);

const newSong = [{ title: "halo", artist: "Beyonce", seconds: 261 }];

const afterUpdate = [...playList, newSong];
console.log(`Songs after adding Halo: ${afterUpdate.length}`);

//---------------------------------------------------------------
console.log("    ");
console.log("end of question seven ");
console.log("    ");
console.log("    ");

// qustion eight

const menu = [
  { dish: "doro wat", price: 180, spicy: true },
  { dish: "pasta", price: 120, spicy: false },
  { dish: "kitfo", price: 200, spicy: true },
  { dish: "salad", price: 90, spicy: false },
];

function spicyLabel(spicy) {
  if (spicy === true) {
    return "🌶 spicy";
  } else {
    return "mild";
  }
}

const formatDish = ({ dish, price, spicy }) => {
  return `${dish.toUpperCase()} - ${price} ${spicyLabel(spicy)}`;
};
const formattedDish = menu.map(formatDish);
for (const menu of formattedDish) {
  console.log(menu);
}

const spicyDishes = menu.filter((menu) => menu.spicy === true);
console.log(`Spicy dishes: ${spicyDishes.length}`);

const totalPrice = menu.reduce((sum, menu) => sum + menu.price, 0);
let totalPr = totalPrice;
console.log(`One of everything: ${totalPr}`);

if (totalPr > 500) {
  console.log("This is a feast!");
} else {
  console.log("A reasonable meal.");
}

const newDish = [{ dish: "tibs", price: 190, spicy: true }];

const fullMenu = [...menu, newDish];
console.log(`Menu now has ${fullMenu.length} dishes`);

//---------------------------------------------------------------
console.log("    ");
console.log("end of question eight ");
console.log("    ");
console.log("    ");

// qustion nine

const log = [
  { day: "mon", steps: 8200 },
  { day: "tue", steps: 4500 },
  { day: "wed", steps: 10100 },
  { day: "thu", steps: 6200 },
  { day: "fri", steps: 12000 },
];

function goalCheck(steps) {
  if (steps >= 8000) {
    return "goal met";
  } else {
    return "below goal";
  }
}

const formatEntry = ({ day, steps }) => {
  return ` ${day.toUpperCase()} : ${steps} steps (${goalCheck(steps)})`;
};
const formattedEntry = log.map(formatEntry);
for (const log of formattedEntry) {
  console.log(log);
}

const goalMet = log.filter((log) => log.steps >= 8000);
console.log(`Goal met on  ${goalMet.length} days`);

const totalSteps = log.reduce((sum, log) => sum + log.steps, 0);
let totalSt = totalSteps / 5;
console.log(`Daily average: ${totalSt}`);

const newDay = [{ day: "sat", steps: 9500 }];

const fullLog = [...log, newDay];
console.log(`Logged days after Saturday: ${fullLog.length}`);

//---------------------------------------------------------------
console.log("    ");
console.log("end of question nine ");
console.log("    ");
console.log("    ");

// qustion ten
const transactions = [
  { label: "salary", amount: 5000, type: "deposit" },
  { label: "rent", amount: -2000, type: "withdrawal" },
  { label: "groceries", amount: -750, type: "withdrawal" },
  { label: "freelance gig", amount: 1200, type: "deposit" },
  { label: "internet bill", amount: -450, type: "withdrawal" },
];

function direction(amount) {
  if (amount > 0) {
    return "IN";
  } else {
    return "OUT";
  }
}

const formatTx = ({ label, amount }) => {
  return ` ${label.toUpperCase()} : ${amount} birr (${direction(amount)})`;
};

const formattedTx = transactions.map(formatTx);
for (const transactions of formattedTx) {
  console.log(transactions);
}

const deposit = transactions.filter(
  (transactions) => transactions.type.includes("deposit"),
);
console.log(`Deposits:  ${deposit.length} `);

const finalBal = transactions.reduce((sum, transactions) => sum + transactions.amount, 0)
let finalBallance = finalBal;
console.log(`Final balance: ${finalBallance}`)

if (finalBallance > 0) {
  console.log("Account is healthy.");
} else {
  console.log("Warning: overdrawn!");
}

const newTrans = [{ label: "coffee", amount: -80, type: "withdrawal" }];

const fullTrans = [...transactions, newTrans]
console.log(`Transactions after adding coffee: ${fullTrans.length}`);

