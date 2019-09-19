
PatsStore.Hours = ['0600', '0700', '0800', '0900', '1000', '1100', '1200', '1300', '1400', '1500', '1600', '1700', '1800', '1900', '2000'];

PatsStore.allStores = [];

var storeTableData = document.getElementById('storeTableData');

PatsStore.allStoresTotal = 0;

function PatsStore(locationName, minimumCustomer, maximumCustomer, averageCookieSalePerCustomer) {
  this.locationName = locationName;
  this.minimumCustomer = minimumCustomer;
  this.maximumCustomer = maximumCustomer;
  this.averageCookieSalePerCustomer = averageCookieSalePerCustomer;
  this.cookieSalesPerHr = [];
  this.totalAmountOfCookies = 0;
  PatsStore.allStores.push(this);
  this.generateHourlyCookieSales();
  this.renderStoreRow();
}

PatsStore.prototype.randomCustomer = function (minimum, maximum) {
  return Math.random() * ((maximum - minimum) + 1) + minimum;
};

PatsStore.prototype.generateHourlyCookieSales = function () {

  for (var i = 0; i < PatsStore.Hours.length; i++) {
    var salmonCookies = Math.ceil(this.averageCookieSalePerCustomer * PatsStore.prototype.randomCustomer(this.minimumCustomer, this.maximumCustomer));
    this.cookieSalesPerHr.push(salmonCookies);
    this.totalAmountOfCookies += salmonCookies;
    PatsStore.allStoresTotal += salmonCookies;
  }
};

var renderHeaderRow = function () {
  var tableRowElement = document.createElement('tr');
  var tableHeaderElement = document.createElement('th');
  tableHeaderElement.textContent = 'Location';
  tableRowElement.appendChild(tableHeaderElement);

  for (var i = 0; i < PatsStore.Hours.length; i++) {
    var tableDataElement = document.createElement('th');
    tableDataElement.textContent = PatsStore.Hours[i];
    tableRowElement.appendChild(tableDataElement);
  }

  tableDataElement = document.createElement('th');
  tableDataElement.textContent = 'Total';
  tableRowElement.appendChild(tableDataElement);
  storeTableData.appendChild(tableRowElement);
};

renderHeaderRow();

PatsStore.prototype.renderStoreRow = function () {
  var tableRowElement = document.createElement('tr');
  var tableDataElement = document.createElement('td');
  tableDataElement.textContent = this.locationName;
  tableRowElement.appendChild(tableDataElement);

  for (var i = 0; i < this.cookieSalesPerHr.length; i++) {
    tableDataElement = document.createElement('td');
    tableDataElement.textContent = this.cookieSalesPerHr[i];
    tableRowElement.appendChild(tableDataElement);
  }

  tableDataElement = document.createElement('td');
  tableDataElement.textContent = this.totalAmountOfCookies;
  tableRowElement.appendChild(tableDataElement);
  storeTableData.appendChild(tableRowElement);
};

PatsStore.prototype.renderFooterRow = function () {
  var tableRowElement = document.createElement('tr');
  var tableDataElement = document.createElement('td');
  tableDataElement.textContent = 'Hourly Totals: ';
  tableRowElement.appendChild(tableDataElement);

  for (var i = 0; i < PatsStore.Hours.length; i++) {
    var storeHourlyTotal = 0;
    var tableData = document.createElement('td');

    for (var j = 0; j < PatsStore.allStores.length; j++) {
      storeHourlyTotal += PatsStore.allStores[j].cookieSalesPerHr[i];
      tableData.textContent = storeHourlyTotal;
      tableRowElement.appendChild(tableData);
    }
  }
  tableDataElement = document.createElement('td');
  tableDataElement.textContent = PatsStore.allStoresTotal;
  tableRowElement.appendChild(tableDataElement);
  storeTableData.appendChild(tableRowElement);
};

function initiateExistingShop() {
  // var seattle =
  new PatsStore('Seattle', 23, 65, 6.3);
  new PatsStore('Tokyo', 3, 24, 1.2);
  new PatsStore('Dubai', 11, 38, 3.7);
  new PatsStore('Paris', 20, 38, 2.3);
  new PatsStore('Lima', 2, 16, 4.6);
  // console.log(seattle);
}

initiateExistingShop();

PatsStore.prototype.renderFooterRow();


var allPatsStores = [];

function PatsAddNew(locationName, minimumCustomer, maximumCustomer, averageCookieSalePerCustomer) {
  this.locationName = locationName;
  this.minimumCustomer = minimumCustomer;
  this.maximumCustomer = maximumCustomer;
  this.averageCookieSalePerCustomer = averageCookieSalePerCustomer;
  PatsAddNew.allPatsStores.push(this);
}

new PatsStore('Miami', 10, 100, 5);
new PatsStore('Harlem', 5, 50, 2.5);

console.log('allStores: ', allPatsStores);

var addStoreButton = document.getElementById('pats-form-addStore');
addStoreButton.addEventListener('click to stick', patsNewStore);

function patsNewStore(event) {
  event.preventDefault();

  var locationName = event.target.location_name.value;
  var minimumCustomer = event.target.minimum_customer.value;
  var maximumCustomer = event.target.maximum_customer.value;
  var averageCookieSalePerCustomer = event.target.average_cookie_sale_per_customer.value;

  alert (`${locationName} ${minimumCustomer} ${maximumCustomer} ${averageCookieSalePerCustomer}`);

  new PatsStore(+locationName, +minimumCustomer, +maximumCustomer, +averageCookieSalePerCustomer);
  console.log('allPatsStores: ', allPatsStores);

  event.target.location_name.value = null;
  event.target.minimum_customer.value = null;
  event.target.maximum_customer.value = null;
  event.target.average_cookie_sale_per_customer.value = null;
}