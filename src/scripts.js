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
let fetchCustomerData, fetchRoomsData, fetchBookingsData, hotel, currentCustomer, currentDate, allBookings, allRooms, formattedDate, customerLogin;

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
const rewardPoints = document.getElementById('rewardPoints')
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
    console.log(nf.format(currentCustomer.amountSpent))
    rewardPoints.innerText += `Total Reward Points: ${(nf.format((currentCustomer.amountSpent * 2).toFixed(0)))}`
}
const setDate = () => {
    currentDate = new Date();
    console.log(currentDate = new Date())
    formattedDate = currentDate.toDateString();
    console.log(formattedDate)
}

const renderReservations = () => {
    currentCustomer.bookings.map(booking => {
        roomsDisplay.innerHTML += `      
    <article class='reservation-card' id='reservationCard'>
        <article class='reserved-room' id='reservedRoom'>
          <div class='room-photo'>
            <img src='images/overlook.jpg'>
          </div>
          <div class='room-type'>
            <h5>${booking.roomType} #${booking.roomNumber}</h5>
            <p>This room includes complimentary breakfast & happy hour</p>
            <select class='reservation-num' id='reservationNum'>
              <option selected='true'>Reservation ID</option>
              <option value='reservation-id'>${booking.id}</option>
            </select>
            <p class='reso-date'>We're looking forward to having you as our guest on ${booking.date}</p></p>
          </div>
          <div class='room-cost'>
            <p class='nightly-cost'>$$</p>
            <p>per night</p>
          </div>
        </article>
      </article>`
    }).join(''); 
}

const loadHotel = () => {
    setDate();
    currentCustomer = hotel.customers.find(customer => customer.username === customerLogin)
    hide(loginPage)
    show(mainDashboard)
    renderSpent()
    greetCustomer();
    renderReservations();
}


const validateLogin = (event) => {
    event.preventDefault();
    customerLogin = userLogin.value.toLowerCase().split('r');
    console.log(customerLogin)
    if (customerLogin[0] === 'custome' && parseInt(customerLogin[1]) > 0 && parseInt(customerLogin[1]) < 51 && password.value === 'overlook2021') {
        customerLogin = customerLogin.join('r');
        loadHotel();
    } else {
        show(loginError);
    }   
}

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


