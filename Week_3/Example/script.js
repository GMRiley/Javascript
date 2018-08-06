window.addEventListener('load', init);

function init(e)
{
    /*
    var submit = document.querySelector('#submit');
    var name = document.querySelector('#name')
    var input = document.querySelectorAll('input');
    var img = document.querySelector('img');
    */

    $('#submit').addEventListener('click', doStuff);
    $('#name').addEventListener('blur', doStuff);

    function $(id)
    {
        return document.querySelector(id);
    }
    function doStuff(e)
    {
        e.preventDefault();
        if(input[0].value === "")
            {
                input.style.backgroundColor = "red";
            }
        else
            {
                input.style.backgroundColor = "white";
            }
        console.log(document.querySelector('input[name="cars"]:checked').value);
    }


}
