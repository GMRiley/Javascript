
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
    var day = document.querySelectorAll(".day")
    console.log(day)
    for (var i=0; i < day.length; i++)
    {
        day[i].addEventListener("click",colorChange)
    }
    document.querySelector('input[value="All Month Available"]').addEventListener("click",function(){monthYes(day)})
    document.querySelector('input[value="All Month UnAvailable"]').addEventListener("click",function(){monthNo(day)})


    function colorChange()
    {
        console.log(this.style.backgroundColor)
        if (this.style.backgroundColor == "")
            this.style.backgroundColor = "green"
        else if (this.style.backgroundColor == "green")
            this.style.backgroundColor = "red"
        else if (this.style.backgroundColor == "red")
            this.style.backgroundColor = ""

    }
    function monthYes(arr)
    {
        for (var i=0; i < arr.length; i++)
        {
            arr[i].style.backgroundColor = "green";
        }
    }
    function monthNo(arr)
    {
        for (var i=0; i < arr.length; i++)
        {
            arr[i].style.backgroundColor = "red";
        }
    }




}


