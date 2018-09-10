var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");

var timer = setInterval(main, 1000/60);

//create a box
var box = new GameObject();
box.vx = 5;

//create an array of boxes
var s =[];
for(var i=0; i<4; i++)
{
    s[i]=new GameObject();
    s[i].x = canvas.width/2;//Math.random()*canvas.width;
    s[i].y = canvas.height/2;//Math.random()* canvas.height;
    s[i].vy = Math.round(Math.random()*10+-5);
    s[i].vx = Math.round(Math.random()*10+-5);
    s[i].w =  10;
    s[i].h =  10;
}

//functions to run the examples
var examples = [];

//one box
examples[0]= function()
{ 
        if(box.x > canvas.width-box.w/2)
        {
            box.vx = -box.vx;
        }
        if(box.x < 0 + box.w/2)
        {
            box.vx = -box.vx;
        }
    
        box.move();
        box.drawRect();
    };

//multiple boxes
examples[1]= function()
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
};



function main()
{
    ctx.clearRect(0,0,canvas.width, canvas.height);
    var objectNum = 4;
    examples[1]();
    document.querySelector("")
}