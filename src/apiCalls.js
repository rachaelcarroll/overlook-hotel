import {
  onBookingSuccess,
  showBookingError
} from './scripts';

const fetchAllCustomers = () => {
    return fetch('http://localhost:3001/api/v1/customers')
      .then(response => response.json())
      .catch(err => displayError(err))
  }
  const fetchRooms = () => {
    return fetch('http://localhost:3001/api/v1/rooms')
      .then(response => response.json())
      .catch(err => displayError(err))
  }
  const fetchBookings = () => {
    return fetch('http://localhost:3001/api/v1/bookings')
      .then(response => response.json())
      .catch(err => displayError(err))
  }

  const getData = () => {
    return Promise.all([fetchAllCustomers(), fetchRooms(), fetchBookings()])
  }

  const postBooking = (booking) => {
    let url = 'http://localhost:3001/api/v1/bookings/'
    fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(booking)
    })
    .then(checkForError)
    .then(() => onBookingSuccess())
    .catch((err) => displayError(err));
  }

//   ERROR HANDLING

const displayError = (errorMessage) => {
    const error =  document.getElementById('bookingError');
    const message = errorMessage.message === 'Failed to fetch' ?
      "Internet connection may be unstable. Check again in a moment please." : errorMessage;
      error.innerText = message;
}

const checkForError = (response) => {
    if (!response.ok) {
        showBookingError(response);
        throw new Error('Something went wrong, please try again later.');
    } else {
        return response.json();
    }
}

export default { getData , postBooking }