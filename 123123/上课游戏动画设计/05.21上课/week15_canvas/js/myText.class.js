//创建一个弹幕类
class myText{
	constructor(x,y,text) { 
	    this.x = x;
		this.y = y;
		this.vx = parseInt(Math.random()*3+1) ; //1~4
		this.vy = parseInt(Math.random()*4-2) ; //-2~2
		this.text = text;
	}
	update(){ //更新位置
		//边界判断
		let w = c2d.canvas.width;
		
		if(this.x>w){
			this.x=0;
		}
		
		this.x += this.vx ;
		//this.y += this.vy ;
		this.y += parseInt(Math.random()*4-2);
	}
	
	draw(){ //画图方法
		this.update();
		//c2d.strokeText(文本,x,y); 
		c2d.strokeText(this.text,this.x,this.y);
	}
}//end myText