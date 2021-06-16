import './css/base.scss';
import dayjs from 'dayjs' 
import apiCalls from './apiCalls'
import Booking from './Booking'
import Customer from './Customer'
import Hotel from './Hotel'
import Room from './Room'

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

import {
userLogin, loginBtn, loginError, password, loginPage, mainDashboard, userGreeting, totalSpent, rewardPoints, resoOptions, accountMenu, modal, dateSelect, placeholderImage, searchRooms, roomTypeSelect, availableRooms, modalX, error, nf
} from './DOMElements'

let fetchCustomerData, fetchRoomsData, fetchBookingsData, hotel, currentCustomer, currentDate, allBookings, allRooms, formattedDate, customerLogin, bookedRoomNum, formatPostDate, newBooking;


loginBtn.addEventListener('click', (event) => {
    validateLogin(event)
})
resoOptions.addEventListener('change', (event) => {
    handleResoDropDown(event);
})
accountMenu.addEventListener('change', (event) => {
    handleAccountDropDown(event);
})
searchRooms.addEventListener('click', () => {
    filterRooms()
})
modalX.addEventListener('click', () => {
    closeModal()
})
availableRooms.addEventListener('click', (event) => {
    determineRoomSelection(event)
})

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
    .catch(err => displayPageLevelError())
})

const correlateCustomers = (customers, bookings) => {
    return customers.customers.map(customer => {
        let correlatedBookings = bookings.filter(booking => booking.userID === customer.id)
        return new Customer(customer, correlatedBookings)
  })
}

const displayPageLevelError = () => {
  show(loginError)
  loginError.innerText = `Sorry, we seem to be experiencing some
  technical difficulties!`
  loginBtn.setAttribute("disabled", true)
}

const validateLogin = (event) => {
    event.preventDefault();
    customerLogin = userLogin.value.toLowerCase().split('r');
    console.log(customerLogin)
    if (customerLogin[0] === 'custome' && parseInt(customerLogin[1]) > 0 && parseInt(customerLogin[1]) < 51 && !customerLogin[1].startsWith(0) && password.value === 'overlook2021') {
        customerLogin = customerLogin.join('r');
        loadHotel();
    } else {
        show(loginError);
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

const greetCustomer = () => {
    userGreeting.innerText = ''
    userGreeting.innerText += `Welcome back, ${currentCustomer.getFirstName()}!`
}

const renderSpent = () => {
    currentCustomer.calculateTotalSpent(allRooms);
    console.log("spent", currentCustomer.amountSpent)
    console.log(currentCustomer.bookings)
    totalSpent.innerText = '';
    rewardPoints.innerText = '';
    totalSpent.innerText += `Total Spent: $${nf.format(currentCustomer.amountSpent)}`;
    rewardPoints.innerText += `Total Reward Points: ${(nf.format((currentCustomer.amountSpent * 2).toFixed(0)))}`
}

const setDate = () => {
    currentDate = dayjs(new Date()).format('YYYY-MM-DD')
    console.log(currentDate)
}

const renderResoDate = (booking) => {
    const stringDate = new Date(booking.date).toDateString();
        if (dayjs(`${booking.date}`).isBefore(currentDate)) {
            return `Thank you for being our guest on ${stringDate}!`
        } else {
            return `We look forward to having you as our guest on ${stringDate}!`
        }
    }

const renderBeds = (room) => {
    if (room.numBeds > 1) {
        return `This room has ${room.numBeds} ${room.bedSize} beds.`
      }
      return `This room has ${room.numBeds} ${room.bedSize} bed.`
    }

const renderReservations = (type) => {
    if (type === 'all') {
        roomsDisplay.innerHTML = '';
        currentCustomer.sortBookingsByDate();
        currentCustomer.bookings.map(booking => {
           allRooms.map(room => {
                if(room.number === booking.roomNumber) {
                    createRoomCard(room, booking);
               }  
           }).join('');
        })
    } else if (type === 'past') {
        roomsDisplay.innerHTML = '';
        let previousStays = currentCustomer.bookings.filter(booking => dayjs(`${booking.date}`).isBefore(currentDate))
        console.log(previousStays)
        previousStays.map(booking => {
           allRooms.map(room => {
                if(room.number === booking.roomNumber) {
                    createRoomCard(room, booking)
               }  
           }).join('');
        })
    } else if (type === 'upcoming') {
        roomsDisplay.innerHTML = '';
        let upcomingStays = currentCustomer.bookings.filter(booking => dayjs(`${booking.date}`).isAfter(currentDate))
        console.log(upcomingStays)
        if (!upcomingStays.length) {
            roomsDisplay.innerHTML = "You have no upcoming stays booked!";
        } else 
        currentCustomer.sortBookingsByDate();
        return upcomingStays.map(booking => {
           allRooms.forEach(room => {
                if(room.number === booking.roomNumber) {
                    createRoomCard(room, booking);
               }  
           });
        }).join('')
    }
}

const createRoomCard = (room, booking) => {
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

const handleAccountDropDown = (event) => {
    if(event.target.value === 'book-room') {
        show(modal)
        show(placeholderImage);
        dateSelect.setAttribute('min', currentDate)
    } else if(event.target.value === 'sign-out') {
        accountMenu.value = 'reservations';
        hide(mainDashboard)
        show(loginPage)
    } else {
        accountMenu.value = 'reservations';
        renderReservations('all');
    }
}

const handleResoDropDown = (event) => {
    if (event.target.value === 'upcoming') {
        return renderReservations('upcoming')
    } else if (event.target.value === 'past') {
        return renderReservations('past');
    } else {
        return renderReservations('all');
    }
}

const filterRooms = () => {
    hide(placeholderImage)
    formattedDate = dayjs(`${dateSelect.value}`).format('YYYY/MM/DD')
    console.log(formattedDate)
    if (roomTypeSelect.value === 'residential suite') {
        renderRooms('residential suite', formattedDate)
    } else if (roomTypeSelect.value  === 'junior suite') {
        renderRooms('junior suite', formattedDate)
    } else if (roomTypeSelect.value  === 'single room') {
        renderRooms('single room', formattedDate)
    } else if (roomTypeSelect.value  === 'suite') {
        renderRooms('suite', formattedDate)
    }
}

const renderRooms = (type, date) => {
    hotel.findAvailableRooms(allBookings, date)
    console.log(hotel.findAvailableRooms(allBookings, date))
    availableRooms.innerHTML = '';
    hotel.findAvailableRooms(allBookings, date).filter(room => 
            room.roomType === type).map(room => {
                return availableRooms.innerHTML +=   
                    `
                <article class='room-card' id='roomCard'>
                  <article class='available-room' id='${room.number}'>
                    <div class='booking-photo'>
                      <img src='images/Room${room.number}.jpg'>
                    </div>
                    <div class='room-type'>
                      <h5>${room.roomType.toUpperCase()} #${room.number}</h5>
                      <p class='details'>DETAILS:</p>
                      <p class='beds'>${renderBeds(room)}</p>
                    </div>
                    <div class='cost'>
                      <p class='nightly-cost'>$${room.costPerNight}</p>
                      <p>per night</p>
                      <button id='bookRoom' class='book-room'>Book Room</button>
                    </div>
                  </article>
                </article>`
            }) 
        }

const determineRoomSelection = (event) => {
    event.preventDefault();
    if (event.target.id === 'bookRoom') {
       bookedRoomNum = parseInt(event.target.closest('article').id);
       formatPostDate = dateSelect.value.split('-').join('/')
       addBooking(formatPostDate, bookedRoomNum)
  }
}

const addBooking = (date, room) => {
    newBooking = new Booking ({
        "id": Date.now(),
        "userID": currentCustomer.id,
        "date": date,
        "roomNumber": room
    })
    currentCustomer.bookRoom(newBooking, allRooms)
    allBookings.push(newBooking)
    apiCalls.postBooking(newBooking)
}

export const onBookingSuccess = (event) => {
    renderSpent();
    roomsAvailable.innerHTML = `Your stay is booked! ${renderResoDate(newBooking)}!`
    setTimeout(function() {
        renderSpent();
        closeModal();
        clearModal();
        renderReservations('upcoming');
        resoOptions.value = 'upcoming';
      }, 3000);

}

const clearModal = () => {
    dateSelect.value = currentDate;
    roomTypeSelect.value = 'choose-room';
    roomsAvailable.innerHTML = '';
    hide(modal);
}

const closeModal = () => {
    clearModal();
    accountMenu.value = 'reservations';
    resoOptions.value = 'all-reservations';
    error.innerText = '';
}

const show = (element) => {
    element.classList.remove('hidden');
}

const hide  = (element) => {
    element.classList.add('hidden');
}

