
class GameObject
{
    constructor()
    {
        this.x = canvas.width/2;
        this.y = canvas.height/2;
        this.w = 100;
        this.h = 100;
        this.vx = 0;
        this.vy = 0;
        this.color="gold";
        this.angle=0;
    }

    drawRect()
    {
        ctx.save();
        ctx.translate(this.x, this.y);
        //ctx.rotate(this.angle*Math.PI/180);
        ctx.fillStyle = this.color;
        ctx.fillRect(-this.w/2,-this.h/2,this.w,this.h);
        ctx.restore();
    }
    drawCirc()
    {
        ctx.save();
        ctx.translate(this.x, this.y);
        //ctx.rotate(this.angle*Math.PI/180);
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(0,0,this.w/2,0,360*Math.PI/180, true)
        ctx.closePath();
        ctx.fill();
        ctx.restore(); 
    }

    move()
    {
        this.x += this.vx;
        this.y += this.vy;
    }
}