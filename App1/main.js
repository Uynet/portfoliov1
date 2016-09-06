var canvas;


var ctx;
var isClicked = false;
var input_key = new Array();//キーの押下状態
var input_mouse = [false,0,0,0,0];//マウス入力 x座標、y座標、入力状態

var acc = 0.3//プレイヤーの加速度
var mu = 0.03//摩擦係数
var stv = mu-0.02;//物体が止まる速さ

//物体クラス
function Entity(x,y){
  this.x = x;//this = player
  this.y = y;
  this.vx = 0;
  this.vy = 0;
  this.v=0;
  this.ax = 0;
  this.ay = 0;
}

//プレイヤー
function Player(x,y,size){
    this.size = size;
    Entity.apply(this,arguments);//Entity.thisをplayer.thisにする的な
}
Player.prototype = new Entity;//プロトタイプを経由してEntityから継承
Player.prototype.update = function(){
    if(input_key[37]){
        this.ax=-acc;    
    }  
    if(input_key[38]){
        this.ay=-acc;    
    }  
    if(input_key[39]){
        this.ax=+acc;    
    }  
    if(input_key[40]){
        this.ay=acc;    
    } 
    
    this.vx+= this.ax;
    this.x += this.vx;
    this.vy+= this.ay;
    this.y += this.vy;
    
    this.ax = 0;
    this.ay = 0;
    
    //外枠の当たり判定(仮)
    if(this.x<1 || this.x>canvas.width-this.size-1){
        this.vx*=-1;
        (this.x<1)? this.x=1:this.x=canvas.width-this.size-1;
    }
    if(this.y<1 || this.y>canvas.height-this.size-1){
        this.vy*=-1;
        (this.y<1)? this.y=1:this.y=canvas.height-this.size-1;
    }
    
    
    //摩擦
    this.v = Math.pow(this.vx*this.vx + this.vy*this.vy,0.5);
    if(this.v>stv){
       this.vx-=mu*this.vx/this.v;
       this.vy-=mu*this.vy/this.v;
    }
}
var obj = new Array();
obj[0] = new Player(220,220,20);



//ロード時関数
onload = function(){
    canvas = document.getElementById('cv');
    ctx = canvas.getContext('2d');
}



//メイン関数
var main = function() {
    clear();
    input();
    update();
    draw();
}
setInterval(main, 10);



function input(){
    document.onkeydown = function (e){
	    if(!e) e = window.event;
        input_key[e.keyCode] = true;
    }
    document.onkeyup = function (e){
        if(!e) e = window.event;
        input_key[e.keyCode] = false;
    }
    document.onmousedown = function (e){
        input_mouse = [e.clientX,e.clientY,true];
        var box = new Player(input_mouse[0],input_mouse[1],20);
        obj.push(box);
        console.log(input_mouse);
    }
    document.onmouseup = function (e){
        input_mouse = [e.clientX,e.clientY,false];
        console.log(input_mouse);
    }
    
    if(input_mouse[0]){
        var x0 = input_mouse[1];
        var y0 = input_mouse[2];
        var x1 = input_mouse[3];
        var y2 = input_mouse[4];
    }
    
}


//更新
function update() {
    for(var i=0;i<obj.length;i++){
        obj[i].update();
    }
}

//描画
function draw() {
    for(var i=0;i<obj.length;i++){
        "rgb(255,160,160)";
        ctx.fillText(i,obj[i].x+obj[i].size/2-3,obj[i].y+obj[i].size-7);
        ctx.fillStyle = "rgb(192,128,128)";
        ctx.strokeRect(obj[i].x,obj[i].y,obj[i].size,obj[i].size);
    }

    
  //外枠
  ctx.strokeStyle = "rgb(128,128,192)"
  ctx.strokeRect(0,0,canvas.width,canvas.height);
}

//クリア
function clear(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}




