class Stone
{
    constructor(x, y, w, h)
    {
        let options={
            restitution: 0.8
        }

        this.body = Bodies.rectangle(x, y, w, h, options);
        this.w = w;
        this.h = h;

        World.add(world, this.body);
    }

    display(){
        let pos = this.body.position;
        push()
        rectMode = RADIUS;
        rect(pos.x, pos.y, w, h);
        pop()
    }
}