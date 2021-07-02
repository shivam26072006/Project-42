class createDrops{
    constructor(x, y, radius) {
        var options = {
          isStatic:false,
            'restitution':0.5,
            'friction':0.1,
            'density':1.0
        }
        this.rain = Bodies.circle(x, y, 5, options);
        this.radius=5;
        World.add(world, this.rain);
      }

      update(){  
        if(this.rain.position.y> height){
          Matter.Body.setPosition(this.rain, {x:random(0,400), y:random(0,400)})
      }

    }
      display(){
        fill("blue");
        ellipseMode(RADIUS)
        ellipse(this.rain.position.x, this.rain.position.y, this.radius, this.radius);
      }
}