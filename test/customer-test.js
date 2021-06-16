import { expect } from 'chai';
import Room from '../src/Room';
import Booking from '../src/Booking';
import Customer from '../src/Customer';

describe('Customer', function() {
    let booking1, booking2, booking3, booking4, booking5, customer1, customer2, room1, room2, room3, bookingArray, bookingArray2, roomsArray;
    beforeEach(() => {
  
    booking1 = new Booking({
        date: "2020/02/08",
        id: "5fwrgu4i7k55hl78v",
        roomNumber: 18,
        roomServiceCharges: [],
        userID: 1
      })
  
    booking2 = new Booking({
        date: "2020/01/25",
        id: "5fwrgu4i7k55hl78r",
        roomNumber: 6,
        roomServiceCharges: [],
        userID: 1
      })

    booking3 = new Booking({
        date: "2020/01/25",
        id: "5fwrgu4i7k55hl78d",
        roomNumber: 18,
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

    booking5 = new Booking({
      "id": Date.now(),
      "userID": 2,
      "date": "2021/06/15",
      "roomNumber": 13
    })
    
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
        bidet: false,
        costPerNight: 400.00,
        numBeds: 2,
        number: 18,
        roomType: "junior suite"
      })

    room3 = new Room({
        bedSize: "twin",
        bidet: false,
        costPerNight: 600.00,
        numBeds: 2,
        number: 13,
        roomType: "junior suite"
    })

    roomsArray = [];
    bookingArray = [];
    bookingArray2 = [];
    roomsArray.push(room1, room2, room3)
    bookingArray.push(booking1, booking2)
    bookingArray2.push(booking3, booking4)
  
      customer1 = new Customer({
        id: 1, 
        name: "Leatha Ullrich"
      }, bookingArray, roomsArray)
  
      customer2 = new Customer({
        id: 2,
        name: "Dell Rath"
      }, bookingArray2, roomsArray);

    });

    it('should be a function', function() {
        expect(Customer).to.be.a('function');
      });
    
      it('should be an instance of customer', function() {
        expect(customer1).to.be.an.instanceof(Customer);
      });
    
      it('should have an id', function() {
        expect(customer1.id).to.equal(1);
      });
    
      it('should have a name', function() {
        expect(customer1.name).to.equal('Leatha Ullrich');
      });

      it('should have login credentials', function() {
        expect(customer2.username).to.equal('customer2');
      });

      it('should hold customers booking data', function() {
        expect(customer1.bookings).to.deep.equal(bookingArray);
      });

      it('should keep track of amount spent on hotel stays', function() {
        expect(customer1.amountSpent).to.equal(0)
      })

      it('should get the first name of the customer', function() {
        expect(customer2.getFirstName()).to.equal('Dell');
      });

      it('should return the total cost of all bookings', function () {
        customer1.calculateTotalSpent(roomsArray)

        expect(customer1.amountSpent).to.equal('700.00')
      })

      it('should correlate the cost of the room being booked', function () {
        customer2.correlateBookingCost(roomsArray, booking3)

        expect(customer2.correlateBookingCost(roomsArray, booking3)).to.equal(400)
      });

      it('should be able to book a new reservation', function () {
        customer2.bookRoom(booking5, roomsArray)

        expect(customer2.amountSpent).to.equal(600)
        expect(customer2.bookings.length).to.equal(3);
      })

      it('should sort bookings by date', function () {
        customer2.sortBookingsByDate();
        
        expect(customer2.bookings[1]).to.equal(booking4)
      });
});

