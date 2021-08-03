/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "onBookingSuccess": () => (/* binding */ onBookingSuccess)
/* harmony export */ });
/* harmony import */ var _css_base_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apiCalls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony import */ var _Booking__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11);
/* harmony import */ var _Customer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12);
/* harmony import */ var _Hotel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(13);
/* harmony import */ var _Room__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(14);
/* harmony import */ var _images_overlook_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7);
/* harmony import */ var _images_main_photo_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(15);
/* harmony import */ var _images_Room1_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(16);
/* harmony import */ var _images_Room2_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(17);
/* harmony import */ var _images_Room3_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(18);
/* harmony import */ var _images_Room4_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(19);
/* harmony import */ var _images_Room5_jpg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(20);
/* harmony import */ var _images_Room6_jpg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(21);
/* harmony import */ var _images_Room7_jpg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(22);
/* harmony import */ var _images_Room8_jpg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(23);
/* harmony import */ var _images_Room9_jpg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(24);
/* harmony import */ var _images_Room10_jpg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(25);
/* harmony import */ var _images_Room11_jpg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(26);
/* harmony import */ var _images_Room12_jpg__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(27);
/* harmony import */ var _images_Room13_jpg__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(28);
/* harmony import */ var _images_Room14_jpg__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(29);
/* harmony import */ var _images_Room15_jpg__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(30);
/* harmony import */ var _images_Room16_jpg__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(31);
/* harmony import */ var _images_Room17_jpg__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(32);
/* harmony import */ var _images_Room18_jpg__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(33);
/* harmony import */ var _images_Room19_jpg__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(34);
/* harmony import */ var _images_Room20_jpg__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(35);
/* harmony import */ var _images_Room21_jpg__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(36);
/* harmony import */ var _images_Room22_jpg__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(37);
/* harmony import */ var _images_Room23_jpg__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(38);
/* harmony import */ var _images_Room24_jpg__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(39);
/* harmony import */ var _images_Room25_jpg__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(40);
/* harmony import */ var _DOMElements__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(41);

 




































let fetchCustomerData, fetchRoomsData, fetchBookingsData, hotel, currentCustomer, currentDate, allBookings, allRooms, formattedDate, customerLogin, bookedRoomNum, formatPostDate, newBooking;


_DOMElements__WEBPACK_IMPORTED_MODULE_34__.loginBtn.addEventListener('click', (event) => {
    validateLogin(event)
})
_DOMElements__WEBPACK_IMPORTED_MODULE_34__.resoOptions.addEventListener('change', (event) => {
    handleResoDropDown(event);
})
_DOMElements__WEBPACK_IMPORTED_MODULE_34__.accountMenu.addEventListener('change', (event) => {
    handleAccountDropDown(event);
})
_DOMElements__WEBPACK_IMPORTED_MODULE_34__.searchRooms.addEventListener('click', () => {
    filterRooms()
})
_DOMElements__WEBPACK_IMPORTED_MODULE_34__.modalX.addEventListener('click', () => {
    closeModal()
})
_DOMElements__WEBPACK_IMPORTED_MODULE_34__.availableRooms.addEventListener('click', (event) => {
    determineRoomSelection(event)
})

window.addEventListener('load', function() {
    _apiCalls__WEBPACK_IMPORTED_MODULE_2__.default.getData()
    .then(data => {
        fetchCustomerData = data[0];
        fetchRoomsData = data[1];
        fetchBookingsData = data[2];

        allBookings = fetchBookingsData.bookings.map(booking => new _Booking__WEBPACK_IMPORTED_MODULE_3__.default(booking))
        allRooms = fetchRoomsData.rooms.map(room => new _Room__WEBPACK_IMPORTED_MODULE_6__.default(room))
        hotel = new _Hotel__WEBPACK_IMPORTED_MODULE_5__.default(correlateCustomers(fetchCustomerData, allBookings), allRooms)       
    })
    .catch(err => _apiCalls__WEBPACK_IMPORTED_MODULE_2__.default.displayError(err))
})

// const displayPageLevelError = () => {
//   show(loginError)
//   loginBox.innerHTML = `<h2><strong>Sorry, we seem to be experiencing some
//   technical difficulties. Please check back later.</strong></h2>`
// }

const correlateCustomers = (customers, bookings) => {
    return customers.customers.map(customer => {
        let correlatedBookings = bookings.filter(booking => booking.userID === customer.id)
        return new _Customer__WEBPACK_IMPORTED_MODULE_4__.default(customer, correlatedBookings)
  })
}

const validateLogin = (event) => {
    event.preventDefault();
    customerLogin = _DOMElements__WEBPACK_IMPORTED_MODULE_34__.userLogin.value.toLowerCase().split('r');
    if (customerLogin[0] === 'custome' && parseInt(customerLogin[1]) > 0 && parseInt(customerLogin[1]) < 51 && !customerLogin[1].startsWith(0) && _DOMElements__WEBPACK_IMPORTED_MODULE_34__.password.value === 'overlook2021') {
        customerLogin = customerLogin.join('r');
        loadHotel();
    } else {
        show(_DOMElements__WEBPACK_IMPORTED_MODULE_34__.loginError);
    }   
}

const loadHotel = () => {
    setDate();
    currentCustomer = hotel.customers.find(customer => customer.username === customerLogin)
    hide(_DOMElements__WEBPACK_IMPORTED_MODULE_34__.loginPage)
    show(_DOMElements__WEBPACK_IMPORTED_MODULE_34__.mainDashboard)
    renderSpent()
    greetCustomer();
    renderReservations('all');
}

const greetCustomer = () => {
    _DOMElements__WEBPACK_IMPORTED_MODULE_34__.userGreeting.innerText = ''
    _DOMElements__WEBPACK_IMPORTED_MODULE_34__.userGreeting.innerText += `Welcome back, ${currentCustomer.getFirstName()}!`
}

const renderSpent = () => {
    currentCustomer.calculateTotalSpent(allRooms);
    _DOMElements__WEBPACK_IMPORTED_MODULE_34__.totalSpent.innerText = '';
    _DOMElements__WEBPACK_IMPORTED_MODULE_34__.rewardPoints.innerText = '';
    _DOMElements__WEBPACK_IMPORTED_MODULE_34__.totalSpent.innerText += `Total Spent: $${_DOMElements__WEBPACK_IMPORTED_MODULE_34__.nf.format(currentCustomer.amountSpent)}`;
    _DOMElements__WEBPACK_IMPORTED_MODULE_34__.rewardPoints.innerText += `Total Reward Points: ${(_DOMElements__WEBPACK_IMPORTED_MODULE_34__.nf.format((currentCustomer.amountSpent * 2).toFixed(0)))}`
}

const setDate = () => {
    currentDate = dayjs__WEBPACK_IMPORTED_MODULE_1___default()(new Date()).format('YYYY-MM-DD')
}

const renderResoDate = (booking) => {
    const stringDate = new Date(booking.date).toDateString();
        if (dayjs__WEBPACK_IMPORTED_MODULE_1___default()(`${booking.date}`).isBefore(currentDate)) {
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
        let previousStays = currentCustomer.bookings.filter(booking => dayjs__WEBPACK_IMPORTED_MODULE_1___default()(`${booking.date}`).isBefore(currentDate))
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
        let upcomingStays = currentCustomer.bookings.filter(booking => dayjs__WEBPACK_IMPORTED_MODULE_1___default()(`${booking.date}`).isAfter(currentDate))
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
        show(_DOMElements__WEBPACK_IMPORTED_MODULE_34__.modal)
        show(_DOMElements__WEBPACK_IMPORTED_MODULE_34__.placeholderImage);
        _DOMElements__WEBPACK_IMPORTED_MODULE_34__.dateSelect.setAttribute('min', currentDate)
    } else if(event.target.value === 'sign-out') {
        _DOMElements__WEBPACK_IMPORTED_MODULE_34__.accountMenu.value = 'reservations';
        hide(_DOMElements__WEBPACK_IMPORTED_MODULE_34__.mainDashboard)
        show(_DOMElements__WEBPACK_IMPORTED_MODULE_34__.loginPage)
    } else {
        _DOMElements__WEBPACK_IMPORTED_MODULE_34__.accountMenu.value = 'reservations';
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
    hide(_DOMElements__WEBPACK_IMPORTED_MODULE_34__.placeholderImage)
    formattedDate = dayjs__WEBPACK_IMPORTED_MODULE_1___default()(`${_DOMElements__WEBPACK_IMPORTED_MODULE_34__.dateSelect.value}`).format('YYYY/MM/DD')
    if (_DOMElements__WEBPACK_IMPORTED_MODULE_34__.roomTypeSelect.value === 'residential suite') {
        renderRooms('residential suite', formattedDate)
    } else if (_DOMElements__WEBPACK_IMPORTED_MODULE_34__.roomTypeSelect.value  === 'junior suite') {
        renderRooms('junior suite', formattedDate)
    } else if (_DOMElements__WEBPACK_IMPORTED_MODULE_34__.roomTypeSelect.value  === 'single room') {
        renderRooms('single room', formattedDate)
    } else if (_DOMElements__WEBPACK_IMPORTED_MODULE_34__.roomTypeSelect.value  === 'suite') {
        renderRooms('suite', formattedDate)
    }
}

const renderRooms = (type, date) => {
    hotel.findAvailableRooms(allBookings, date)
    _DOMElements__WEBPACK_IMPORTED_MODULE_34__.availableRooms.innerHTML = '';
    hotel.findAvailableRooms(allBookings, date).filter(room => 
            room.roomType === type).map(room => {
                return _DOMElements__WEBPACK_IMPORTED_MODULE_34__.availableRooms.innerHTML +=   
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
       formatPostDate = _DOMElements__WEBPACK_IMPORTED_MODULE_34__.dateSelect.value.split('-').join('/')
       addBooking(formatPostDate, bookedRoomNum)
  }
}

const addBooking = (date, room) => {
    newBooking = new _Booking__WEBPACK_IMPORTED_MODULE_3__.default ({
        "id": Date.now(),
        "userID": currentCustomer.id,
        "date": date,
        "roomNumber": room
    })
    currentCustomer.bookRoom(newBooking, allRooms)
    allBookings.push(newBooking)
    _apiCalls__WEBPACK_IMPORTED_MODULE_2__.default.postBooking(newBooking)
}

const onBookingSuccess = (event) => {
    renderSpent();
    roomsAvailable.innerHTML = '';
    roomsAvailable.innerHTML = `Your stay is booked! ${renderResoDate(newBooking)}`
    hide(_DOMElements__WEBPACK_IMPORTED_MODULE_34__.roomFilters)
    setTimeout(function() {
        renderSpent();
        closeModal();
        clearModal();
        renderReservations('upcoming');
        _DOMElements__WEBPACK_IMPORTED_MODULE_34__.resoOptions.value = 'upcoming';
        show(_DOMElements__WEBPACK_IMPORTED_MODULE_34__.roomFilters)
      }, 3000);

}

const clearModal = () => {
    _DOMElements__WEBPACK_IMPORTED_MODULE_34__.dateSelect.value = currentDate;
    _DOMElements__WEBPACK_IMPORTED_MODULE_34__.roomTypeSelect.value = 'choose-room';
    roomsAvailable.innerHTML = '';
    hide(_DOMElements__WEBPACK_IMPORTED_MODULE_34__.modal);
}

const closeModal = () => {
    clearModal();
    _DOMElements__WEBPACK_IMPORTED_MODULE_34__.accountMenu.value = 'reservations';
    _DOMElements__WEBPACK_IMPORTED_MODULE_34__.resoOptions.value = 'all-reservations';
    _DOMElements__WEBPACK_IMPORTED_MODULE_34__.error.innerText = '';
}

const show = (element) => {
    element.classList.remove('hidden');
}

const hide  = (element) => {
    element.classList.add('hidden');
}

/***/ }),
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_base_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_base_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_base_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),
/* 2 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 3 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_overlook_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);
// Imports




var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_images_overlook_jpg__WEBPACK_IMPORTED_MODULE_3__.default);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".login-header {\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 80px;\n  background-color: black;\n  opacity: 70%;\n  color: white;\n}\n.login-header h1 {\n  margin: 5px 0px 0px 0px;\n  text-decoration: 1px underline;\n  text-underline-offset: 8px;\n}\n.login-header p {\n  margin-top: 3px;\n  letter-spacing: 2px;\n}\n\n.login {\n  margin-top: 175px;\n  display: flex;\n  justify-content: center;\n}\n\n.login-content {\n  display: flex;\n  width: 45%;\n  height: 30%;\n  flex-direction: column;\n  align-items: center;\n  background-color: rgba(74, 116, 123, 0.9);\n  border-radius: 15px;\n  color: white;\n}\n.login-content p {\n  font-size: 18px;\n  margin-top: 27px;\n  width: 100%;\n  text-align: center;\n}\n.login-content button {\n  border-radius: 10px;\n  border: 1px solid rgba(74, 116, 123, 0.9);\n  width: 106px;\n  height: 30px;\n  margin: 8px 24px 0px 24px;\n  cursor: pointer;\n  font-family: \"Raleway\", sans-serif;\n  letter-spacing: 0.5px;\n}\n.login-content button:hover {\n  background-color: rgba(55, 52, 52, 0.94);\n  color: white;\n}\n\n.login-credentials {\n  display: flex;\n  flex-direction: column;\n  margin: 0px 0px 70px;\n}\n\n#username-input,\n#password-input {\n  margin: 0px 0px 16px;\n}\n\n.username-input,\n.password-input {\n  margin-bottom: 4px;\n}\n\n.grid-container {\n  height: 100vh;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-template-rows: 1fr 1fr 1fr;\n  grid-gap: 1rem;\n  grid-template-areas: \"aside section section\" \"aside section section\" \"aside section section\";\n  margin: 20px;\n}\n\n#reservationArea {\n  grid-area: aside;\n}\n\n#roomsDisplay {\n  grid-area: section;\n  display: flex;\n  flex-direction: column;\n  margin: 20px;\n  align-items: center;\n  overflow-y: scroll;\n}\n\n.reservation-details {\n  margin: 20px;\n  background-color: rgba(74, 116, 123, 0.9);\n  border-radius: 10px;\n  height: 425px;\n  width: 75%;\n  min-width: 300px;\n}\n\n.all-resos {\n  color: white;\n  display: flex;\n  flex-direction: column;\n  padding: 20px;\n}\n.all-resos h3 {\n  text-align: center;\n  text-decoration: 1.5px underline;\n  text-underline-offset: 11px;\n  letter-spacing: 3px;\n  font-size: 20px;\n  margin: 0px 0px 16px;\n}\n.all-resos .member {\n  margin: 6px 0px 3px 0px;\n}\n.all-resos .reward-points {\n  margin: 0px 0px 15px;\n}\n.all-resos button {\n  width: 110px;\n  height: 30px;\n  border-radius: 10px;\n  border: 1px solid rgba(74, 116, 123, 0.9);\n  cursor: pointer;\n  margin: 10px 0px;\n}\n.all-resos button:hover {\n  background-color: rgba(74, 116, 123, 0.9);\n  color: white;\n}\n.all-resos select {\n  font-family: \"Raleway\", sans-serif;\n  width: 171px;\n  height: 24px;\n  letter-spacing: 0.5px;\n  font-weight: 500;\n  cursor: pointer;\n}\n\nnav {\n  width: 100vw;\n  display: flex;\n  justify-content: space-between;\n  height: 80px;\n  background-color: black;\n  color: white;\n  opacity: 75%;\n  z-index: 5;\n}\n\nh1 {\n  margin: 12px;\n  font-size: 28px;\n  font-weight: 600;\n  font-family: \"Spectral\", serif;\n  font-style: italic;\n  letter-spacing: 1.2px;\n}\n\nh2 {\n  margin: 12px 0px 5px;\n  font-size: 20px;\n  font-style: italic;\n}\n\n.hotel-branding {\n  margin: 10px;\n}\n\n.user-nav {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  height: 80px;\n  margin: 0px 15px 0px 0px;\n}\n\n.account-options {\n  height: 25px;\n  width: 186px;\n  border-radius: 5px;\n  background-color: black;\n  color: white;\n  font-size: 14px;\n  border: 1px solid white;\n  cursor: pointer;\n  font-family: \"Raleway\", sans-serif;\n  font-weight: bold;\n  letter-spacing: 1px;\n}\n\n.reservation-card {\n  justify-content: space-between;\n  display: flex;\n  height: 220px;\n  width: 95%;\n  border-radius: 8px;\n  margin-bottom: 30px;\n}\n\n.room-photo {\n  height: 100%;\n  width: 40%;\n}\n.room-photo img {\n  height: 100%;\n  max-width: 80%;\n  object-fit: cover;\n  position: relative;\n}\n\n.reserved-room {\n  border-radius: 8px;\n  background-color: rgba(255, 255, 255, 0.92);\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.room-type {\n  color: black;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  height: 100%;\n  margin: 0px 20px 0px 20px;\n}\n.room-type h5 {\n  font-size: 22px;\n  font-weight: bold;\n  margin: 45px 0px 9px;\n  text-decoration: 1.5px underline;\n  text-underline-offset: 13px;\n  letter-spacing: 3px;\n}\n.room-type .room-beds {\n  margin: 15px 0px 2px 0px;\n}\n.room-type select {\n  width: 120px;\n  margin: 15px 0px 0px 0px;\n  letter-spacing: 0.5px;\n  font-family: \"Raleway\", sans-serif;\n  font-weight: 500;\n}\n\n.room-cost {\n  text-align: center;\n  color: black;\n  display: flex;\n  flex-direction: column;\n  width: 20%;\n  max-height: 100%;\n  justify-content: space-between;\n  align-self: baseline;\n}\n.room-cost p {\n  margin: 0px;\n}\n.room-cost .nightly-cost {\n  margin: 30px 0px 0px 0px;\n}\n.room-cost button {\n  border-radius: 10px;\n  border: 1px solid rgba(74, 116, 123, 0.9);\n  width: 106px;\n  height: 30px;\n  margin: 0px 17px 12px;\n  cursor: pointer;\n}\n.room-cost button:hover {\n  background-color: rgba(74, 116, 123, 0.9);\n  color: white;\n}\n\n.reso-date {\n  margin-top: 12px;\n}\n\n.modal {\n  display: flex;\n  align-items: center;\n  position: fixed;\n  width: 100%;\n  height: 100vh;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  justify-content: center;\n}\n\n.modal-content {\n  display: flex;\n  flex-direction: column;\n  background-color: white;\n  padding: 0px;\n  border: 1px solid #888;\n  width: 78%;\n  height: 65%;\n  overflow-y: scroll;\n  box-shadow: 0px 7px 29px 0px black;\n}\n\n.modal-header {\n  display: flex;\n  justify-content: space-between;\n}\n\n.room-filters-div {\n  margin: 8px;\n}\n\n.filter-rooms {\n  cursor: pointer;\n}\n\n#calendar {\n  cursor: pointer;\n}\n\n.close-modal {\n  padding: 4px 0px;\n  margin: 0px;\n  border: none;\n  background: white;\n  cursor: pointer;\n}\n\n.modal-X {\n  height: 32px;\n  width: 37px;\n}\n.modal-X:hover {\n  transform: scale(1.1);\n}\n\n.choose-stay {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  margin: 0px 10px 10px 10px;\n  justify-content: center;\n}\n\n.room-card {\n  justify-content: space-between;\n  display: flex;\n  height: 220px;\n  width: 95%;\n  border-radius: 8px;\n  margin-bottom: 30px;\n}\n.room-card .room-type {\n  color: white;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  height: 100%;\n}\n.room-card .room-type h5 {\n  font-size: 22px;\n  margin: 0px 0px 5px 0px;\n  text-decoration: 1.5px underline;\n  text-underline-offset: 11px;\n  letter-spacing: 3px;\n}\n.room-card .room-type .details {\n  margin: 16px 0px 0px 0px;\n}\n.room-card .room-type .beds {\n  margin: 4px 0px 0px 0px;\n}\n\n.booking-photo {\n  width: 40%;\n  height: 100%;\n}\n.booking-photo img {\n  height: 100%;\n  max-width: 80%;\n  object-fit: cover;\n  position: relative;\n}\n\n.available-room {\n  background-color: rgba(55, 52, 52, 0.94);\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.rooms-available {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.rooms-placeholder {\n  max-width: 100%;\n  max-height: 85%;\n  object-fit: cover;\n}\n\n.cost {\n  color: white;\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  margin-right: 45px;\n}\n.cost p {\n  margin: 0px;\n}\n.cost button {\n  letter-spacing: 1px;\n  font-family: \"Raleway\", sans-serif;\n  font-weight: 500;\n  width: 110px;\n  height: 30px;\n  border-radius: 10px;\n  border: 1px solid rgba(74, 116, 123, 0.9);\n  cursor: pointer;\n  margin-top: 17px;\n}\n.cost button:hover {\n  background-color: rgba(74, 116, 123, 0.9);\n  color: white;\n}\n\n.search-rooms {\n  font-family: \"Raleway\", sans-serif;\n  letter-spacing: 0.5px;\n  border-radius: 10px;\n  border: 1px solid rgba(74, 116, 123, 0.9);\n  margin-left: 4px;\n  height: 28px;\n  width: 183px;\n}\n.search-rooms:hover {\n  cursor: pointer;\n  background-color: rgba(55, 52, 52, 0.94);\n  color: white;\n}\n\nhtml {\n  height: 100vh;\n}\n\nbody {\n  font-family: \"Raleway\", sans-serif;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat;\n  background-attachment: fixed;\n  background-size: cover;\n  margin: 0;\n  height: 100vh;\n}\n\n.dashboard-view {\n  height: 100vh;\n}\n\n.hidden {\n  display: none;\n}\n\n@media only screen and (max-width: 1000px) {\n  nav {\n    height: unset;\n  }\n\n  h1, h2 {\n    font-size: 20px;\n  }\n\n  .grid-container {\n    grid-template-columns: 1fr;\n    grid-template-rows: 0.08fr 1fr 1fr 1fr 1fr;\n    grid-template-areas: \"aside\" \"section\" \"section\" \"section\" \"section\";\n  }\n\n  .reserved-room {\n    margin-bottom: 20px;\n  }\n\n  .room-card .room-type h5 {\n    text-decoration: none;\n  }\n\n  .reservation-details {\n    height: 213px;\n    width: 90%;\n  }\n\n  #reservationArea {\n    display: flex;\n    justify-content: center;\n  }\n}\n@media only screen and (max-width: 480px) {\n  nav {\n    height: unset;\n  }\n\n  h1, h2 {\n    font-size: 16px;\n  }\n\n  .grid-container {\n    grid-template-columns: 1fr;\n    grid-template-rows: 0.08fr 1fr 1fr 1fr 1fr;\n    grid-template-areas: \"aside\" \"section\" \"section\" \"section\" \"section\";\n  }\n\n  .reserved-room {\n    margin-bottom: 20px;\n    display: flex;\n    flex-direction: column;\n  }\n  .reserved-room h5 {\n    text-decoration: none;\n  }\n\n  .room-card .room-type h5 {\n    text-decoration: none;\n  }\n\n  .reservation-details {\n    height: 213px;\n    width: 90%;\n    padding-bottom: 10px;\n  }\n\n  .reservation-details div {\n    display: flex;\n    flex-flow: wrap;\n  }\n\n  .room-photo {\n    display: none;\n  }\n}", "",{"version":3,"sources":["webpack://./src/css/_login.scss","webpack://./src/css/_variables.scss","webpack://./src/css/base.scss","webpack://./src/css/_grid.scss","webpack://./src/css/_aside.scss","webpack://./src/css/_nav.scss","webpack://./src/css/_reserved-room.scss","webpack://./src/css/_modal.scss","webpack://./src/css/_media.scss"],"names":[],"mappings":"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","sourcesContent":[".login-header {\n    margin: 0;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    height: 80px;\n    background-color: $black;\n    opacity: 70%;\n    color: $white;\n  \n    h1 {\n      margin: 5px 0px 0px 0px;\n      text-decoration: 1px underline;\n      text-underline-offset: 8px;\n    }\n    \n    p {\n      margin-top: 3px;\n      letter-spacing: 2px;\n    }\n  \n  }\n  \n  .login {\n    margin-top: 175px;\n    display: flex;\n    justify-content: center;\n  }\n  \n  .login-content {\n    display: flex;\n    width: 45%;\n    height: 30%;\n    flex-direction: column;\n    align-items: center;\n    background-color: rgba(74, 116, 123, 0.90);\n      border-radius: 15px;\n      color: $white;\n  \n    p {\n      font-size: 18px;\n      margin-top: 27px;\n      width: 100%;\n      text-align: center;\n    }\n  \n    button {\n      border-radius: 10px;\n      border: 1px solid $teal;\n      width: 106px;\n      height: 30px;\n      margin: 8px 24px 0px 24px;\n      cursor: pointer;\n      font-family: $main-font;\n      letter-spacing: .5px;\n  \n      &:hover{\n        background-color: $room-card;\n        color: $white;\n      }\n    }\n  }\n  \n  \n  .login-credentials {\n    display: flex;\n    flex-direction: column;\n    margin: 0px 0px 70px;\n  }\n  \n  #username-input, \n  #password-input {\n    margin: 0px 0px 16px;\n  }\n  \n  .username-input,\n  .password-input {\n    margin-bottom: 4px;\n  }\n  \n  \n  ","$teal: rgba(74, 116, 123, 0.90);\n$black: black;\n$white: white;\n$room-card: rgba(55, 52, 52, 0.94);\n$fancy-font: 'Spectral', serif;\n$main-font: 'Raleway', sans-serif;\n","@import 'variables';\n@import 'login';\n@import 'grid';\n@import 'aside';\n@import 'nav';\n@import 'reserved-room';\n@import 'modal';\n\nhtml {\n  height: 100vh;\n}\n\nbody {\n  font-family: $main-font;\n  background: url(../images/overlook.jpg) no-repeat;\n  background-attachment: fixed;\n  background-size: cover;\n  margin: 0;\n  height: 100vh;\n}\n\n.dashboard-view {\n  height: 100vh;\n}\n\n.hidden {\n  display: none;\n}\n\n@import 'media';","\n.grid-container {\n    height: 100vh;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-template-rows: 1fr 1fr 1fr;\n    grid-gap: 1rem;\n    grid-template-areas:\n    'aside section section' \n    'aside section section' \n    'aside section section';\n    margin: 20px;\n  }\n  \n  #reservationArea {\n    grid-area: aside;\n  }\n\n  #roomsDisplay {\n    grid-area: section;\n    display: flex;\n    flex-direction: column;\n    margin: 20px;\n    align-items: center;\n    overflow-y: scroll;\n  }","\n.reservation-details {\n  margin: 20px;\n  background-color: $teal;\n  border-radius: 10px;\n  height: 425px;\n  width: 75%;\n  min-width: 300px;\n}\n\n.all-resos {\n    color: $white;\n    display: flex;\n    flex-direction: column;\n    padding: 20px;\n  \n      h3 {\n        text-align: center;\n        text-decoration: 1.5px underline;\n        text-underline-offset: 11px;\n        letter-spacing: 3px;\n        font-size: 20px;\n        margin: 0px 0px 16px;\n      }\n  \n      .member {\n        margin: 6px 0px 3px 0px;\n      }\n  \n      .reward-points {\n        margin: 0px 0px 15px;\n      }\n  \n      button {\n        width: 110px;\n        height: 30px;\n        border-radius: 10px;\n        border: 1px solid $teal;\n        cursor: pointer;\n        margin: 10px 0px;\n  \n        &:hover {\n          background-color: $teal;\n          color: $white;\n        }\n      }\n  \n      select {\n        font-family: $main-font;\n        width: 171px;\n        height: 24px;\n        letter-spacing: .5px;\n        font-weight: 500;\n        cursor: pointer;\n      }\n  }\n  ","nav {\n    width: 100vw;\n    display: flex;\n    justify-content: space-between;\n    height: 80px;\n    background-color: $black;\n    color: $white;\n    opacity: 75%;\n    z-index: 5;\n  }\n\n  h1 {\n    margin: 12px;\n    font-size: 28px;\n    font-weight: 600;\n    font-family: $fancy-font;\n    font-style: italic;\n    letter-spacing: 1.2px;\n  }\n  \n  h2 {\n    margin: 12px 0px 5px;\n    font-size: 20px;\n    font-style: italic;\n  }\n  \n  .hotel-branding {\n    margin: 10px;\n  }\n  \n\n  .user-nav {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-end;\n    height: 80px;\n    margin: 0px 15px 0px 0px;\n  }\n  \n  \n  .account-options {\n      height: 25px;\n      width: 186px;\n      border-radius: 5px;\n      background-color: $black;\n      color: $white;\n      font-size: 14px;\n      border: 1px solid $white;\n      cursor: pointer;\n      font-family: $main-font;\n      font-weight: bold;\n      letter-spacing: 1px;\n  }\n  ",".reservation-card {\n    justify-content: space-between;\n    display: flex;\n    height: 220px;\n    width: 95%;\n    border-radius: 8px;\n    margin-bottom: 30px;\n\n  }\n  \n  .room-photo {\n    height: 100%;\n    width: 40%;\n    \n    img {\n      height: 100%;\n      max-width: 80%;\n      object-fit: cover;\n      position: relative;\n    }\n  }\n  \n  .reserved-room {\n    border-radius: 8px;\n    background-color: rgba(255, 255, 255, 0.92);\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n  }\n  \n  .room-type {\n    color: $black;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    height: 100%;\n    margin: 0px 20px 0px 20px;\n  \n    h5 {\n      font-size: 22px;\n      font-weight: bold;\n      margin: 45px 0px 9px;\n      text-decoration: 1.5px underline;\n      text-underline-offset: 13px;\n      letter-spacing: 3px;\n    }\n    \n    .room-beds {\n      margin: 15px 0px 2px 0px;\n    }\n  \n    select {\n      width: 120px;\n      margin: 15px 0px 0px 0px;\n      letter-spacing: .5px;\n      font-family: $main-font;\n      font-weight: 500;\n    }\n  }\n  \n  .room-cost {\n    text-align: center;\n    color: $black;\n    display: flex;\n    flex-direction: column;\n    width: 20%;\n    max-height: 100%;\n    justify-content: space-between;\n    align-self: baseline;\n\n      p {\n        margin: 0px;\n      }\n      .nightly-cost {\n        margin: 30px 0px 0px 0px;\n      }\n  \n      button {\n        border-radius: 10px;\n        border: 1px solid $teal;\n        width: 106px;\n        height: 30px;\n        margin: 0px 17px 12px;\n        cursor: pointer;\n  \n          &:hover {\n            background-color: $teal;\n            color: $white\n          }\n      }\n  }\n  \n  .reso-date {\n    margin-top: 12px;\n  }\n  ",".modal {\n    display: flex;\n    align-items: center;\n    position: fixed;\n    width: 100%;\n    height: 100vh;\n    z-index: 1;\n    top: 0;\n    left: 0;\n    background-color: rgba(0, 0, 0, 0.5);\n    justify-content: center;\n  }\n  \n  .modal-content {\n    display: flex;\n    flex-direction: column;\n    background-color: $white;\n    padding: 0px;\n    border: 1px solid #888;\n    width: 78%;\n    height: 65%;\n    overflow-y: scroll;\n    box-shadow: 0px 7px 29px 0px $black;\n  }\n  \n  .modal-header {\n    display: flex;\n    justify-content: space-between;\n  }\n  \n  .room-filters-div {\n    margin: 8px;\n  }\n  \n  .filter-rooms {\n    cursor: pointer;\n  }\n  \n  #calendar {\n    cursor: pointer;\n  }\n  \n  .close-modal {\n    padding: 4px 0px;\n    margin: 0px;\n    border: none;\n    background: $white;\n    cursor: pointer;\n  }\n  \n  .modal-X{\n    height: 32px;\n    width: 37px;\n  \n      &:hover{\n        transform: scale(1.1)\n      }\n  }\n  \n  .choose-stay {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    margin: 0px 10px 10px 10px;\n    justify-content: center;\n  }\n  \n  .room-card {\n    justify-content: space-between;\n    display: flex;\n    height: 220px;\n    width: 95%;\n    border-radius: 8px;\n    margin-bottom: 30px;\n\n    .room-type {\n      color: $white;\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      height: 100%;\n\n      h5 {\n        font-size: 22px;\n        margin: 0px 0px 5px 0px;\n        text-decoration: 1.5px underline;\n        text-underline-offset: 11px;\n        letter-spacing: 3px;\n      }\n\n      .details {\n        margin: 16px 0px 0px 0px;\n      }\n\n      .beds {\n        margin: 4px 0px 0px 0px;\n      }\n    }\n  }\n\n  .booking-photo {\n    width: 40%;\n    height: 100%;\n\n    img {\n      height: 100%;\n      max-width: 80%;\n      object-fit: cover;\n      position: relative;\n    }\n  }\n  \n  .available-room {\n    background-color: $room-card;\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n  }\n  \n  .rooms-available {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  .rooms-placeholder {\n    max-width: 100%;\n    max-height: 85%;\n    object-fit: cover;\n  }\n\n  .cost {\n    color: $white;\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n    margin-right: 45px;\n\n    p {\n      margin: 0px;\n    }\n\n    button {\n      letter-spacing: 1px;\n      font-family: $main-font;\n      font-weight: 500;\n      width: 110px;\n      height: 30px;\n      border-radius: 10px;\n      border: 1px solid $teal;\n      cursor: pointer;\n      margin-top: 17px;\n\n      &:hover {\n        background-color: $teal;\n        color: $white;\n      }\n    }\n  }\n\n  .search-rooms {\n    font-family: $main-font;\n    letter-spacing: .5px;\n    border-radius: 10px;\n    border: 1px solid $teal;\n    margin-left: 4px;\n    height: 28px;\n    width: 183px;\n\n    &:hover {\n      cursor: pointer;\n      background-color: $room-card;\n      color: $white;\n    }\n  }","@media only screen and (max-width: 1000px) {\n\n  nav {\n    height: unset;\n  }\n\n  h1, h2 {\n    font-size: 20px;\n  }\n\n  .grid-container {\n      grid-template-columns: 1fr;\n      grid-template-rows: .08fr 1fr 1fr 1fr 1fr;\n      grid-template-areas:\n      \"aside\"\n      \"section\"\n      \"section\"\n      \"section\"\n      \"section\";\n    }\n\n  .reserved-room {\n      margin-bottom: 20px;\n  }\n\n  .room-card .room-type h5 {\n    text-decoration: none;\n  }\n  \n  .reservation-details {\n      height: 213px;\n      width: 90%;\n  }\n\n  #reservationArea {\n    display: flex;\n    justify-content: center;\n  }\n}\n\n  @media only screen and (max-width: 480px) {\n\n    nav {\n      height: unset;\n    }\n  \n    h1, h2 {\n      font-size: 16px;\n    }\n\n    .grid-container {\n        grid-template-columns: 1fr;\n        grid-template-rows: .08fr 1fr 1fr 1fr 1fr;\n        grid-template-areas:\n        \"aside\"\n        \"section\"\n        \"section\"\n        \"section\"\n        \"section\";\n      }\n\n    .reserved-room {\n        margin-bottom: 20px;\n        display: flex;\n        flex-direction: column;\n\n        h5 {\n          text-decoration: none;\n        }\n    }\n\n    .room-card .room-type h5 {\n      text-decoration: none;\n    }\n\n    .reservation-details {\n        height: 213px;\n        width: 90%;\n        padding-bottom: 10px;\n    }\n\n    .reservation-details div {\n      display: flex;\n      flex-flow: wrap;\n    }\n\n    .room-photo {\n      display: none;\n    }\n  }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 4 */
/***/ ((module) => {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),
/* 5 */
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),
/* 6 */
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== "string") {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),
/* 7 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/overlook.jpg");

/***/ }),
/* 8 */
/***/ (function(module) {

!function(t,e){ true?module.exports=e():0}(this,(function(){"use strict";var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",u="hour",a="day",o="week",f="month",h="quarter",c="year",d="date",$="Invalid Date",l=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,y=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,M={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},m=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},g={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+m(r,2,"0")+":"+m(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,f),s=n-i<0,u=e.clone().add(r+(s?-1:1),f);return+(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:f,y:c,w:o,d:a,D:d,h:u,m:s,s:i,ms:r,Q:h}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},D="en",v={};v[D]=M;var p=function(t){return t instanceof _},S=function(t,e,n){var r;if(!t)return D;if("string"==typeof t)v[t]&&(r=t),e&&(v[t]=e,r=t);else{var i=t.name;v[i]=t,r=i}return!n&&r&&(D=r),r||!n&&D},w=function(t,e){if(p(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new _(n)},O=g;O.l=S,O.i=p,O.w=function(t,e){return w(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var _=function(){function M(t){this.$L=S(t.locale,null,!0),this.parse(t)}var m=M.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(O.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(l);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},m.$utils=function(){return O},m.isValid=function(){return!(this.$d.toString()===$)},m.isSame=function(t,e){var n=w(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return w(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<w(t)},m.$g=function(t,e,n){return O.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,r=!!O.u(e)||e,h=O.p(t),$=function(t,e){var i=O.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(a)},l=function(t,e){return O.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},y=this.$W,M=this.$M,m=this.$D,g="set"+(this.$u?"UTC":"");switch(h){case c:return r?$(1,0):$(31,11);case f:return r?$(1,M):$(0,M+1);case o:var D=this.$locale().weekStart||0,v=(y<D?y+7:y)-D;return $(r?m-v:m+(6-v),M);case a:case d:return l(g+"Hours",0);case u:return l(g+"Minutes",1);case s:return l(g+"Seconds",2);case i:return l(g+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var n,o=O.p(t),h="set"+(this.$u?"UTC":""),$=(n={},n[a]=h+"Date",n[d]=h+"Date",n[f]=h+"Month",n[c]=h+"FullYear",n[u]=h+"Hours",n[s]=h+"Minutes",n[i]=h+"Seconds",n[r]=h+"Milliseconds",n)[o],l=o===a?this.$D+(e-this.$W):e;if(o===f||o===c){var y=this.clone().set(d,1);y.$d[$](l),y.init(),this.$d=y.set(d,Math.min(this.$D,y.daysInMonth())).$d}else $&&this.$d[$](l);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[O.p(t)]()},m.add=function(r,h){var d,$=this;r=Number(r);var l=O.p(h),y=function(t){var e=w($);return O.w(e.date(e.date()+Math.round(t*r)),$)};if(l===f)return this.set(f,this.$M+r);if(l===c)return this.set(c,this.$y+r);if(l===a)return y(1);if(l===o)return y(7);var M=(d={},d[s]=e,d[u]=n,d[i]=t,d)[l]||1,m=this.$d.getTime()+r*M;return O.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this;if(!this.isValid())return $;var n=t||"YYYY-MM-DDTHH:mm:ssZ",r=O.z(this),i=this.$locale(),s=this.$H,u=this.$m,a=this.$M,o=i.weekdays,f=i.months,h=function(t,r,i,s){return t&&(t[r]||t(e,n))||i[r].substr(0,s)},c=function(t){return O.s(s%12||12,t,"0")},d=i.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},l={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:O.s(a+1,2,"0"),MMM:h(i.monthsShort,a,f,3),MMMM:h(f,a),D:this.$D,DD:O.s(this.$D,2,"0"),d:String(this.$W),dd:h(i.weekdaysMin,this.$W,o,2),ddd:h(i.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:O.s(s,2,"0"),h:c(1),hh:c(2),a:d(s,u,!0),A:d(s,u,!1),m:String(u),mm:O.s(u,2,"0"),s:String(this.$s),ss:O.s(this.$s,2,"0"),SSS:O.s(this.$ms,3,"0"),Z:r};return n.replace(y,(function(t,e){return e||l[t]||r.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(r,d,$){var l,y=O.p(d),M=w(r),m=(M.utcOffset()-this.utcOffset())*e,g=this-M,D=O.m(this,M);return D=(l={},l[c]=D/12,l[f]=D,l[h]=D/3,l[o]=(g-m)/6048e5,l[a]=(g-m)/864e5,l[u]=g/n,l[s]=g/e,l[i]=g/t,l)[y]||g,$?D:O.a(D)},m.daysInMonth=function(){return this.endOf(f).$D},m.$locale=function(){return v[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=S(t,e,!0);return r&&(n.$L=r),n},m.clone=function(){return O.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},M}(),b=_.prototype;return w.prototype=b,[["$ms",r],["$s",i],["$m",s],["$H",u],["$W",a],["$M",f],["$y",c],["$D",d]].forEach((function(t){b[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),w.extend=function(t,e){return t.$i||(t(e,_,w),t.$i=!0),w},w.locale=S,w.isDayjs=p,w.unix=function(t){return w(1e3*t)},w.en=v[D],w.Ls=v,w.p={},w}));

/***/ }),
/* 9 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _scripts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _DOMelements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);



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
    .then((event) => (0,_scripts__WEBPACK_IMPORTED_MODULE_0__.onBookingSuccess)(event))
    .catch((err) => displayError(err));
  }

//   ERROR HANDLING

const displayError = (errorMessage) => {
    const bookingError =  document.getElementById('bookingError');
    const message = errorMessage.message === 'Failed to fetch' ?
      "Internet connection may be unstable. Check again in a moment please." : errorMessage;
    bookingError.innerText = `Something went wrong, please try again later.`;
    _DOMelements__WEBPACK_IMPORTED_MODULE_1__.loginBox.innerHTML = `<h2><strong>Sorry, we seem to be experiencing some
    technical difficulties. Please check back later.</strong></h2>`
}

const checkForError = (response) => {
    if (!response.ok) {
        throw new Error('Something went wrong, please try again later.');
    } else {
        return response.json();
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ getData , postBooking, displayError });

/***/ }),
/* 10 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "userLogin": () => (/* binding */ userLogin),
/* harmony export */   "loginBtn": () => (/* binding */ loginBtn),
/* harmony export */   "loginError": () => (/* binding */ loginError),
/* harmony export */   "password": () => (/* binding */ password),
/* harmony export */   "loginPage": () => (/* binding */ loginPage),
/* harmony export */   "mainDashboard": () => (/* binding */ mainDashboard),
/* harmony export */   "userGreeting": () => (/* binding */ userGreeting),
/* harmony export */   "totalSpent": () => (/* binding */ totalSpent),
/* harmony export */   "rewardPoints": () => (/* binding */ rewardPoints),
/* harmony export */   "resoOptions": () => (/* binding */ resoOptions),
/* harmony export */   "accountMenu": () => (/* binding */ accountMenu),
/* harmony export */   "modal": () => (/* binding */ modal),
/* harmony export */   "dateSelect": () => (/* binding */ dateSelect),
/* harmony export */   "placeholderImage": () => (/* binding */ placeholderImage),
/* harmony export */   "searchRooms": () => (/* binding */ searchRooms),
/* harmony export */   "roomTypeSelect": () => (/* binding */ roomTypeSelect),
/* harmony export */   "availableRooms": () => (/* binding */ availableRooms),
/* harmony export */   "modalX": () => (/* binding */ modalX),
/* harmony export */   "error": () => (/* binding */ error),
/* harmony export */   "loginBox": () => (/* binding */ loginBox),
/* harmony export */   "roomFilters": () => (/* binding */ roomFilters),
/* harmony export */   "nf": () => (/* binding */ nf)
/* harmony export */ });
const userLogin = document.getElementById('username-input')
const loginBtn = document.getElementById('loginBtn')
const loginError = document.getElementById('loginError')
const password = document.getElementById('password-input')
const loginPage = document.getElementById('loginPage')
const mainDashboard = document.getElementById('dashboardView')
const userGreeting = document.getElementById('userGreeting')
const totalSpent = document.getElementById('totalSpent')
const rewardPoints = document.getElementById('rewardPoints')
const resoOptions = document.getElementById('viewResos')
const accountMenu = document.getElementById('accountOptions')
const modal = document.getElementById('modal')
const dateSelect = document.getElementById('calendar')
const placeholderImage = document.getElementById('roomsPlaceholder')
const searchRooms = document.getElementById('searchRooms')
const roomTypeSelect = document.getElementById('filterRooms')
const availableRooms = document.getElementById('roomsAvailable')
const modalX = document.getElementById('close')
const error = document.getElementById('bookingError')
const loginBox = document.getElementById('loginContent')
const roomFilters = document.getElementById('chooseStay')
const nf = Intl.NumberFormat();


/***/ }),
/* 11 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Booking {
    constructor(bookingData) {
      this.id = bookingData.id,
      this.userID = bookingData.userID,
      this.date = bookingData.date,
      this.roomNumber = bookingData.roomNumber
    }
  }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Booking);


/***/ }),
/* 12 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _src_Hotel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);
/* harmony import */ var _src_Booking__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var _src_Room__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14);




class Customer {
    constructor(customerData, bookings) {
        this.id = customerData.id
        this.name = customerData.name
        this.username = `customer${customerData.id}`
        this.bookings = bookings;
        this.amountSpent = 0
    }
    
    getFirstName() {
        const name = this.name.split(' ');
        return name[0];
    }

    calculateTotalSpent(rooms) {
        let spent = 0;
        let roomsBooked = [];
        this.bookings.forEach(booking => {
            rooms.find(room => {
                if(booking.roomNumber === room.number) {
                    roomsBooked.push(room)
                }
        })
    })
       let cost = roomsBooked.reduce((totalCost, room) => {
           totalCost += room.costPerNight
           return totalCost
       }, 0)
    
    this.amountSpent = cost.toFixed(2)
    return this.amountSpent
    }

    correlateBookingCost(rooms, booking) {
    let bookedRoom = new _src_Room__WEBPACK_IMPORTED_MODULE_2__.default(rooms)
    bookedRoom = rooms.find(room => room.number === booking.roomNumber)
    return bookedRoom.costPerNight
    }

    bookRoom(booking, rooms) {
        this.bookings.push(booking)
        this.amountSpent += this.correlateBookingCost(rooms, booking)
    }

    sortBookingsByDate() {
    this.bookings.sort((a, b) => {
        return a.date > b.date ? -1 : 1;
        })
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Customer);


/***/ }),
/* 13 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Booking__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);


class Hotel {
  constructor(customers, rooms) {
    this.customers = customers;
    this.rooms = rooms
  }
    
  findAvailableRooms(bookings, date) {
    let reserved = bookings.filter(booking => {
      return booking.date === date;
    });
    let availableRooms = this.rooms.reduce((acc, room) => {
      let isBooked = false;
      reserved.forEach(booking => {
        if (room.number === booking.roomNumber) {
          isBooked = true
        }
      });
      if (!isBooked) {
        acc.push(room)
      }
      return acc;
    }, []);
    return availableRooms;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Hotel);


/***/ }),
/* 14 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Room {
    constructor(roomData) {
      this.number = roomData.number,
      this.roomType = roomData.roomType,
      this.bidet = roomData.bidet,
      this.bedSize = roomData.bedSize,
      this.numBeds = roomData.numBeds,
      this.costPerNight = roomData.costPerNight
    }
}
 
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Room);

/***/ }),
/* 15 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/main-photo.jpg");

/***/ }),
/* 16 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/Room1.jpg");

/***/ }),
/* 17 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/Room2.jpg");

/***/ }),
/* 18 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/Room3.jpg");

/***/ }),
/* 19 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/Room4.jpg");

/***/ }),
/* 20 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/Room5.jpg");

/***/ }),
/* 21 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/Room6.jpg");

/***/ }),
/* 22 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/Room7.jpg");

/***/ }),
/* 23 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/Room8.jpg");

/***/ }),
/* 24 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/Room9.jpg");

/***/ }),
/* 25 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/Room10.jpg");

/***/ }),
/* 26 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/Room11.jpg");

/***/ }),
/* 27 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/Room12.jpg");

/***/ }),
/* 28 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/Room13.jpg");

/***/ }),
/* 29 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/Room14.jpg");

/***/ }),
/* 30 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/Room15.jpg");

/***/ }),
/* 31 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/Room16.jpg");

/***/ }),
/* 32 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/Room17.jpg");

/***/ }),
/* 33 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/Room18.jpg");

/***/ }),
/* 34 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/Room19.jpg");

/***/ }),
/* 35 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/Room20.jpg");

/***/ }),
/* 36 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/Room21.jpg");

/***/ }),
/* 37 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/Room22.jpg");

/***/ }),
/* 38 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/Room23.jpg");

/***/ }),
/* 39 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/Room24.jpg");

/***/ }),
/* 40 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/Room25.jpg");

/***/ }),
/* 41 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "userLogin": () => (/* binding */ userLogin),
/* harmony export */   "loginBtn": () => (/* binding */ loginBtn),
/* harmony export */   "loginError": () => (/* binding */ loginError),
/* harmony export */   "password": () => (/* binding */ password),
/* harmony export */   "loginPage": () => (/* binding */ loginPage),
/* harmony export */   "mainDashboard": () => (/* binding */ mainDashboard),
/* harmony export */   "userGreeting": () => (/* binding */ userGreeting),
/* harmony export */   "totalSpent": () => (/* binding */ totalSpent),
/* harmony export */   "rewardPoints": () => (/* binding */ rewardPoints),
/* harmony export */   "resoOptions": () => (/* binding */ resoOptions),
/* harmony export */   "accountMenu": () => (/* binding */ accountMenu),
/* harmony export */   "modal": () => (/* binding */ modal),
/* harmony export */   "dateSelect": () => (/* binding */ dateSelect),
/* harmony export */   "placeholderImage": () => (/* binding */ placeholderImage),
/* harmony export */   "searchRooms": () => (/* binding */ searchRooms),
/* harmony export */   "roomTypeSelect": () => (/* binding */ roomTypeSelect),
/* harmony export */   "availableRooms": () => (/* binding */ availableRooms),
/* harmony export */   "modalX": () => (/* binding */ modalX),
/* harmony export */   "error": () => (/* binding */ error),
/* harmony export */   "loginBox": () => (/* binding */ loginBox),
/* harmony export */   "roomFilters": () => (/* binding */ roomFilters),
/* harmony export */   "nf": () => (/* binding */ nf)
/* harmony export */ });
const userLogin = document.getElementById('username-input')
const loginBtn = document.getElementById('loginBtn')
const loginError = document.getElementById('loginError')
const password = document.getElementById('password-input')
const loginPage = document.getElementById('loginPage')
const mainDashboard = document.getElementById('dashboardView')
const userGreeting = document.getElementById('userGreeting')
const totalSpent = document.getElementById('totalSpent')
const rewardPoints = document.getElementById('rewardPoints')
const resoOptions = document.getElementById('viewResos')
const accountMenu = document.getElementById('accountOptions')
const modal = document.getElementById('modal')
const dateSelect = document.getElementById('calendar')
const placeholderImage = document.getElementById('roomsPlaceholder')
const searchRooms = document.getElementById('searchRooms')
const roomTypeSelect = document.getElementById('filterRooms')
const availableRooms = document.getElementById('roomsAvailable')
const modalX = document.getElementById('close')
const error = document.getElementById('bookingError')
const loginBox = document.getElementById('loginContent')
const roomFilters = document.getElementById('chooseStay')
const nf = Intl.NumberFormat();


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(0);
/******/ 	
/******/ })()
;
//# sourceMappingURL=bundle.js.map