var today = new Date();
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var month = months[today.getMonth()];
var day = today.getDate();
var year = today.getFullYear();
var date = month + ' ' + day + ', ' + year;
document.getElementById("date").innerHTML = date