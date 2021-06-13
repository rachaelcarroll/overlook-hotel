class Booking {
    constructor(bookingData) {
      this.id = bookingData.id,
      this.userID = bookingData.userID,
      // this.date = new Date(bookingData.date).toDateString(),
      this.date = bookingData.date,
      this.roomNumber = bookingData.roomNumber,
      this.cost = bookingData.cost || null,
      this.roomServiceCharges = []
    }
  }

export default Booking
