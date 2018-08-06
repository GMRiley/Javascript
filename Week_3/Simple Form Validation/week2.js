// JavaScript Document
window.addEventListener('load', init);

function init(e)
{
    var input = document.querySelectorAll('input');
    var p = document.querySelectorAll('#form p');
    var span = document.querySelectorAll('span');
    var confirmation = document.querySelector('#confirmation');
    var info = document.querySelector('#info');
    
    console.log(input);
    
    function $(id)
    {
        return document.querySelector(id);
    }
    $('#submit').addEventListener('click', fieldCheck);
    function fieldCheck(e)
    {
        e.preventDefault()
        for (var counter = 0; counter < p.length; counter ++)
        {
            if(input[counter].value === "")
            {
                p[counter].style.color = "red";
                span[counter].innerHTML = "*";
                span[counter].style.color = "red";
            }
            else
            {
                p[counter].style.color = "black";
                span[counter].innerHTML = " ";
            }
        }
        if(input[3].value != input [2].value)
        {
            alert("The Email and the Confirmation do not match");
            p[3].style.color = "red";
            p[2].style.color = "red";
        }
        
        if (input[0].value != "" && 
            input[1].value != "" && 
            input[3].value != "" && 
            input[4].value != "" && 
            input[2].value === input[3].value)
            {
                form.style.display = "none";
                confirmation.style.display = "block";
                info.innerHTML += input[0].value; 
                info.innerHTML += " " + input[1].value;
                info.innerHTML += "<br>";
                info.innerHTML += input[2].value;
                info.innerHTML += "<br>"
                info.innerHTML += input[4].value;
            }
    }
}