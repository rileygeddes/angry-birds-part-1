class bird {
    constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.circle(x, y, 20, options);
      this.width = 20;  
      this.height = 20; 
                        
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      pos.x=mouseX
      pos.y=mouseY
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS)
      fill("red");
      strokeWeight(4)
      stroke("grey")
      ellipse(0, 0,20,20);
    
      pop();
      
    }
  };
  