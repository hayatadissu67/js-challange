// used them to separate the reult to make it readable
console.log(" ");
console.log("Q7");
//----------------------------------------------
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
