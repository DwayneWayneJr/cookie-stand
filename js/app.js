
//storeHours
var storeHrs = ['6:00 am', '7:00 am', '8:00 am', '9:00 am', '10:00 am', '11:00 am', '12:00 pm', '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm', '6:00 pm', '7:00 pm', '8:00 pm'];

//storeArray
// var storeArray = [seattle, tokyo, three, four, five];

var seattle = {
  name: 'Seattle',
  minCustHr: 23,
  maxCustHr: 65,
  avgCookieSale: 6.4,
  salesPerHr: [],
  totalCookies: 0,
  calcCookieSold: function () {
    for (var i = 0; i < storeHrs.length; i++) {
      var cookies = Math.floor(randoNum(this.minCustHr, this.maxCustHr) * this.avgCookieSale);
      this.totalCookies += cookies;
      this.salesPerHr.push(cookies);
    }
  },
  renderName: function () {
    var nameProp = document.getElementById('storeContainer');
    var ulElement = document.createElement('ul');
    ulElement.textContent = `${this.name}`;
    nameProp.appendChild(ulElement);
  },
};
seattle.calcCookieSold();
console.log(seattle)

// Randon number function
function randoNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(randoNum(2, 7));


function domManip(object) {
  var parentContainer = document.getElementById('storeContainer');
  var ulElement = document.createElement('ul');
  for (var i = 0; i < storeHrs.length; i++) {
    var liElement = document.createElement('li');
    liElement.textContent = `${storeHrs[i]}: ${object.salesPerHr[i]} cookies`;
    ulElement.appendChild(liElement);
  }
  liElement = document.createElement('li');
  liElement.textContent = `Total Cookies: ${object.totalCookies}`;
  ulElement.appendChild(liElement);
  parentContainer.appendChild(ulElement);
}



seattle.renderName();
domManip(seattle);

var tokyo = {
  name: 'Tokyo',
  minCustHr: 3,
  maxCustHr: 24,
  avgCookieSale: 1.2,
  salesPerHr: [],
  totalCookies: 0,
  calcCookieSold: function () {
    for (var i = 0; i < storeHrs.length; i++) {
      var cookies = Math.floor(randoNum(this.minCustHr, this.maxCustHr) * this.avgCookieSale);
      this.totalCookies += cookies;
      this.salesPerHr.push(cookies);
    }
  },
  renderName: function () {
    var nameProp = document.getElementById('storeContainer');
    var ulElement = document.createElement('ul');
    ulElement.textContent = `${this.name}`;
    nameProp.appendChild(ulElement);
  },
};
tokyo.calcCookieSold();
console.log(tokyo)

// Randon number function
function randoNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(randoNum(2, 7));


function domManip(object) {
  var parentContainer = document.getElementById('storeContainer');
  var ulElement = document.createElement('ul');
  for (var i = 0; i < storeHrs.length; i++) {
    var liElement = document.createElement('li');
    liElement.textContent = `${storeHrs[i]}: ${object.salesPerHr[i]} cookies`;
    ulElement.appendChild(liElement);
  }
  liElement = document.createElement('li');
  liElement.textContent = `Total Cookies: ${object.totalCookies}`;
  ulElement.appendChild(liElement);
  parentContainer.appendChild(ulElement);
}



tokyo.renderName();
domManip(tokyo);

var dubai = {
  name: 'Dubai',
  minCustHr: 11,
  maxCustHr: 38,
  avgCookieSale: 3.7,
  salesPerHr: [],
  totalCookies: 0,
  calcCookieSold: function () {
    for (var i = 0; i < storeHrs.length; i++) {
      var cookies = Math.floor(randoNum(this.minCustHr, this.maxCustHr) * this.avgCookieSale);
      this.totalCookies += cookies;
      this.salesPerHr.push(cookies);
    }
  },
  renderName: function () {
    var nameProp = document.getElementById('storeContainer');
    var ulElement = document.createElement('ul');
    ulElement.textContent = `${this.name}`;
    nameProp.appendChild(ulElement);
  },
};
dubai.calcCookieSold();
console.log(tokyo)

// Randon number function
function randoNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(randoNum(2, 7));


function domManip(object) {
  var parentContainer = document.getElementById('storeContainer');
  var ulElement = document.createElement('ul');
  for (var i = 0; i < storeHrs.length; i++) {
    var liElement = document.createElement('li');
    liElement.textContent = `${storeHrs[i]}: ${object.salesPerHr[i]} cookies`;
    ulElement.appendChild(liElement);
  }
  liElement = document.createElement('li');
  liElement.textContent = `Total Cookies: ${object.totalCookies}`;
  ulElement.appendChild(liElement);
  parentContainer.appendChild(ulElement);
}



dubai.renderName();
domManip(dubai);

//  var four = {
//    name: 'Paris',
//    minCustHr: 20,
//    maxCustHr: 38,
//    avgCookieHr: 2.3,
//  }

//  var five = {
//    name: 'Lima',
//    minCustHr: 2,
//    maxCustHr: 16,
//    avgCookieHr: 4.6,
//  }




//  //forLoop for store...got home and completley forgot my logic here...pleh
// //  for(var i = 0; i < storeArray.length; i++){
// //    var storeHrs = document.createElement('ul');
// //    for (var i = 0; i < storeHrs.length; i++){
// //      storeHrs[i].salesPerHr.push(parseInt(storeHrs[i].returnRandom() * storeHrs[i].avgCookieHr));

//  } 