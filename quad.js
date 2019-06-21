class Quad{
	
	constructor(fromX, fromY, width, height, color){
		this.fromX = fromX;
		this.fromY = fromY;
		this.width = width;
		this.height = height;
		this.color = color;
	}
	
	isIn(x, y){
		return this.getX() <= x && this.getX()+this.getWidth() >= x
		&& this.getY() <= y && this.getY()+this.getHeight() >= y;
	}
	
	halfHeight(){
		this.height /= 2;
	}
	
	halfWidth(){
		this.width /= 2;
	}
	
	getX(){
		return this.fromX;
	}
	getY(){
		return this.fromY;
	}
	getWidth(){
		return this.width;
	}
	getHeight(){
		return this.height;
	}
	getColor(){
		return this.color;
	}
	
}