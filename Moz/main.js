var canvas;
var ctx;
var isClicked = false;
var input_key = new Array();//キーの押下状態
var input_mouse = [false,0,0,0,0];//マウス入力 x座標、y座標、入力状態

var tempA;//いつでもテンプレート
var tempB;
var tempC;
var tempD;
var tempE;
var tempF;

var shakeX=0;
var shakeY=0;
var trig = 0;
var trig_tail = 0;

var tail = new Array();

var MAX_VX = 4;

//物理
var t = 0;
var acc = 4//プレイヤーの加速度
var gravity = 0.2;//重力加速度
var gravityMy = 0.2;//重力加速度
var mu = 4;
var stv = 0.5;

var eff = new Array();

function dist(x1,y1,x2,y2){
    return Math.pow((x1-x2)*(x1-x2) + (y1-y2)*(y1-y2),0.5);
}
//継承わけ
/*
Entity
|-Mover
|   |-Player
|   +-Enemy-*各種enemy
|
|-Wall-*各種wall

#当たり判定なし
|-Effect

#画面振動
ほしい場所でshake_trigerを呼ぶ
shake_trigerがtrigerを引いてくれる
一定時間shakeが発動する
*/

//物体クラス
function Entity(x,y){
  this.shape;
  this.id;
  this.x = x;//this = player
  this.y = y;
  this.vx = 0;
  this.vy = 0;
  this.v=0;
  this.ax = 0;
  this.ay = 0;
  
  this.fly = false;
    
  this.text;
  this.fontsize;
    
  //残像
  this.tailing = function (player){
    var ob = new Effect(player.x,player.y,-10*Math.random());
            
    //ずれ
    ob.dpx = -8 + Math.random()*16;
    ob.dpy = -8 + Math.random()*16;
      
    eff.push(ob);
    ob.id = obj.length-1;   
  }
}
//プレイヤークラス
function Player(x,y,w){
    this.size = w;//一片の長さ
    
    　//アローキーの入力
    //左
  this.input = function (){
    if(input_key[37]){
        if(!this.fly){
        this.ax=(-MAX_VX < this.vx)
            ? -acc
            : 0;
        this.vy -= 7*gravityMy;
        this.fly = true;
        }
    }
      //上
    if(input_key[38]){
        if(!this.fly){
            this.vy=-130*gravityMy;  
            this.fly = true;
            gravityMy*=-1;
            shaker_trigger(100);
            trig_tail = 1;
        } 
    }  
      //右
    if(input_key[39]){
        if(!this.fly){
        this.ax=(this.vx < MAX_VX)
            ? acc
            : 0;
        this.vy -= 7*gravityMy;
        this.fly = true;
        }
    }
  }
  this.update_pos = function(){
    this.vx+= this.ax;
    this.x += this.vx;
    this.vy+= this.ay+gravityMy
    this.y += this.vy;
   
    this.ax = 0;
    this.ay = 0;
  }
  
  this.rub = function(){
      if(!this.fly){
          if(Math.abs(this.vx)>stv){
              this.vx = (this.vx < 0)
                ?this.vx+=mu
                :this.vx-=mu;
          }
          else{
              this.vx = 0;
          }
      }
  }
    Entity.apply(this,arguments);//Entity.thisをPlayer.thisにする的な
}
Player.prototype = new Entity;//プロトタイプを経由してEntityから継承
Player.prototype.update = function(){
    
    //TODO
    //方を作る
    this.input();
    this.update_pos();
    this.rub();
    if(trig_tail){
        this.tailing(this);
    }   
    
    //外枠の当たり判定(仮)
    if(this.x-this.size/2<51 || this.x+this.size/2>canvas.width-101){
        this.vx=0;
        (this.x-this.size/2<51)
            ? this.x=this.size/2+51
            : this.x=canvas.width-this.size/2-101;
    }
    if(this.y-this.size/2<51 || this.y+this.size/2>canvas.height-101){
        this.vy=0;
        (this.y-this.size/2<51) 
            ? this.y=this.size/2+51
            : this.y=canvas.height-this.size/2-101;
        if(this.fly){
            trig_tail = 0;
        }
        this.fly = false;
    }
    
}
var obj = new Array();
obj[0] = new Player(220,220,16);
obj[0].id = 0;
this.fly =1;


//敵クラス
function Enemy(x,y,w){
    this.size = w;//一片の長さ
    
  this.update_pos = function(){
    this.vx+= this.ax;
    this.x += this.vx;
    this.vy+= (this.id==0)
        ?this.ay+gravity
        :this.ay+gravity;
    this.y += this.vy;
   
    this.ax = (0.5-Math.random())/10;
    this.ay = 0.4-Math.random();
  }
    Entity.apply(this,arguments);//Entity.thisをPlayer.thisにする的な
}
Enemy.prototype = new Entity;//プロトタイプを経由してEntityから継承
Enemy.prototype.update = function(){
    coll_Player(this);
    this.update_pos();
    
        //外枠の当たり判定(仮)
    if(this.x-this.size/2<51 || this.x+this.size/2>canvas.width-101){
        this.vx=0;
        (this.x-this.size/2<51)
            ? this.x=this.size/2+51
            : this.x=canvas.width-this.size/2-101;
    }
    if(this.y-this.size/2<51 || this.y+this.size/2>canvas.height-101){
        this.vy=0;
        (this.y-this.size/2<51) 
            ? this.y=this.size/2+51
            : this.y=canvas.height-this.size/2-101;
        if(this.fly){
            trig_tail = 0;
        }
        this.fly = false;
    }
}
//TODO
//壁もオブジェクトにする
for(var i=1;i<5;i++){
    obj[i] = new Enemy(220+i*32,220,16);
    obj[i].id = i;
    this.fly =1;
}




//エフェクトクラス
function Effect(x,y,w){
    this.size = 16;//一片の長さ
    this.alpha=0;
    this.time;//
    this.dpx;
    this.dpy;

  this.update_pos = function(){
      this.size = 1/(0.009+ 1/this.size);

      if(this.size<0.5){
        eff.shift();
      }
      this.alpha+=0.7;
  }
    Entity.apply(this,arguments);//Entity.thisをPlayer.thisにする的な
}
Effect.prototype = new Entity;//プロトタイプを経由してEntityから継承
Effect.prototype.update = function(){
    this.update_pos();
}

//衝突判定
//箱と箱
function coll_Player(ob){
    for(var i=0;i<1;i++){
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
            }
              
          }
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
    
    //TODO
    //マウス入力をちゃんと分ける
    document.onmousedown = function (e){
        if(e.clientX<canvas.width && e.clientY<canvas.height){
        }
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
    for(var i=0;i<eff.length;i++){
        eff[i].update();
    }
    if(trig){
        shaker(trig);
    }
}

//TODO
//trigerを渡す関数を用意⇨その関数から呼び出す
function shaker_trigger(amp){
    trig = amp;
}

function shaker(amp){
        t+=Math.random();
        shakeX = amp*Math.sin(t)*0.3;
        t+=Math.random();
        shakeY = amp*Math.cos(t);
        trig*=0.85;
        if(trig<5){
            trig = 0;
            t = 0;
        }
}


//描画
function draw() {
    for(var i=0;i<obj.length;i++){
        if(obj[i] instanceof Player){
            ctx.strokeStyle = "rgb(130,98,197)";
            ctx.strokeRect(obj[i].x-obj[i].size/2+shakeX,obj[i].y-obj[i].size/2+shakeY,obj[i].size,obj[i].size);
             //var img = new Image();
            // img.src = "img.png";
            //ctx.drawImage(img, obj[i].x, obj[i].y);
        }
        if(obj[i] instanceof Enemy){
            ctx.strokeStyle = "rgb(160,98,100)";
            ctx.strokeRect(obj[i].x-obj[i].size/2+shakeX,obj[i].y-obj[i].size/2+shakeY,obj[i].size,obj[i].size);
             //var img = new Image();
            // img.src = "img.png";
            //ctx.drawImage(img, obj[i].x, obj[i].y);
        }
    }
    //エフェクトの描画
    for(var i=0;i<eff.length;i++){
        if(eff[i] instanceof Effect){
                //ctx.strokeStyle = "rgb(255-105/eff[i].alpha,255-33/eff[i].alpha,255-105/eff.alpha)";
                
                tempC = Math.round(255-55/eff[i].alpha+10).toString();
                tempB = Math.round(255-185/eff[i].alpha).toString();
                tempA = Math.round(255-185/eff[i].alpha+40).toString();
                ctx.strokeStyle = "rgb("+tempA+","+tempB+","+tempC+")";
                
                ctx.beginPath();
                ctx.arc(eff[i].x+eff[i].dpx,eff[i].y+eff[i].dpy,eff[i].size,0,Math.PI*2,true);
                ctx.stroke();
            }
    }

    
  //外枠
    ctx.strokeStyle = "rgb(130,128,222)"
    ctx.strokeRect(50+shakeX,50+shakeY,canvas.width-150,canvas.height-150);
    ctx.restore();
}

//クリア
function clear(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}




