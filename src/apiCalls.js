// const fetchSingleCustomer = (userId) => {
//     return fetch(`http://localhost:3001/api/v1/customers/${userId}`)
//     .then(response => response.json())
//     .catch(err => console.error("not working"))
// }

const fetchAllCustomers = () => {
    return fetch('http://localhost:3001/api/v1/customers')
      .then(response => response.json())
      .catch(err => console.error("not working"))
  }
  const fetchRooms = () => {
    return fetch('http://localhost:3001/api/v1/rooms')
      .then(response => response.json())
      .catch(err => console.error("not working"))
  }
  const fetchBookings = () => {
    return fetch('http://localhost:3001/api/v1/bookings')
      .then(response => response.json())
      .catch(err => console.error("not working"))
  }

  const fetchCustomer = (id) => {
    return fetch(`http://localhost:3001/api/v1/customers/${id}`)
      .then(response => response.json())
      .catch(err => console.error("not working"))
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
    .then(checkForError);
  }
//   ERROR HANDLING

const displayError = (errorMessage) => {
    const error =  document.getElementById('bookingError');
    const message = errorMessage.message === 'Failed to fetch' ?
      "Internet connection may be unstable. Check again in a moment please." : errorMessage
      error.innerText = message;
}

const checkForError = (response) => {
    if (!response.ok) {
        throw new Error('Please fill out all required fields.');
    } else {
        return response.json();
    }
}

export default { getData , fetchCustomer , postBooking }