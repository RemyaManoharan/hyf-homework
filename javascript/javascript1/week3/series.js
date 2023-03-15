const seriesDurations = [
  {
    title: "Game of thrones",
    days: 2,
    hours: 1,
    minutes: 0,
  },
  {
    title: "Manifest",
    days: 1,
    hours: 19,
    minutes: 24,
  },
  {
    title: "The Wire",
    days: 1,
    hours: 12,
    minutes: 0,
  },
];

let totalTimeSpent = 0;
let percentTimes = [];
function findTimeSpentOnSeries(seriesDurations) {
  for (item of seriesDurations) {
    const timeSpent = item.days * 24 * 60 + item.hours * 24 * 60 + item.minutes;
    const avgHumanHour = 80 * 24 * 60 * 365;
    const percentTimeSpent = ((timeSpent / avgHumanHour) * 100).toFixed(3);
    percentTimes.push(percentTimeSpent);
    totalTimeSpent += +percentTimeSpent;
  }
}
findTimeSpentOnSeries(seriesDurations);
function logOutSeriesText() {
  for (let i = 0; i < seriesDurations.length; i++) {
    console.log(
      `${seriesDurations[i].title} took ${percentTimes[i]}% of my life`
    );
  }
  console.log(`In total that is ${totalTimeSpent} of my life`);
}
logOutSeriesText();
