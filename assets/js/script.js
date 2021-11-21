// set the current date and format it
let day = moment().format('dddd, MMMM Do');
// set the current time and format it
let timeNow = moment().format('HH:mm a');
// display current day
$("#currentDay").text(day);
// display current time
$("#currentTime").text(timeNow);

// once the page DOM is ready execute code
$(function() {
    console.log("Page is ready!")
});