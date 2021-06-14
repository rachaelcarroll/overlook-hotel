// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';
import dayjs from 'dayjs' 

import apiCalls from './apiCalls'
import Booking from './Booking'
import Customer from './Customer'
import Hotel from './Hotel'
import Room from './Room'

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/overlook.jpg'
import './images/main-photo.jpg'
import './images/Room1.jpg'
import './images/Room2.jpg'
import './images/Room3.jpg'
import './images/Room4.jpg'
import './images/Room5.jpg'
import './images/Room6.jpg'
import './images/Room7.jpg'
import './images/Room8.jpg'
import './images/Room9.jpg'
import './images/Room10.jpg'
import './images/Room11.jpg'
import './images/Room12.jpg'
import './images/Room13.jpg'
import './images/Room14.jpg'
import './images/Room15.jpg'
import './images/Room16.jpg'
import './images/Room17.jpg'
import './images/Room18.jpg'
import './images/Room19.jpg'
import './images/Room20.jpg'
import './images/Room21.jpg'
import './images/Room22.jpg'
import './images/Room23.jpg'
import './images/Room24.jpg'
import './images/Room25.jpg'

// --------GLOBAL VARIABLES---------
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
    currentDate = dayjs(new Date()).format('YYYY/MM/DD')
    console.log(currentDate)
    formattedDate = dayjs(currentDate).toString();
    console.log('format', formattedDate)
}


const renderBeds = (room) => {
    if (room.numBeds > 1) {
        return `This room has ${room.numBeds} ${room.bedSize} beds.`
      }
      return `This room has ${room.numBeds} ${room.bedSize} bed.`
    }

const renderResoDate = (booking) => {
const stringDate = new Date(booking.date).toDateString();
    if (dayjs(`${booking.date}`).isBefore(currentDate)) {
        return `Thank you for being our guest on ${stringDate}!`
    } else {
        return `We look forward to having you as our guest on ${stringDate}!`
    }
}

const resoOptions = document.getElementById('viewResos');
resoOptions.addEventListener('change', (event) => {
    handleResoDropDown(event);
})

const renderReservations = (type) => {

    if (type === 'all') {
        roomsDisplay.innerHTML = '';
        currentCustomer.sortBookingsByDate();
        currentCustomer.bookings.map(booking => {
           allRooms.map(room => {
                if(room.number === booking.roomNumber && room.number === booking.roomNumber) {
                    roomsDisplay.innerHTML += `      
               <article class='reservation-card' id='reservationCard'>
                   <article class='reserved-room' id='reservedRoom'>
                     <div class='room-photo'>
                       <img src='images/Room${room.number}.jpg'>
                     </div>
                     <div class='room-type'>
                       <h5>${room.roomType.toUpperCase()} #${booking.roomNumber}</h5>
                       <p class='room-beds'>${renderBeds(room)}</p>
                       <select class='reservation-num' id='reservationNum'>
                         <option selected='true'>Reservation ID</option>
                         <option value='reservation-id'>${booking.id}</option>
                       </select>
                       <p class='reso-date'>${renderResoDate(booking)}</p></p>
                     </div>
                     <div class='room-cost'>
                       <p class='nightly-cost'>$${room.costPerNight}</p>
                       <p>per night</p>
                     </div>
                   </article>
                 </article>`
               }  
           }).join('');
        })
    } else if (type === 'past') {
        roomsDisplay.innerHTML = '';
        let previousStays = currentCustomer.bookings.filter(booking => dayjs(`${booking.date}`).isBefore(currentDate))
        console.log(previousStays)
        previousStays.map(booking => {
           allRooms.map(room => {
                if(room.number === booking.roomNumber && room.number === booking.roomNumber) {
                    roomsDisplay.innerHTML += `      
               <article class='reservation-card' id='reservationCard'>
                   <article class='reserved-room' id='reservedRoom'>
                     <div class='room-photo'>
                       <img src='images/Room${room.number}.jpg'>
                     </div>
                     <div class='room-type'>
                       <h5>${room.roomType.toUpperCase()} #${booking.roomNumber}</h5>
                       <p class='room-beds'>${renderBeds(room)}</p>
                       <select class='reservation-num' id='reservationNum'>
                         <option selected='true'>Reservation ID</option>
                         <option value='reservation-id'>${booking.id}</option>
                       </select>
                       <p class='reso-date'>${renderResoDate(booking)}</p></p>
                     </div>
                     <div class='room-cost'>
                       <p class='nightly-cost'>$${room.costPerNight}</p>
                       <p>per night</p>
                     </div>
                   </article>
                 </article>`
               }  
           }).join('');
        })
    } else if (type === 'upcoming') {
        let upcomingStays = currentCustomer.bookings.filter(booking => dayjs(`${booking.date}`).isAfter(currentDate))
        console.log(upcomingStays)
        if (upcomingStays = []) {
            roomsDisplay.innerHTML = "You have no upcoming stays booked!";
        } else 
        upcomingStays.map(booking => {
           allRooms.map(room => {
                if(room.number === booking.roomNumber && room.number === booking.roomNumber) {
                    roomsDisplay.innerHTML += `      
               <article class='reservation-card' id='reservationCard'>
                   <article class='reserved-room' id='reservedRoom'>
                     <div class='room-photo'>
                       <img src='images/Room${room.number}.jpg'>
                     </div>
                     <div class='room-type'>
                       <h5>${room.roomType.toUpperCase()} #${booking.roomNumber}</h5>
                       <p class='room-beds'>${renderBeds(room)}</p>
                       <select class='reservation-num' id='reservationNum'>
                         <option selected='true'>Reservation ID</option>
                         <option value='reservation-id'>${booking.id}</option>
                       </select>
                       <p class='reso-date'>${renderResoDate(booking)}</p></p>
                     </div>
                     <div class='room-cost'>
                       <p class='nightly-cost'>$${room.costPerNight}</p>
                       <p>per night</p>
                     </div>
                   </article>
                 </article>`
               }  
           }).join('');
        })
    }
}

const handleResoDropDown = (event) => {
    if (event.target.value === 'upcoming') {
        console.log("UPCOMING")
        return renderReservations('upcoming')
    } else if (event.target.value === 'past') {
        return renderReservations('past');
    } else {
        return renderReservations('all');
    }
}


const loadHotel = () => {
    setDate();
    currentCustomer = hotel.customers.find(customer => customer.username === customerLogin)
    hide(loginPage)
    show(mainDashboard)
    renderSpent()
    greetCustomer();
    renderReservations('all');
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
    handleAccountDropDown(event)
})

const show = (element) => {
    element.classList.remove('hidden');
}

const hide  = (element) => {
    element.classList.add('hidden');
}

const handleAccountDropDown = (event) => {
    if(event.target.value === 'book-room') {
        let dateSelect = document.getElementById('calendar').valueAsDate = new Date();
        console.log(dateSelect)
        show(modal)

    } else if(event.target.value === 'sign-out') {
        accountMenu.value = 'reservations';
        hide(mainDashboard)
        show(loginPage)
    }
}
const placeholderImage = document.getElementById('roomsPlaceholder')
const searchRooms = document.getElementById('submitSearch')
const roomTypeSelect = document.getElementById('filterRooms')
// const dateSelect = document.getElementById('calendar')
const availableRooms = document.getElementById('roomsAvailable')
const modalBox = document.getElementById('modalContent')
modalBox.addEventListener('click', (event) => {
    determineModalClick(event)
})
searchRooms.addEventListener('click', (event => {
    filterRoomType(event, type, date)
}))



const determineModalClick = (event) => {
    event.preventDefault();
    if (event.target.id === 'close') {
        hide(modal);
        accountMenu.value = 'reservations';
        renderReservations('all')
    }
}

const renderAvailableRooms = (type) => {
    availableRooms.innerHTML = '';
    allRooms.filter(room => {
        if (room.roomType === type) {
            return availableRooms.innerHTML +=   
            `
        <article class='room-card' id='roomCard'>
          <article class='available-room' id='availableRoom'>
            <div class='room-photo'>
              <img src='images/Room${room.number}.jpg'>
            </div>
            <div class='room-type'>
              <h5>${room.roomType.toUpperCase()} #${room.number}</h5>
              <p>DETAILS:</p>
              <p>${renderBeds(room)}</p>
            </div>
            <div class='room-cost'>
              <p class='nightly-cost'>$${room.costPerNight}</p>
              <p>per night</p>
            </div>
            <button>Book Room</button>
          </article>
        </article>`
        }
    })
}

const filterRoomType = (event, type, date) => {

    hide(placeholderImage)
    if (event.target.value === 'residential suite') {
        renderAvailableRooms('residential suite')
    } else if (event.target.value === 'junior suite') {
        renderAvailableRooms('junior suite')
    } else if (event.target.value === 'single room') {
        renderAvailableRooms('single room')
    } else if (event.target.value === 'suite') {
        renderAvailableRooms('suite')
    }
}
