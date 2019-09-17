//storeArray
var storeArray = [one, two, three, four, five];

//storeHours
var storeHrs = ['6:00 am', '7:00 am', '8:00 am', '9:00 am', '10:00 am', '11:00 am', '12:00 pm', '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm', '6:00 pm', '7:00 pm', '8:00 pm']; 

 var one = {
   name: 'Seattle',
   minCustHr: 23,
   maxCustHr: 65,
   avgCookieSale: 6.4,
   custPerHr: [],
   salesPerHr: [],
   totalCookies: 0,

   //Average customer function
   randoCust: function() {
     for (var i = 0; i < storeHrs.length; i++) {
       var avgCustPhr = Math.floor(Math.random() * (this.maxCustHr - this.minCustHr + 1) + this.minCustHr);
     }     
   },

  //Cookies purchased function
  cookiesPerCust: function(){
    for (var i=0; i < storeHrs.length; i++) {
      console.log(this.randoCust[i])
      this.totalCookies += this.custPerHr[i];
    }
  },

  // Creates the list and appends to DOM
  
 };
 
 var two = {
   name: 'Tokyo',
   minCustHr: 3,
   maxCustHr: 24,
   avgCookieHr: 1.2,
 }
 
 var three = {
   name: 'Dubai',
   minCustHr: 11,
   maxCustHr: 38,
   avgCookieHr: 3.7,
 }
 
 var four = {
   name: 'Paris',
   minCustHr: 20,
   maxCustHr: 38,
   avgCookieHr: 2.3,
 }
 
 var five = {
   name: 'Lima',
   minCustHr: 2,
   maxCustHr: 16,
   avgCookieHr: 4.6,
 }
 
 
 
 
 //forLoop for store...got home and completley forgot my logic here...pleh
//  for(var i = 0; i < storeArray.length; i++){
//    var storeHrs = document.createElement('ul');
//    for (var i = 0; i < storeHrs.length; i++){
//      storeHrs[i].salesPerHr.push(parseInt(storeHrs[i].returnRandom() * storeHrs[i].avgCookieHr));
  
 } 