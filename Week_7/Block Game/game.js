var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");

var timer = setInterval(main, 1000/60);

//create a box
var box = new GameObject();
box.vx = 5;

//create an array of boxes


//functions to run the examples
var states = [];
var currentState='yes';
//one box

var s =[];

//multiple boxes
function squares()
{
    var shapeNum = document.querySelector("#object-num").value

    console.log(shapeNum)
    for(var i=0; i<Number(shapeNum); i++)
    {
        s[i]=new GameObject();
        s[i].x = canvas.width/2;//Math.random()*canvas.width;
        s[i].y = canvas.height/2;//Math.random()* canvas.height;
        s[i].vy = Math.round(Math.random()*10+-5);
        s[i].vx = Math.round(Math.random()*10+-5);
        s[i].w =  20;
        s[i].h =  20;
    } 
}
states["squares"]=function()
{
    for(i = 0; i < s.length; i++)
    {
       /*s[i].vy = Math.random()*2+-1;
       s[i].vx = Math.random()*2+-1;*/
        
        s[i].drawRect();
        s[i].move();
        if(s[i].y > canvas.height)
        {
            s[i].y = canvas.height;
            s[i].vy = -s[i].vy;
        }
        if(s[i].y < -s[i].w/2)
        {
            s[i].y = s[i].w/2;
            s[i].vy = -s[i].vy
        }
        if(s[i].x > canvas.width)
        {
            s[i].vx = -s[i].vx;
            s[i].x = canvas.width;
        }
        if(s[i].x < s[i].w/2)
        {
            s[i].vx = -s[i].vx;
            s[i].x = s[i].w/2;
        }
    }
    
};
states["circles"]=function()
{
    for(i = 0; i < s.length; i++)
    {
       /*s[i].vy = Math.random()*2+-1;
       s[i].vx = Math.random()*2+-1;*/
        
        s[i].drawCirc();
        s[i].move();
        if(s[i].y > canvas.height)
        {
            s[i].y = canvas.height;
            s[i].vy = -s[i].vy;
        }
        if(s[i].y < 0)
        {
            s[i].y = 0;
            s[i].vy = -s[i].vy
        }
        if(s[i].x > canvas.width)
        {
            s[i].vx = -s[i].vx;
            s[i].x = canvas.width;
        }
        if(s[i].x < 0)
        {
            s[i].vx = -s[i].vx;
            s[i].x = 0;
        }
    }
}
states["yes"]=function()
{
    
}
document.querySelector("#submit-button").addEventListener("click", squares)
document.querySelector("#Square-choice").addEventListener("click", function(){currentState="squares"})
document.querySelector("#Circle-choice").addEventListener("click", function(){currentState="circles"})

function main()
{
    ctx.clearRect(0,0,canvas.width, canvas.height);
    states[currentState]();
    
}