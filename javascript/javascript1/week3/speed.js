const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};
function findTravelTime(travelInformation) {
  const time = travelInformation.destinationDistance / travelInformation.speed;
  const hour = Math.floor(time);
  const minutes = Math.floor((time - hour) * 60);
  return `${hour} hours and ${minutes} minutes`;
}
const travelTime = findTravelTime(travelInformation);
console.log(travelTime);
