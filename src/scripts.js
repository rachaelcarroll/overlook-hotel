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
import './images/overlook.jpg'
// import { ModuleGraph } from 'webpack';

console.log('This is the JavaScript entry file - your code begins here.');
let fetchCustomerData, fetchRoomsData, fetchBookingsData, hotel, currentCustomer, currentDate, allBookings, allRooms, formattedDate;

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
const password = document.getElementById('password-input')
const loginPage = document.getElementById('loginPage')
const mainDashboard = document.getElementById('dashboardView')
const userGreeting = document.getElementById('userGreeting')
const totalSpent = document.getElementById('totalSpent')
const nf = Intl.NumberFormat();
loginBtn.addEventListener('click', (event) => {
    validateLogin(event)
})

// const renderBookings = () => {

// }

const greetCustomer = () => {
    userGreeting.innerText = ''
    userGreeting.innerText += `Welcome back, ${currentCustomer.getFirstName()}!`
}

const renderSpent = () => {
    currentCustomer.calculateTotalSpent(allRooms);
    totalSpent.innerText = '';
    totalSpent.innerText += `Total Spent: $${nf.format(currentCustomer.amountSpent)}`;
}
const setDate = () => {
    currentDate = new Date();
    console.log(currentDate = new Date())
    formattedDate = currentDate.toDateString();
    console.log(formattedDate)
}

const loadHotel = () => {
    setDate();
    currentCustomer = hotel.customers.find(customer => customer.username === userLogin.value)
    hide(loginPage)
    show(mainDashboard)
    renderSpent()
    greetCustomer();
    // renderBookings();
}


const validateLogin = (event) => {
    event.preventDefault();
    let customerLogin = userLogin.value.toLowerCase().split('r');
    console.log(customerLogin)
    if (customerLogin[0] === 'custome' && parseInt(customerLogin[1]) > 0 && parseInt(customerLogin[1]) < 51 && password.value === 'overlook2021') {
        console.log(customerLogin)
        customerLogin = customerLogin.join('r');
        console.log('formatted>>>', customerLogin)
        loadHotel();
    } else {
        show(loginError);
    }   
}



//renderPage 
//hotel.user.bookings --> render to the display reservations

//new booking needs to be POST to the http://localhost:3001/api/v1/bookings	...
// { "userID": 48, "date": "2019/09/23", "roomNumber": 4 }



//DOM stuff
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
    } else if(event.target.value === 'sign-out') {
        accountMenu.value = 'reservations';
        hide(mainDashboard)
        show(loginPage)
    }
}
