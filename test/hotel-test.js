import {
    expect
  } from 'chai';
  import Hotel from '../src/Hotel';
  import Room from '../src/Room';
  import Booking from '../src/Booking';
  import Customer from '../src/Customer';
  
  describe('Hotel', function() {
    let booking1, booking2, booking3, booking4, customer1, customer2, room1, room2, room3, bookingArray, bookingArray2, customers, rooms, hotel;

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
        bidet: false,
        costPerNight: 400.00,
        numBeds: 2,
        number: 18,
        roomType: "junior suite"
      })
    
    room3 = new Room({
       bedSize: "twin",
       bidet: false,
       costPerNight: 200.00,
       numBeds: 2,
       number: 9,
       roomType: "suite"
    })
  
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
        roomNumber: 25,
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
  
      bookingArray = [];
      bookingArray2 = [];
      customers = [];
      rooms = [];
  
      bookingArray.push(booking1, booking2)
      bookingArray2.push(booking3, booking4)
  
      customers.push(customer1, customer2)
      rooms.push(room1, room2, room3)
    
      
      customer1 = new Customer({
        id: 1, 
        name: "Leatha Ullrich"
      }, bookingArray)
      
      customer2 = new Customer({
        id: 2,
        name: "Dell Rath"
      }, bookingArray2);
      
      hotel = new Hotel(customers, rooms)

    });
  
    it('should be a function', function() {

        expect(Hotel).to.be.a('function');
      });
    
      it('should be an instance of hotel', function() {
    
        expect(hotel).to.be.an.instanceof(Hotel);
      });
    
      it('should hold an array of customers', function() {
    
        expect(hotel.customers).to.deep.equal([customer1, customer2]);
        expect(hotel.customers.length).to.equal(2);
      });

      it('should find all rooms that are not booked on a given date', function () {
        let avail = hotel.findAvailableRooms(bookingArray2, "2020/01/24");
        let avail2 = hotel.findAvailableRooms(bookingArray2, "2020/01/22");
        
        expect(avail.length).to.equal(3);
        expect(avail2.length).to.equal(2);
      })
    });