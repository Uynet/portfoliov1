var canvas;


var ctx;
var isClicked = false;
var input_key = new Array();//キーの押下状態
var input_mouse = [false,0,0,0,0];//マウス入力 x座標、y座標、入力状態

var X=0;
var Y;
var vvx;
var vvy;

var tempA;//いつでもテンプレート
var tempB;
var tempC;
var tempD;

var e = 0.99;//反発係数
var acc = 0.3//プレイヤーの加速度
var mu = 0.01//摩擦係数
var stv = mu + 0.01;//物体が止まる速さ

function dist(x1,y1,x2,y2){
    return Math.pow((x1-x2)*(x1-x2) + (y1-y2)*(y1-y2),0.5);
}

//物体クラス
function Entity(x,y){
  this.shape;
  this.id;
  this.e;
  this.x = x;//this = player
  this.y = y;
  this.vx = 0;
  this.vy = 0;
  this.v=0;
  this.ax = 0;
  this.ay = 0;
  
　//アローキーの入力
  this.input = function (){
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
  }
  this.update_pos = function(){
    this.vx+= this.ax;
    this.x += this.vx;
    this.vy+= this.ay;
    this.y += this.vy;
    
    this.ax = 0;
    this.ay = 0;
  }
  
  
  this.rub = function(){
    //摩擦
    this.v = Math.pow(this.vx*this.vx + this.vy*this.vy,0.5);
    if(this.v>stv){
       this.vx-=mu*this.vx/this.v;
       this.vy-=mu*this.vy/this.v;
    }
    else{
        this.vx = 0;
        this.vy = 0;
    }
  }
}
//box
function Box(x,y,w){
    this.shape = "BOX";
    this.size = w;//一片の長さ
    this.e = 1;//反発係数
    Entity.apply(this,arguments);//Entity.thisをBox.thisにする的な
}
Box.prototype = new Entity;//プロトタイプを経由してEntityから継承
Box.prototype.update = function(){
    this.input();
    this.update_pos();
    this.rub();
    coll_box(this);
    
    //外枠の当たり判定(仮)
    if(this.x-this.size/2<1 || this.x+this.size/2>canvas.width-1){
        this.vx*=-this.e;
        (this.x-this.size/2<1)? this.x=this.size/2+1 : this.x=canvas.width-this.size/2-1;
    }
    if(this.y-this.size/2<1 || this.y+this.size/2>canvas.height-1){
        this.vy*=-this.e;
        (this.y-this.size/2<1) ? this.y=1+this.size/2 : this.y=canvas.height-this.size/2-1;
    }
    
}

//ball
function Ball(x,y,r){
    this.size = r;//半径
    this.shape = "BALL";
    this.e = 1;//反発係数
    Entity.apply(this,arguments);//Entity.thisをplayer.thisにする的な
}
Ball.prototype = new Entity;//プロトタイプを経由してEntityから継承
Ball.prototype.update = function(){
    this.input();
    this.update_pos();
    this.rub();
    
    //外枠の当たり判定(仮)
    if(this.x-this.size<1 || this.x+this.size>canvas.width-1){
        this.vx*=-this.e;
        (this.x-this.size<1)? this.x=this.size+1 : this.x=canvas.width-this.size-1;
    }
    if(this.y-this.size<1 || this.y+this.size>canvas.height-1){
        this.vy*=-this.e;
        (this.y-this.size<1) ? this.y=1+this.size : this.y=canvas.height-this.size-1;
    }
    
}
var obj = new Array();
obj[0] = new Box(220,220,20);
obj[0].id = 0;

//衝突判定
function coll_box(ob){
    for(var i=0;i<ob.id;i++){
        //今の状態
        tempA = Math.abs(ob.x-obj[i].x)<=(ob.size+obj[i].size)/2;
        tempB = Math.abs(ob.y-obj[i].y)<=(ob.size+obj[i].size)/2;
        
        //直前の状態
        tempC = Math.abs(ob.x-ob.vx-obj[i].x+obj[i].vx)<=(ob.size+obj[i].size)/2;
        tempD = Math.abs(ob.y-ob.vy-obj[i].y+obj[i].vy)<=(ob.size+obj[i].size)/2;
        
      if(tempC){//後々のサイズ変更に対応
          if(tempB){
            //y方向の押しだし
            while(Math.abs(ob.y-obj[i].y)<=(ob.size+obj[i].size)/2+1){
                if(ob.y<obj[i].y){
                    ob.y--;
                    obj[i].y++;
                }
                else{
                    ob.y++;
                    obj[i].y--;
                }
                //反発
                tempA = ob.vy;
                ob.vy = ((1-e)*ob.vy + (1+e)*obj[i].vy)/2;
                obj[i].vy =((1+e)*tempA + (1-e)*obj[i].vy)/2;
            }
              
          }
      }
      if(tempD){//後々のサイズ変更に対応
          if(tempA){
              //x方向の押しだし
            while(Math.abs(ob.x-obj[i].x)<=(ob.size+obj[i].size)/2+1){
                if(ob.x<obj[i].x){
                    ob.x--;
                    obj[i].x++;
                }
                else{
                    ob.x++;
                    obj[i].x--;
                }
                //反発
                tempA = ob.vx;
                ob.vx = ((1-e)*ob.vx + (1+e)*obj[i].vx)/2;
                obj[i].vx =((1+e)*tempA + (1-e)*obj[i].vx)/2;
            }
              
          }
      }
    }
}

//衝突判定
function coll_ball(){
        for(var i=0;i<this.id;i++){
        if(dist(this.x,this.y,obj[i].x,obj[i].y)<this.size + obj[i].size){
            //0除算が発生するのをなんとかする
            X = obj[i].x-this.x;
            Y = obj[i].y-this.y;
            vvx = (this.vx*Y-this.vx*X)*X/(Y*Y-X*X);
            vvy = vvx*Y/X;
            this.vx -= 0.1*vvx;
            this.vy -= 0.1*vvy;
            obj[i].vx -= 0.1*vvx;
            obj[i].vy -= 0.1*vvy;        
        }
    }
}

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
        var box = new Box(input_mouse[0],input_mouse[1],20);
        obj.push(box);
        box.id = obj.length-1;
    }
    document.onmouseup = function (e){
        input_mouse = [e.clientX,e.clientY,false];
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
        
        switch(obj[i].shape){
            case "BALL":
            ctx.fillStyle ="rgb(232,160,160)";
            ctx.fillText(i,obj[i].x-3,obj[i].y+4);
            ctx.strokeStyle = "rgb(232,160,160)";
                
            ctx.beginPath();
            ctx.arc(obj[i].x,obj[i].y,obj[i].size,0,Math.PI*2,true);
            ctx.stroke();
            break;
                
            case "BOX":
            ctx.fillStyle = "rgb(197,98,130)";
            ctx.fillText(i,obj[i].x-3,obj[i].y+5);
            ctx.strokeStyle = "rgb(197,98,130)";
            ctx.strokeRect(obj[i].x-obj[i].size/2,obj[i].y-obj[i].size/2,obj[i].size,obj[i].size);
            break;
        }
    }

    
  //外枠
  ctx.strokeStyle = "rgb(130,128,222)"
  ctx.strokeRect(0,0,canvas.width,canvas.height);
}

//クリア
function clear(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}




