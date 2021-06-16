import Booking from "./Booking";

class Hotel {
  constructor(customers, rooms) {
    this.customers = customers;
    this.rooms = rooms
  }
    
  findAvailableRooms(bookings, date) {
    let reserved = bookings.filter(booking => {
      return booking.date === date;
    });
    let availableRooms = this.rooms.reduce((acc, room) => {
      let isBooked = false;
      reserved.forEach(booking => {
        if (room.number === booking.roomNumber) {
          isBooked = true
        }
      });
      if (!isBooked) {
        acc.push(room)
      }
      return acc;
    }, []);
    return availableRooms;
  }
}

export default Hotel
