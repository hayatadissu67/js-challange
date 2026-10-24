const classes = [
  {
    name: "yoga",
    hour: 9,
    capacity: 20,
    booked: 18,
  },
  {
    name: "spin",
    hour: 18,
    capacity: 15,
    booked: 15,
  },
  {
    name: "pilates",
    hour: 12,
    capacity: 12,
    booked: 5,
  },
  {
    name: "boxing",
    hour: 7,
    capacity:10,
    booked: 9,
  },
];

function slot2(hour){
     if (hour < 12) {
       return "morning";
     } else if (hour < 17) {
       return "afternoon";
     } else {
       ("evening");
     }
}

const seatsLeft = ({name, hour, capacity, booked}) => capacity - booked;

const format4 = (cls) => {
   const left=  seatsLeft(cls)
  const status = left === 0 ? "FULL" : `${left} seats`;
  return `${cls.name.toUpperCase()} (${slot2(cls.hour)}) - ${status}`;
} 
const formatted4 = classes.map(format4)
for (const classes of formatted4) {
    console.log(classes)
}

const leftSeat = classes.filter((classItem)=> seatsLeft(classItem) > 0)
console.log(`Classes with space: ${leftSeat.length}`)

const classfull = classes.some((classes)=> seatsLeft(classes))
console.log(`Any full classes: ${classfull}`);

const everyCl = classes.every((classes) => classes.booked >=5)
console.log(`Every class has 5+ booked: ${everyCl}`);

const total4 = classes.reduce((sum, classes)=> sum + classes.booked, 0)
console.log(`Total bookings: ${total4}`);

const firstFull = classes.find((classes)=> seatsLeft(classes) === 0)
console.log(`First full class: ${firstFull?.name ?? "none"}`);