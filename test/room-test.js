import { expect } from 'chai';
import Room from '../src/Room';

describe('Room', function() {
  let room1, room2, room3, room4;
  beforeEach(() => {

    room1 = new Room({
        bedSize: "queen",
        bidet: true,
        costPerNight: 300.00,
        numBeds: 1,
        number: 6,
        roomType: "junior suite" 
      })
  
    room2 = new Room({
        bedSize: "king",
        bidet: true,
        costPerNight: 400.00,
        numBeds: 2,
        number: 18,
        roomType: "deluxe suite"
      })

    room3 = new Room({
        bedSize: "full",
        bidet: false,
        costPerNight: 560.00,
        numBeds: 2,
        number: 28,
        roomType: "suite"
      })

    room4 = new Room({
        bedSize: "queen",
        bidet: false,
        costPerNight: 200.00,
        numBeds: 1,
        number: 22,
        roomType: "suite"
      })

  });

  it('should be a function', function() {

    expect(Room).to.be.a('function');
  });

  it('should be an instance of Room', function() {

    expect(room1).to.be.an.instanceof(Room);
  });

  it('should have a room number', function() {

    expect(room3.number).to.equal(28);
  });

  it('should have a type', function() {

    expect(room2.roomType).to.equal("deluxe suite");
  });

  it('should have a bed size', function() {

    expect(room1.bedSize).to.equal("queen");
  });

  it('should have a number of beds', function() {

    expect(room3.numBeds).to.equal(2);
  });

  it('should have a cost per night', function() {

    expect(room3.costPerNight).to.equal(560.00);
  });
});
