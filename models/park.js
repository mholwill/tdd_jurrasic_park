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


module.exports = Park;
