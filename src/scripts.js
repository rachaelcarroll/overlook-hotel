// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';

import apiCalls from './apiCalls'

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
import './images/main-photo.jpg'

console.log('This is the JavaScript entry file - your code begins here.');
let fetchCustomerData, fetchRoomsData, fetchBookingsData, hotel, currentCustomer, currentDate, allBookings, allRooms;


const correlateCustomers = (customers, bookings, rooms) => {
    return customers.customers.map(customer => {
        let correlatedBookings = bookings.filter(booking => booking.userID === customer.id)
        return new Customer(user, correlatedBookings, rooms)
})
}



window.addEventListener('load', function() {
    apiCalls.getData()
    .then(data => {
        fetchCustomerData = data[0];
        fetchRoomsData = data[1];
        fetchBookingsData = data[2];
        console.log(fetchCustomerData)
        console.log(fetchRoomsData)
        console.log(fetchBookingsData)
    })
})

allBookings = fetchBookingsData.bookings.map(booking => new Booking(booking))
allRooms = fetchRoomsData.rooms.map(room => new Room(room))

hotel = new Hotel(correlateCustomers(fetchCustomerData, allBookings), allRooms)

//let loginId = 
//login usernameInput.value.split at 8 ---> take that number and find match from the hotel.users.id 

const getUser = (id) => {
    apiCalls.fetchUser(id).then(data => {
      currentCustomer = hotel.customers.find(customer => customer.id === data.id)
      currentUser.calculateTotalSpent(hotel);
    })
  }



console.log(currentDate = new Date())
let formattedDate = currentDate.toDateString()
console.log(formattedDate)

//renderPage 
//hotel.user.bookings --> render to the display rooms cards 
//innertext of greeting will be currentCustomer.getFirstName()
    // getFirstName() {
    //     var name = this.name.split(' ');
    //     return name[0].toUpperCase();
    //   }
//innertext of $$ spends should be total bookings cost
//when booking a new stay... that room data will be added to customer.bookings array 
//new booking needs to be POST to the http://localhost:3001/api/v1/bookings	...
// { "userID": 48, "date": "2019/09/23", "roomNumber": 4 }




//DOM stuff
//on successful login -- hide login page -- render main dashboard... 
//on logout -- clear page? hide dashboard, show login page...
//when click new booking -- modal popup? or hide displayRooms (change this name) and show all rooms