import Booking from "./Booking";

class Customer {
    constructor(customerData, bookings) {
        this.id = customerData.id
        this.name = customerData.name
        this.username = `customer${customerData.id}`
        this.bookings = bookings;
        this.amountSpent = 0
    }
    
    
    getFirstName() {
        var name = this.name.split(' ');
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
    const nf = Intl.NumberFormat();
    return nf.format(this.amountSpent)
    }


    bookRoom(date, roomNumber) {
        // fetch('http://localhost:3001/api/v1/bookings', {
        //   method: 'POST',
        //   headers: {
        //     "Content-Type": "application/json"
        //   },
        //   body: JSON.stringify({
        //     "userID": this.id,
        //     "date": date,
        //     "roomNumber": roomNumber
        //   })
        // }).then(() => {
        //   console.log('ROOM BOOKED!');
        // }).catch(() => {
        //   console.log('SOMETHING WENT WRONG');
        // });
        let newBooking = new Booking({ "userID": this.id,
        "date": date,
        "roomNumber": roomNumber })
        
        this.bookings.push(newBooking)
        console.log(newBooking)
      }


    sortBookingsByDate() {
    this.bookings.sort((a, b) => {
        return a.date > b.date ? -1 : 1;
        })
    }
}




export default Customer;
