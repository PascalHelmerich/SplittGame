class Preview {
	
	constructor(canvasID){
		this.color = "#FFAF2F";
		this.canvas = document.getElementById(canvasID);
		this.context = this.canvas.getContext("2d");
	};
	
	setColor(color){
		this.color = color;
	};
	
	getColor(){
		return this.color;
	}
	
	draw(){
		this.context.fillStyle = this.color;
		this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
	};
};