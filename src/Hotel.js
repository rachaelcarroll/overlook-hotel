class Hotel {
    constructor(customers, rooms) {
      this.customers = customers;
      this.rooms = rooms
    }
    
    roomsAvailable(date, bookings) {
      return this.rooms.filter(room => {
        return bookings.filter(booking => {
          return (room.number !== booking.roomNumber && date !== booking.date);
        });
      });
    }
}



export default Hotel
