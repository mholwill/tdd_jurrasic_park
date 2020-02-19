const Park = function (name, ticketPrice, parkDinosaurs = []){
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.parkDinosaurs = parkDinosaurs;
}

Park.prototype.totalDinosaurs = function () {
  return this.parkDinosaurs.length;
};

Park.prototype.addDinosaur = function (dinosaur) {
  this.parkDinosaurs.push(dinosaur);
};

Park.prototype.removeDinosaur = function (dinosaur) {
  this.parkDinosaurs.pop(dinosaur)
  // Zsolts Solution:
  //indexOf is a method that helps find the index of the item int he array. USE SPLICE next time!
  // const indexOfDino = this.parkDinosaurs.indexOf(dinosaur);
  // this.parkDinosaurs.splice(indexOfDino, 1);
};

Park.prototype.mostPopularDinosaur = function () {
  let mostPopularDinosaur = this.parkDinosaurs[0];
  for (let dinosaur of this.parkDinosaurs) {
    if (mostPopularDinosaur.guestsAttractedPerDay < dinosaur.guestsAttractedPerDay) {
      mostPopularDinosaur = dinosaur;
    }
  }
  return mostPopularDinosaur;
};

Park.prototype.findBySpecies = function (species) {
  const speciesArray = [];
  for (let dinosaur of this.parkDinosaurs) {
  if (dinosaur.species === species) {
    speciesArray.push(dinosaur)
    }
  }
  return speciesArray;
};

Park.prototype.totalGuestsPerDay = function () {
  total = 0
  for (let dinosaur of this.parkDinosaurs) {
    total += dinosaur.guestsAttractedPerDay
  }
  return total
};

Park.prototype.totalGuestsPerYear = function () {
  let totalPerDay = this.totalGuestsPerDay();
  return totalPerYear = totalPerDay * 365;
};

Park.prototype.totalRevenuePerYear = function () {
  let totalPerYear = this.totalGuestsPerYear();
  return totalRevenue = totalPerYear * this.ticketPrice;
};


module.exports = Park;
