const activities = [];

function addActivity(activity, duration) {
  const items = {
    date: new Date().toLocaleDateString("en-GB"),
    activity: activity,
    duration: duration,
  };
  activities.push(items);
  console.log(activities);
}

addActivity("Youtube", 20);
addActivity("Instagram", 10);
addActivity("NetFlix", 30);
addActivity("Story-App", 40);

function showStatus(activities, date) {
  let totalDuration = 0;
  let activityCount = 0;
  const timeLimitInMinutes = 120;
  if (activities.length === 0) {
    console.log("Add some activities before calling showStatus");
  } else {
    activities.forEach((element) => {
      totalDuration = totalDuration + element.duration;

      if (element.date === date) {
        activityCount++;
      }
    });
    console.log(
      `The number of activities on given ${date} is ${activityCount}`
    );
    console.log(
      `You have added ${activities.length} activities.They amount to ${totalDuration} min of usage`
    );
  }
}
showStatus(activities, "15/03/2023");

function findMostSpentActivity(activities) {
  let maxtime = 0;
  let mostSpentActivity = " ";
  activities.forEach((element) => {
    if (element.duration > maxtime) {
      maxtime = element.duration;
      mostSpentActivity = element.activity;
    }
  });
  console.log(
    `The most spent activity is ${mostSpentActivity} with time ${maxtime} minutes.`
  );
}
findMostSpentActivity(activities);
