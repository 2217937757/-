function draw(color,x,setH){
	c2d.fillStyle=color;
	c2d.fillRect(x,h-setH,20,setH);
}

函数:一段封装功能的代码,用来重复使用,
提升我们的编程效果.

//自定义函数
function 函数名(参数){
	函数体;
}

//执行函数
函数名(参数); //draw("red",30+100,130);

//系统函数
alert(); //弹出一个窗口
console.log(); //在控制台输出
Math.random(); //获取0~1的小数
