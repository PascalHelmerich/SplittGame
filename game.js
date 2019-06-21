class Game {
	
	constructor(canvas, context, preview){
		this.canvas = canvas;
		this.context = context;
		this.preview = preview;
		this.quads = [new Quad(0, 0, this.canvas.width, this.canvas.height, "#FFAF2F")];
	}
	
	draw(){
		this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
		this.drawQuads();
		this.preview.draw();
	}
	
	drawQuads(){
		this.quads.forEach(quad => {
			this.context.fillStyle = quad.getColor();
			this.context.fillRect(quad.getX(), quad.getY(), quad.getWidth(), quad.getHeight());
			this.context.rect(quad.getX(), quad.getY(), quad.getWidth(), quad.getHeight());
			this.context.stroke();
		});
	}
	
	onClick(e){
		const validQuads = game.quads.filter(q => q.isIn(e.offsetX, e.offsetY));
		if(validQuads.length > 0){
			const quad = validQuads[0];
			if(quad.getColor() == game.preview.getColor()){
				game.splitQuad(quad);
				
				game.preview.setColor(game.getRandomColorFromQuads());
				
				counter.innerHTML = game.quads.length;
			}else{
				if(life.innerHTML.length > 2){
					life.innerHTML = life.innerHTML.substr(0, life.innerHTML.length-2);
				}else{
					life.innerHTML = "";
					alert("TOT DU KEK");
					window.location.reload()
				}
			}
		}
		game.draw();
	}
	
	getRandomColor(){
		return "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});;
	}
	
	getRandomColorFromQuads(){
		return this.quads[Math.floor(Math.random()*this.quads.length)].getColor();
	}
	
	splitQuad(quad){
		let newQuad;
		if(quad.getHeight() > quad.getWidth()){
			quad.halfHeight();
			newQuad = new Quad(quad.getX(), quad.getY()+quad.getHeight(), quad.getWidth(), quad.getHeight(), this.getRandomColor());
		}else{
			quad.halfWidth();
			newQuad = new Quad(quad.getX()+quad.getWidth(), quad.getY(), quad.getWidth(), quad.getHeight(), this.getRandomColor());
		}
		this.quads.push(newQuad);
	}
	
}