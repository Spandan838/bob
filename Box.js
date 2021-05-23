class Box{
    constructor(x,y){
        this.body = Bodies.rectangle(x,y,150,70);
        World.add(world,this.body);
    }
    display(){
        var position = this.body.position;
        rect(position.x,position.y,150,70)
        
    }
}