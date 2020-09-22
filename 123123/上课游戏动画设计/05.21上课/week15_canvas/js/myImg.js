class myImg{
	constructor(x,y,img) {
	    this.x = x;
		this.y = y;
		this.img = img;
		this.vx = Math.random()*1 +1  ;
		this.vy = 0 //Math.random()*1 +1  ;
		this.w  =40; //头像宽度40
		this.h  =40; //头像高度40
	}
	
	抖动(){
		this.x+= parseInt( Math.random()*6 -3  ); // -3,3
		this.y+= parseInt( Math.random()*6 -3  ); // -3,3
		
	}
	
	move(){
		
		//x移到边界之外反弹
		if(this.x>=(500-this.w) || this.x<0){
			this.vx =-this.vx ;
		}
		
		//y移到边界之外反弹
		if(this.y>=(500-this.h) || this.y<0){
			this.vy =-this.vy ;
		}
		
		this.x+=this.vx;
		this.y+=this.vy;
	}
	
	update(){//更新位置
		this.move();
	}
	
	draw(){
		this.update();
		
		c2d.drawImage(this.img,this.x,this.y,this.w,this.h);
		
	}
	
}