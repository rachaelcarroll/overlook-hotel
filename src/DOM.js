export const userLogin = document.getElementById('username-input')
export const loginBtn = document.getElementById('loginBtn')
export const loginError = document.getElementById('loginError')
export const password = document.getElementById('password-input')
export const loginPage = document.getElementById('loginPage')
export const mainDashboard = document.getElementById('dashboardView')
export const userGreeting = document.getElementById('userGreeting')
export const totalSpent = document.getElementById('totalSpent')
export const rewardPoints = document.getElementById('rewardPoints')
export const resoOptions = document.getElementById('viewResos');
export const accountMenu = document.getElementById('accountOptions')
export const modal = document.getElementById('modal')
export const dateSelect = document.getElementById('calendar')
export const placeholderImage = document.getElementById('roomsPlaceholder')
export const searchRooms = document.getElementById('searchRooms')
export const roomTypeSelect = document.getElementById('filterRooms')
export const availableRooms = document.getElementById('roomsAvailable')
export const modalX = document.getElementById('close')
export const error = document.getElementById('bookingError')
export const nf = Intl.NumberFormat();

export const show = (element) => {
    element.classList.remove('hidden');
}

export const hide  = (element) => {
    element.classList.add('hidden');
}

// export const greetCustomer = () => {
//     userGreeting.innerText = ''
//     userGreeting.innerText += `Welcome back, ${currentCustomer.getFirstName()}!`
// }

// export const renderSpent = () => {
//     currentCustomer.calculateTotalSpent(allRooms);
//     totalSpent.innerText = '';
//     rewardPoints.innerText = '';
//     totalSpent.innerText += `Total Spent: $${nf.format(currentCustomer.amountSpent)}`;
//     console.log(nf.format(currentCustomer.amountSpent))
//     rewardPoints.innerText += `Total Reward Points: ${(nf.format((currentCustomer.amountSpent * 2).toFixed(0)))}`
// }


export const renderBeds = (room) => {
    if (room.numBeds > 1) {
        return `This room has ${room.numBeds} ${room.bedSize} beds.`
      }
      return `This room has ${room.numBeds} ${room.bedSize} bed.`
    }

// export const renderResoDate = (booking) => {
//     const stringDate = new Date(booking.date).toDateString();
//         if (dayjs(`${booking.date}`).isBefore(currentDate)) {
//             return `Thank you for being our guest on ${stringDate}!`
//         } else {
//             return `We look forward to having you as our guest on ${stringDate}!`
//         }
//     }