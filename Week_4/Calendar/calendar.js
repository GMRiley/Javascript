
var daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

$(document).ready(function(){

        var d 	= new Date();
        var mth = d.getMonth()+1;
        var yr 	= d.getFullYear();

        $("#month").val(mth);
        $("#year").val(yr);
        showCalendar (mth, yr);

        $("#month,#year").change(function(e) {
            showCalendar ($("#month").val(), $("#year").val());
        });
});


function daysInMonth(anyDateInMonth) {
    return new Date(anyDateInMonth.getYear(), anyDateInMonth.getMonth()+1, 0).getDate();
}


function showCalendar (mth, yr) {


    var firstDayOfMonth = mth + "/1/" + yr;
    var d = new Date( firstDayOfMonth );
    var numberOfDaysInMonth = daysInMonth(d);
    var firstDayOfWeek = d.getDay();
    console.log(firstDayOfMonth);
    console.log(d);
    console.log(numberOfDaysInMonth);
    console.log(firstDayOfWeek);
    /* this is where you'll generate the grid, for now I will just show first day of week */

    str="";
    for (value = 0; value < firstDayOfWeek; value++)
        {
            str += "<div class='day' >";
            str += " ";
            str += "</div>";
        }
    for (value = 1; value <= numberOfDaysInMonth; value++)
          {
              str += "<div class='day' >" ;
              str += value;
              str += "</div>";
          }


    str += "<ul>";
    str += "<li>Number of days in the month: " + numberOfDaysInMonth + "</li>";
    str += "<li>First day of the week: " + firstDayOfWeek + " (" + daysOfTheWeek[firstDayOfWeek] + ")</li>";

    str += "</ul>";

    document.querySelector("#results").innerHTML = str;



}


