function getEventWeekday(number) {
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const date = new Date();
  let day = date.getDay();
  console.log(`Today is ${weekday[day]}`);

  let eventDate = day + (number % 7);
  // if eventdate is greater than 7,again divide by 7
  if (eventDate > 7) {
    let neweventDate = eventDate % 7;
    console.log(
      `Today is ${weekday[day]} and the event is in ${number} days. Therefore the event will be held on a ${weekday[neweventDate]}.`
    );
  } else {
    console.log(
      `Today is ${weekday[day]} and the event is in ${number} days. Therefore the event will be held on a ${weekday[eventDate]}.`
    );
  }
}
getEventWeekday(15);
