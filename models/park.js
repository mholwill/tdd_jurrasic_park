const Park = function (name, ticketPrice){
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.collectionOfDinosaurs = [];
}

Park.prototype.totalDinosaurs = function () {
  return this.collectionOfDinosaurs.length;
};

Park.prototype.addDinosaur = function (dinosaur) {
  this.collectionOfDinosaurs.push(dinosaur);
};

Park.prototype.removeDinosaur = function (dinosaur) {
  this.collectionOfDinosaurs.pop(dinosaur)
};

Park.prototype.mostPopularDinosaur = function () {
  this.collectionOfDinosaurs.sort((a,b) =>
  (a.guestsAttractedPerDay > b.guestsAttractedPerDay) ? -1 : 1);
  return this.collectionOfDinosaurs[0];
};

Park.prototype.findBySpecies = function (species) {
  speciesArray = [];
  for (dinosaur of this.collectionOfDinosaurs) {
  if (dinosaur.species === species) {
      speciesArray.push(dinosaur)
    }
  return speciesArray
  };
};

Park.prototype.totalGuestsPerDay = function () {
  total = 0
  for (let dinosaur of this.collectionOfDinosaurs) {
    total += dinosaur.guestsAttractedPerDay
  }
  return total
};

Park.prototype.totalGuestsPerYear = function () {
  totalPerDay = this.totalGuestsPerDay();
  return totalPerYear = totalPerDay * 365;
};

Park.prototype.totalRevenuePerYear = function () {
  let totalPerYear = this.totalGuestsPerYear();
  return totalRevenue = totalPerYear * this.ticketPrice;
};


module.exports = Park;
