class Ground{
    constructor(){
        this.body = Bodies.rectangle(0,590,3000,10,{isStatic:true});
        World.add(world,this.body);
    }
    display(){
       var position = this.body.position;
        rectMode(CENTER); 
        push();
        fill("brown")
        rect(position.x,position.y,3000,10)
        pop();
    }
}