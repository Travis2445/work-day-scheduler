// set the current date and format it
let day = moment().format('dddd, MMMM Do');
// set the current time and format it
let timeNow = moment().format('hh:mm a');
// display current day
$("#currentDay").text(day);
// display current time
$("#currentTime").text(timeNow);

// once the page DOM is ready execute code
$(function() {
    
    // capture click on saveBtn
    $(".saveBtn").click(function() {
        console.log("saveBtn Clicked");

        // assign the time of the timeblock and the value of the text area to variables for use in localStorage
        var time = $(this).parent().attr("id");
        var task = $(this).siblings(".description").val();

        // save to localStorage
        localStorage.setItem(time, task);
    });

    function timeCheck() {
        // assign current time to a var for the timeCheck function
        var actualTime = moment().hour();
        console.log(actualTime);

        // loop thru each of .time-block elements
        $(".time-block").each(function() {
            // using parseInt, parse a a string and return a integer from the id of the .time-block element, 24hr time for simplicity
            var timeBlockTime = parseInt($(this).attr("id"));
            console.log(timeBlockTime);

            // decide which class/color to apply to the time blocks based on the time compared to actualTime
            if (timeBlockTime > actualTime) {
                $(this).removeClass("past");
                $(this).removeClass("present")
                $(this).addClass("future");
            } else if (timeBlockTime < actualTime) {
                $(this).addClass("past");
                $(this).removeClass("present");
                $(this).removeClass("future");
            } else {
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).removeClass("future");
            }
        });

        
    };
    timeCheck();
});