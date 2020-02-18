const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let dinosaur1;
  let dinosaur2;
  let dinosaur3;
  let dinosaur4
  let dinosaurs
  let park;

  beforeEach(function () {
    dinosaur1 = new Dinosaur('t-rex', 'carnivore', 50)
    dinosaur2 = new Dinosaur('stegosaurus', 'herbivore', 30)
    dinosaur3 = new Dinosaur('velociraptor', 'carnivore', 60)
    dinosaur4 = new Dinosaur('birdy', 'carnivore', 10)
    dinosaurs = [dinosaur1, dinosaur2, dinosaur3];
    park = new Park('Jurassic Park', 25, dinosaurs);
  });

  it('should have a name', function(){
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic Park');
  });

  it('should have a ticket price', function(){
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 25);
  });

  it('should have a collection of dinosaurs', function(){
    const actual = park.totalDinosaurs();
    assert.deepStrictEqual(actual, 3)
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.addDinosaur(dinosaur4);
    const actual = park.totalDinosaurs();
    assert.deepStrictEqual(actual, 4);
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.removeDinosaur(dinosaur1);
    const actual = park.totalDinosaurs();
    assert.deepStrictEqual(actual, 2);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    const actual = park.mostPopularDinosaur();
    assert.strictEqual(actual, dinosaur3)
  });

  it('should be able to find all dinosaurs of a particular species', function(){
    const actual = park.findBySpecies('t-rex');
    assert.deepStrictEqual(actual, [dinosaur1]);
  });

  it('should be able to calculate the total number of visitors per day', function(){
    const actual = park.totalGuestsPerDay();
    assert.strictEqual(actual, 140);
  });

  it('should be able to calculate the total number of visitors per year', function(){
    const actual = park.totalGuestsPerYear();
    assert.strictEqual(actual, 51100)
  });

  it('should be able to calculate total revenue for one year', function(){
    const actual = park.totalRevenuePerYear();
    assert.strictEqual(actual, 1277500)
  });


});
