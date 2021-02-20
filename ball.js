class Ball {
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:1,
			friction:0,
			density:1.5,
			frictionAir:0
			
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.image = loadImage("images/Superhero-01.png")
		this.body=Bodies.circle(this.x, this.y, this.r, options)
		World.add(world, this.body);

	}
	display()
	{
			
			var paperpos=this.body.position;
			push()
			translate(paperpos.x, paperpos.y);
			imageMode(CENTER)
			image(this.image, 0,0,this.r*3,this.r*2)
			pop()
			
	}

}