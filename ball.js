class Ball{
    constructor(x,y,r){
        var options = {
            'isStatic':false,
            'restitution':1,
            'friction':0,
            'density':0.8

        }
        this.x=x;
        this.y=y;
        this.r=r;
        
        this.body = Bodies.circle(this.x, this.y,this.r,options);
        World.add(world, this.body);
    }
    display(){
        var paperpos =this.body.position;
        //var angle = this.body.angle;
        push();
      translate(paperpos.x, paperpos.y);
      rectMode(CENTER);
      //strokeWeight(4);
      fill("silver");
      //imageMode(CENTER);
      
      
     ellipse(0,0,this.r,this.r);
      pop();
    }
};