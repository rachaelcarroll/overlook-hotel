// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';

import apiCalls from './apiCalls'
import Booking from './Booking'
import Customer from './Customer'
import Hotel from './Hotel'
import Room from './Room'

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
import './images/main-photo.jpg'
// import { ModuleGraph } from 'webpack';

console.log('This is the JavaScript entry file - your code begins here.');
let fetchCustomerData, fetchRoomsData, fetchBookingsData, hotel, currentCustomer, currentDate, allBookings, allRooms;

const correlateCustomers = (customers, bookings) => {
    return customers.customers.map(customer => {
        let correlatedBookings = bookings.filter(booking => booking.userID === customer.id)
        return new Customer(customer, correlatedBookings)
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

        allBookings = fetchBookingsData.bookings.map(booking => new Booking(booking))
        allRooms = fetchRoomsData.rooms.map(room => new Room(room))
        hotel = new Hotel(correlateCustomers(fetchCustomerData, allBookings), allRooms)       
    })
})


const userLogin = document.getElementById('username-input')
const loginBtn = document.getElementById('loginBtn')
const loginError = document.getElementById('loginError')
const password = document.getElementById('password')
const loginPage = document.getElementById('loginPage')
const mainDashboard = document.getElementById('dashboardView')
const userGreeting = document.getElementById('userGreeting')
const totalSpent = document.getElementById('totalSpent')
loginBtn.addEventListener('click', (event) => {
    loadHotel(event)
})

// const renderBookings = () => {

// }

const greetCustomer = () => {
    userGreeting.innerText = ''
    userGreeting.innerText += `Welcome back, ${currentCustomer.getFirstName()}!`
}

const renderSpent = () => {
    currentCustomer.calculateTotalSpent(allRooms);
    console.log(allRooms)
    totalSpent.innerText = '';
    totalSpent.innerText += `Total Spent: $${currentCustomer.amountSpent}`;
}
const loadHotel = (event) => {
    event.preventDefault();
    console.log(hotel)
    currentCustomer = hotel.customers.find(customer => customer.username === userLogin.value)
    hide(loginPage)
    show(mainDashboard)
    renderSpent()
    greetCustomer();
    // renderBookings();
}


const validateLogin = () => {
    if(userLogin.value.includes('customer') && userLogin.value.includes(hotel.customers.some(customer => customer.id)) && password.value === 'overlook2021') {
        loadHotel();
    } else {
        show(loginError);
    }
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



const accountMenu = document.getElementById('accountOptions')
const modal = document.getElementById('modal')

accountMenu.addEventListener('change', (event) => {
    handleDropDown(event)
})

const show = (element) => {
    element.classList.remove('hidden');
}

const hide  = (element) => {
    element.classList.add('hidden');
}

const handleDropDown = (event) => {
    if(event.target.value === 'book-room') {
        console.log('boooked')
        show(modal)
    }
}
