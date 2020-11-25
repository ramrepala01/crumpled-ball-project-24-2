class Ball {
    constructor(x, y ,radius){
      var options = {
        isStatic :false,
          'restitution':0.3,
          'friction':0.5,
          'density':1.2,
      }
      this.x=x;
      this.y=y;
      this.radius=radius;
      this.body = Bodies.circle(this.x, this.y,this.radius/2, options);
      //this.width = 50;
      //this.height = 50;
      
      World.add(world, this.body);
    }
    display(){
      var pos=this.body.position;
      push();
      translate(pos.x, pos.y);
      rectMode(CENTER);
      strokeWeight(4);
      stroke("yellow");
      fill("blue");
      ellipse(0, 0, this.radius,this.radius);
      pop();
    }
  }