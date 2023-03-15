const activities = [];

function addActivity(date, activity, duration) {
  const items = { date: date, activity: activity, duration: duration };
  activities.push(items);
  console.log(activities);
}

//addActivity();
addActivity("23/09/2023", "Youtube", 70);
addActivity("23/09/2023", "Youtube", 60);

function showStatus(activities) {
  let totalDuration = 0;
  const timeLimitInMinutes = 120;
  if (activities.length === 0) {
    console.log("Add some activities before calling showStatus");
  } else {
    activities.forEach((element) => {
      console.log(element.duration);
      totalDuration = totalDuration + element.duration;
    });
    console.log(
      `You have added ${activities.length} activities.They amount to ${totalDuration} min of usage`
    );

    if (totalDuration >= timeLimitInMinutes) {
      console.log("You have reached your limit, no more smartphoning for you!");
    } else {
      console.log(
        `You have added ${activities.length} activities.They amount to ${totalDuration} min of usage`
      );
    }
  }
}
showStatus(activities);
