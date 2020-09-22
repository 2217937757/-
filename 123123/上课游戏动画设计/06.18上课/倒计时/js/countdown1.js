var WINDOW_WIDTH = 1024;								/* 全局变量		宽1024 */
var WINDOW_HEIGHT = 768;								/* 全局变量		高768 */
var RADIUS = 8;											/* 全局变量 小圆半径 */
var MARGIN_TOP = 60;									/* 每个数字距离我们画布的上边距距离 */
var MARGIN_LEFT = 30;									/* 第一个数字的左边距距离 */

const endTime = new Date(2020,5,20,18,47,52);			/* 新的全局变量	名为endTime	用来设定倒计时结束时间 */
var curShowTimeSeconds = 0;								/* 新的变量	现在倒计时需要有多少秒 *//*毫秒的计算转换为秒*/

var balls = [];
const colors = ["#33B5E5","#0099CC","#AA66CC","#9933CC","#99CC00","#669900","#FFBB33","#FF8800","#FF4444","#CC0000"]

window . onload = function(){							/* window . onload浏览器加载完成后运行 */
	
	let canvas = document . getElementById('canvas');	/* 绘图环境 */
	c2d = canvas . getContext("2d");					/* 绘图环境 c2d*/
	
	canvas . width = WINDOW_WIDTH;						/* 调取宽*//*改变大小  自适应  更方便 */
	canvas . height = WINDOW_HEIGHT;					/* 调取高 */
	
	curShowTimeSeconds = getCurreShowTimeSeconds();		/*先对curShowTimeSeconds进行计算*/
	setInterval(										/* 简单的动画函数 存入每一帧要做什么事情 */
	        function(){
	            render( c2d );
	            update();								/* 新的函数update */
	        }
	        ,
	        50											/* 存入单位毫秒 大概20帧每秒 */
	    );										
}

function getCurreShowTimeSeconds(){						/* 设置getcurShowTimeSeconds函数 */
	var curTime	= new Date();							/* curTime获取当前时间 */
	var ret = endTime . getTime() - curTime . getTime();							/* ret获取截止时间 *//*截止时间减去当前时间*/
	ret = Math . round( ret / 1000 );					/* 毫秒转为秒  利用math转换为整数 */
	
// 返回数值 
	return ret >= 0 ? ret : 0 ;							/* 判断是否为0  倒计时结束屏幕显示为0 */
}

function update(){
	var nextShowTimeSeconds = getCurrentShowTimeSeconds();							/* 先声明新的变量nextShowTimeSeconds 获取秒数 */
	
	var nextHours = parseInt( nextShowTimeSeconds / 3600);
	var nextMinutes = parseInt( (nextShowTimeSeconds - nextHours * 3600)/60 )
	var nextSeconds = nextShowTimeSeconds % 60
	
	var curHours = parseInt( curShowTimeSeconds / 3600);
	var curMinutes = parseInt( (curShowTimeSeconds - curHours * 3600)/60 )
	var curSeconds = curShowTimeSeconds % 60
	
	if( nextSeconds != curSeconds ){
	        if( parseInt(curHours/10) != parseInt(nextHours/10) ){
	            addBalls( MARGIN_LEFT + 0 , MARGIN_TOP , parseInt(curHours/10) );
	        }
	        if( parseInt(curHours%10) != parseInt(nextHours%10) ){
	            addBalls( MARGIN_LEFT + 15*(RADIUS+1) , MARGIN_TOP , parseInt(curHours/10) );
	        }
	
	        if( parseInt(curMinutes/10) != parseInt(nextMinutes/10) ){
	            addBalls( MARGIN_LEFT + 39*(RADIUS+1) , MARGIN_TOP , parseInt(curMinutes/10) );
	        }
	        if( parseInt(curMinutes%10) != parseInt(nextMinutes%10) ){
	            addBalls( MARGIN_LEFT + 54*(RADIUS+1) , MARGIN_TOP , parseInt(curMinutes%10) );
	        }
	
	        if( parseInt(curSeconds/10) != parseInt(nextSeconds/10) ){
	            addBalls( MARGIN_LEFT + 78*(RADIUS+1) , MARGIN_TOP , parseInt(curSeconds/10) );
	        }
	        if( parseInt(curSeconds%10) != parseInt(nextSeconds%10) ){
	            addBalls( MARGIN_LEFT + 93*(RADIUS+1) , MARGIN_TOP , parseInt(nextSeconds%10) );
	        }
	
	        curShowTimeSeconds = nextShowTimeSeconds;
	    }
	
	    updateBalls();
	
	    console.log( balls.length)
}

function updateBalls(){

    for( var i = 0 ; i < balls.length ; i ++ ){

        balls[i].x += balls[i].vx;
        balls[i].y += balls[i].vy;
        balls[i].vy += balls[i].g;

        if( balls[i].y >= WINDOW_HEIGHT-RADIUS ){
            balls[i].y = WINDOW_HEIGHT-RADIUS;
            balls[i].vy = - balls[i].vy*0.75;
        }
    }

    var cnt = 0
    for( var i = 0 ; i < balls.length ; i ++ )
        if( balls[i].x + RADIUS > 0 && balls[i].x -RADIUS < WINDOW_WIDTH )
            balls[cnt++] = balls[i]

    while( balls.length > cnt ){
        balls.pop();
    }
}

function addBalls( x , y , num ){

    for( var i = 0  ; i < digit[num].length ; i ++ )
        for( var j = 0  ; j < digit[num][i].length ; j ++ )
            if( digit[num][i][j] == 1 ){
                var aBall = {
                    x:x+j*2*(RADIUS+1)+(RADIUS+1),
                    y:y+i*2*(RADIUS+1)+(RADIUS+1),
                    g:1.5+Math.random(),
                    vx:Math.pow( -1 , Math.ceil( Math.random()*1000 ) ) * 4,
                    vy:-5,
                    color: colors[ Math.floor( Math.random()*colors.length ) ]
                }

                balls.push( aBall )
            }
}

function render(c2d){									/* 绘制canvas画布 */
	
	
//三个变量
	var h = parseInt( curShowTimeSeconds / 3600 );									/* 小时 *//*当前的秒数除以3600为当前小时数*/
	var m = parseInt( ( curShowTimeSeconds - h * 3600 ) / 60 );						/* 分钟 *//*当前的秒数先减去小时的秒数 再 除以60*/
	var s = curShowTimeSeconds % 60;												/* 秒 *//* 求curShowTimeSeconds的余数 */
	
	
/* ——————————————例子—————————————— */
//两位数要拆开写
//例	第一个数值
//	renderDigit( 0 , 0 , parseInt(h/10) ,c2d)			/* 设新的函数 renderDigit 起始位置( 0 , 0 , 小时/10变为整数 , 上下文绘图环境) */
//}
/* ——————————————例子—————————————— */


//小时第一个
	renderDigit( MARGIN_LEFT , MARGIN_TOP , parseInt(h/10) ,c2d);					/* 设新的函数 renderDigit 起始位置( MARGIN_LEFT , MARGIN_TOP , 小时/10变为整数 , 上下文绘图环境) */
//小时第二位	
	renderDigit( MARGIN_LEFT + 15*RADIUS+1 , MARGIN_TOP, parseInt(h%10) ,c2d);  	/* 数值本来为14*RADIUS+1 为留空隙改为17 */
//冒号
	renderDigit( MARGIN_LEFT + 30*RADIUS+1 , MARGIN_TOP , 10 ,c2d);					/* 按照效果调节  MARGIN_LEFT + 32*RADIUS+1  */
//分钟第一位
	renderDigit( MARGIN_LEFT + 39*RADIUS+1 , MARGIN_TOP, parseInt(m/10) ,c2d);		
//分钟第二位
	renderDigit( MARGIN_LEFT + 54*RADIUS+1 , MARGIN_TOP, parseInt(m%10) ,c2d);		
//冒号
	renderDigit( MARGIN_LEFT + 69*RADIUS+1 , MARGIN_TOP , 10 ,c2d);
//秒第一位
	renderDigit( MARGIN_LEFT + 75*RADIUS+1 , MARGIN_TOP, parseInt(s/10) ,c2d);
//秒第二位
	renderDigit( MARGIN_LEFT + 93*RADIUS+1 , MARGIN_TOP, parseInt(s%10) ,c2d);
}

function renderDigit( x , y , num , c2d){				/* 此函数的数值有四个数值 x y num 绘图环境 */
	
	c2d.fillStyle ="red"								/* 获取颜色 红色 */
	
/* 二维循环 二维点阵  点阵唯一的地方画小球 */
//利用双重循环 去绘制数字
	for(let i=0; i< digit[num].length ;i++){ 			/* 	定义 digit[num]  */
		for(let j=0; j< digit[num][i].length ;j++){		/* 从 digit[num] 变到 digit[num][i] */
			if(digit[num][i][j] == 1){					/* digit[num][i][j]为 1 就绘制圆球 ij圆心*/
				c2d.beginPath()
				
				//待补充 c2d.arc()
				
				
				let temp = RADIUS+1						/* RADIUS圆的半径 */
				let _x = x + j * 2 * temp + temp		/* letX: x+j*2*x(R+1) + (R+1) */
				let _y = y + i * 2 * temp + temp		/* letY: x+i*2*x(R+1) + (R+1) */
				
				c2d.arc(_x,_y,RADIUS,0,2*Math.PI)		/* 画圆/ */
				
				c2d.closePath()							/* 闭合路径 */
				
				c2d.fill()								/* 填充 */
			}//end if
			
		} //end for
	}//end for
}