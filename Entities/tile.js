class Tile {
	constructor(r, c){
		this.x = c*scl+scl/2;
		this.y = r*scl+scl/2;
		this.value=0; 	//0, empty
						//1, white
						//2, black
		this.openSet = [0,0,0,0,0,0,0,0]; //clockwise 
										  //from top left
										  //0 no move
										  //1 white can put
										  //2 black can put
	}
	show() {
		if(this.value>0) {
			stroke(1);
			if(this.value==1) fill(255);
			if(this.value==2) fill(0);
			ellipse(this.x, this.y, scl*0.8,scl*0.8);
		}
	}
	place(_val) {
		this.value=_val;
	}
}