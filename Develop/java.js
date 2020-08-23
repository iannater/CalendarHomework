//Type inside the text area field 

//user clicks on the save button and that saves to local storage
//  -onclick method
// -store 2 values in var, (description from txtarea, divs id )
//store those 2 var in localstorage

// When refreshing calendar data presists
// - a method to get data from localstorage
// - with this data giv it .val() to specific time blocl div

//As the current time changes the background color of the textarea changes (current is red, past is grey, future is green

// function 
// for .each() time block we want to compare it to the current hour(using moment)
// if block hour is in past make it grey
// if time block is current make it red
//future time blocks are blue
//to make these changes we need to add and remove class name
$(document).ready(function () {
    //This displays the current day
    $("#currentDay").html(moment().format("dddd, MMMM Do"));


    $(".saveBtn").on("click", function () {
        var value = $(this).siblings(".txtArea").val();
        var time = $(this).parent().attr("id"); // hour- 9 split the string using.split after the - 
        localStorage.setItem(time, value);
    })
    $("#clear").on("click", function () {
        localStorage.clear();
        alert("Refresh Page to See Fresh Calendar!")
    })

    function hourUpdate() {
        //use moment to get current hour
        var currentHour = moment().hours();
        //var calculatedHour = $(".saveBtn").parent().attr("id").split("-")[1];
        for (var i = 9; i < 18; i++) {
            if (i === currentHour) {
                $("#hour-" + i).children(".txtArea").addClass("present")

            }
            else if (i < currentHour) {
                $("#hour-" + i).children(".txtArea").addClass("past")

            }

            else {
                $("#hour-" + i).children(".txtArea").addClass("future")
            }
        }
    };
    hourUpdate();


    // need to copy and paste this multiple times so that each hour is shown. 
    $("#hour-9 .txtArea").val(localStorage.getItem("hour-9"))
    $("#hour-10 .txtArea").val(localStorage.getItem("hour-10"))
    $("#hour-11 .txtArea").val(localStorage.getItem("hour-11"))
    $("#hour-12 .txtArea").val(localStorage.getItem("hour-12"))
    $("#hour-13 .txtArea").val(localStorage.getItem("hour-13"))
    $("#hour-14 .txtArea").val(localStorage.getItem("hour-14"))
    $("#hour-15 .txtArea").val(localStorage.getItem("hour-15"))
    $("#hour-16 .txtArea").val(localStorage.getItem("hour-16"))
    $("#hour-17 .txtArea").val(localStorage.getItem("hour-17"))























})