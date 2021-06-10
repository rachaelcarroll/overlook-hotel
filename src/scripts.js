// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';

import apiCalls from './apiCalls'

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
import './images/main-photo.jpg'

console.log('This is the JavaScript entry file - your code begins here.');
let fetchCustomerData, fetchRoomsData, fetchBookingsData

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