class Customer {
    constructor(customerData, bookings) {
        this.id = customerData.id
        this.name = customerData.name
        this.username = `customer${customerData.id}`
        this.bookings = bookings;
        this.amountSpent = 0
    }
    
    getFirstName() {
        const name = this.name.split(' ');
        return name[0];
    }

    calculateTotalSpent(rooms) {
        let spent = 0;
        let roomsBooked = [];
        this.bookings.forEach(booking => {
            rooms.find(room => {
                if(booking.roomNumber === room.number) {
                    roomsBooked.push(room)
                }
        })
    })
       let cost = roomsBooked.reduce((totalCost, room) => {
           totalCost += room.costPerNight
           return totalCost
       }, 0)
    
    this.amountSpent = cost.toFixed(2)
    return this.amountSpent
    }

    correlateBookingCost(rooms, booking) {
    let bookedRoom = rooms.find(room => room.number === booking.roomNumber)
        return bookedRoom.costPerNight
    }

    bookRoom(booking, rooms) {
        this.bookings.push(booking)
        this.amountSpent += this.correlateBookingCost(rooms, booking)
    }

    sortBookingsByDate(otherbookings) {
    this.bookings.sort((a, b) => {
        return a.date > b.date ? 1 : -1;
        })
    }
}

export default Customer;
