const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  const result = this.journeys.map(journey => {
    return journey.startLocation});
  return result;
};

Traveller.prototype.getJourneyEndLocations = function () {
  const result = this.journeys.map(journey => {
    return journey.endLocation});
  return result;
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  const result = this.journeys.filter(journey => journey.transport == transport);
  return result;
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  const result = this.journeys.filter(journey => journey.distance > minDistance);
  return result;
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  let totalDistance = this.journeys.map(journey => {
    return journey.distance
  });
  const result = totalDistance.reduce((runningDistance, journey) => runningDistance + journey);
  return result;
};

// OR

// const result = this.journeys.reduce((runningDistance, journey) => {
//   return runningDistance += journey.distance;
// }, 0);
// return result;
// }

Traveller.prototype.getUniqueModesOfTransport = function () {
  let resultArray = [];
  const results = this.journeys.map(journey => {
    return journey.transport
  });
  results.map(result => {
  if (resultArray.includes(result) == false) {
    resultArray.push(result)
      };
  });
  return resultArray;
  }


module.exports = Traveller;
