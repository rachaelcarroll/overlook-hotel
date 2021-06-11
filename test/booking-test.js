import { expect } from 'chai';
import Booking from '../src/Booking';

describe('Booking', function() {
  let booking1, booking2, booking3, booking4;
  beforeEach(() => {

    booking1 = new Booking({
        date: "2020/02/08",
        id: "5fwrgu4i7k55hl78v",
        roomNumber: 25,
        roomServiceCharges: [],
        userID: 1
      })
  
    booking2 = new Booking({
        date: "2020/01/25",
        id: "5fwrgu4i7k55hl78r",
        roomNumber: 23,
        roomServiceCharges: [],
        userID: 1
      })

    booking3 = new Booking({
        date: "2020/01/25",
        id: "5fwrgu4i7k55hl78d",
        roomNumber: 26,
        roomServiceCharges: [],
        userID: 2
    })

    booking4 = new Booking({
        date: "2020/01/22",
        id: "5fwrgu4i7k55hl795",
        roomNumber: 9,
        roomServiceCharges: [],
        userID: 2
    })

  });

  it('should be a function', function() {

    expect(Booking).to.be.a('function');
  });

  it('should be an instance of Booking', function() {

    expect(booking1).to.be.an.instanceof(Booking);
  });

  it('should hold a booking id', function() {

    expect(booking3.id).to.equal("5fwrgu4i7k55hl78d");
  });

  it('should hold a userId', function() {

    expect(booking2.userID).to.equal(1);
  });

  it('should hold a date', function() {

    expect(booking4.date).to.equal("Wed Jan 22 2020");
  });

  it('should hold a room number', function() {

    expect(booking2.roomNumber).to.equal(23);
  });
});
