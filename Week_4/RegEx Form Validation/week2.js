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
        var nameCheck = /^[A-Z\-\ ]{1,}$/i;
        var phoneCheck = /^[\(]{1}[0-9]{3}[\)]{1}[0-9]{3}[\-]{1}[0-9]{4}$/;
        var emailCheck = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        var checker = true;
        var person = {};
        for (var counter = 0; counter < p.length; counter ++)
        {
            if(input[counter].value === "")
            {
                p[counter].style.color = "red";
                span[counter].innerHTML = "*";
                span[counter].style.color = "red";
            }
        }
        if (checker != nameCheck.test(input[0].value))
        {
            alert("The First Name is of incorrect format.")
            p[0].style.color = "red";
        }
        if (checker != nameCheck.test(input[1].value))
        {
            alert("The Last Name is of incorrect format.")
            p[1].style.color = "red";
        }
        if(input[2].value != input[3].value)
            {
                alert("The Email and the Confirmation do not match");
                p[3].style.color = "red";
                p[2].style.color = "red";
            }
        if (checker != (emailCheck.test(input[2].value) && emailCheck.test(input[3].value)))
        {
            alert("The Email fields are of incorrect format.");
            p[3].style.color = "red";
            p[2].style.color = "red";
        }
        if (checker != phoneCheck.test(input[4].value))
        {
            alert("The Phone Number field is of incorrect format.");
            p[4].style.color = "red";
        }
        if (checker === (nameCheck.test(input[0].value) && nameCheck.test(input[1].value) && phoneCheck.test(input[4].value) && emailCheck.test(input[2].value) && emailCheck.test(input[3].value)))
        {
            person = 
            {
                fname: input[0].value,
                lname: input[1].value,
                email: input[2].value,
                emailConf: input[3].value,
                phone: input[4].value
            }
            if (person.fname != "" && 
            person.lname != "" && 
            person.email != "" && 
            person.phone != "" && 
            person.email === person.emailConf)
            {
                form.style.display = "none";
                confirmation.style.display = "block";
                info.innerHTML += person.fname; 
                info.innerHTML += " " + person.lname;
                info.innerHTML += "<br>";
                info.innerHTML += person.email;
                info.innerHTML += "<br>"
                info.innerHTML += person.phone;
            }
        }
    }
}