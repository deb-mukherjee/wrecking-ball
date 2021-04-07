class Rope{
    constructor(bodyA,pointB){
        var options={
            bodyA : bodyA,
            pointB : pointB,
            length : 10,
            stiffness: 2
        }
        this.rope = Constraint.create();
World.add(world,this.rope);
    }
    display(){
        var pointA = this.rope.bodyA.position;
        var pointb = this.rope.pointB;
        strokeWeight(10);
        stroke("black");
        line(pointA.x,pointA.y,pointb.x,pointb.y,options); 
    }
}