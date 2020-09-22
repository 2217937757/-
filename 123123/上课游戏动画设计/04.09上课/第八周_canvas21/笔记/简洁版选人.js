//动态生成所有人的span列表
let my = document.querySelector("#my");
let html = ``; 
for(let name of stux){ 
	html+= `<span>${name}</span>`;
}
my.innerHTML = html; //将生成的HTML赋值


//随机选中一个span标签 给它添加 class="pick"
let spanArr = document.querySelectorAll("#my span");
let n  = Math.random() * 90; //或者 * spanArr.length
n  = parseInt(n);
spanArr[n].classList.add("pick");

