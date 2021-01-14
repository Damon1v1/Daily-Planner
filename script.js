$(document).ready(function() {
   // listener calls function
    $(".btn-dark").on("click", function() {
      // get values
      var value = $(this).siblings(".description").val();
      var time = $(this).parent().attr("id");
      // save to localStorage
      localStorage.setItem(time, value);
    });
  
    function hourUpdater() {
      // get hours
      var currentHour = moment().hours();
      // loop over time blocks
      $(".time-block").each(function() {
        var blockHour = parseInt($(this).attr("id").split("-")[1]);
  
        // conditionals to check time 
        if (blockHour < currentHour) {
          $(this).addClass("past");
        } 
        else if (blockHour === currentHour) {
          $(this).removeClass("past");
          $(this).addClass("present");
        } 
        else {
          $(this).removeClass("past");
          $(this).removeClass("present");
          $(this).addClass("future");
        }
      });
    }
  
    hourUpdater();
  
    // interval ti check if current time needs updating
    var interval = setInterval(hourUpdater, 15000);
  
    // load saved data for each time block
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));
  
    // display current day on page  
    $("#currentDay").text(moment().format("dddd, MMMM Do"));
  });
  