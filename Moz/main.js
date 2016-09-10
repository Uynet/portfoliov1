var canvas;
var ctx;
var isClicked = false;
var click = false;
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

var MAX_VX = 3;

var Map = [
	["0","0","1","1","1","1","1","0","1","1","0","1","1","1","1"],
    ["0","0","1","1","1","1","1","0","1","1","1","0","0","0","1"],
    ["1","1","1","1","1","1","1","0","1","1","1","0","0","0","1"],
    ["1","0","0","0","0","0","0","0","1","1","1","0","0","0","1"],
    ["1","0","E","0","0","0","0","0","0","0","0","0","0","0","1"],
    ["1","0","1","1","1","1","1","0","0","0","0","E","0","0","1"],
    ["1","0","0","0","0","0","0","0","E","0","1","1","1","0","1"],
    ["1","0","0","0","0","1","1","1","1","0","0","0","0","0","1"],
    ["1","0","0","0","0","0","0","0","0","0","0","0","0","0","1"],
    ["1","0","0","0","0","0","0","0","0","1","1","1","1","1","1"],
    ["1","0","0","0","0","0","0","0","0","0","0","0","0","0","0"],
    ["1","0","0","0","0","0","0","0","E","0","0","0","0","0","0"],
    ["1","0","0","0","0","0","1","1","1","1","1","0","0","0","0"],
    ["1","E","0","0","0","0","0","0","0","0","0","0","0","P","0"],
    ["1","1","1","1","1","0","0","0","0","0","1","1","1","1","1"],

];
var x=0;
var y=0;


//物理
var t = 0;
var acc = 3//プレイヤーの加速度
var gravity = 0.4;//重力加速度
var gravityMy = 0.4;//重力加速度
var mu = 4;
var stv = 1;

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
    //TODO
    //しかるべき場所に移す
  this.tailing = function (player){
      if(Math.random()<1){
          var ob = new Effect(player.x,player.y,-10*Math.random());
                
          //ずれ
        ob.dpx = (Math.random()-0.5)*20;
        ob.dpy = (Math.random()-0.5)*2;
          
        eff.push(ob);
        ob.id = obj.length-1;   
      }
  }
}
//プレイヤークラス
function Player(x,y,w){
    this.size = w;//一片の長さ
    
    　//アローキーの入力
    //左
  this.input = function (){
    if(input_key[37]){
        this.ax=(-MAX_VX < this.vx)
            ? -acc
            : 0;
        if(!this.fly){
        this.vy -= 4*gravityMy;
        this.fly = true;
        }
    }
      //上
    if(input_key[38]){
        if(!this.fly&&!click){
            this.vy=-40*gravityMy;  
            this.fly = true;
            gravityMy*=-1;
            shaker_trigger(100);
            trig_tail = 1;
            click = 1;
        } 
    }  
      //右
    if(input_key[39]){
        this.ax=(this.vx < MAX_VX)
            ? acc
            : 0;
        if(!this.fly){
        this.vy -= 4*gravityMy;
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
   this.id = obj.length-1;
    Entity.apply(this,arguments);//Entity.thisをPlayer.thisにする的な
}
Player.prototype = new Entity;//プロトタイプを経由してEntityから継承
Player.prototype.update = function(){
    
    //TODO
    //方を作る
    this.input();
    this.update_pos();
    //すべてのオブジェクトとの当たり判定を計算
    //TODO
    //線分と矩形の判定を作ってどの面で当たったか調べれるようにする
    for(var i=1;i<obj.length;i++){
        if(coll_Box(this,obj[i])==1){
           if(obj[i] instanceof Wall){
               this.vy *= -0.1;
               /*応急処置*/
               //x
               if(this.x<33){
                   while(this.x<33){
                        this.x++;
                    }
               }
               if(this.x>480-33-16){
                   while(this.x>480-33-16){
                        this.x--;
                    }
               }
               //y
               {
                    while(coll_Box(this,obj[i])==1){
                        this.y -= gravityMy/Math.abs(gravityMy);
                    }
                    if(this.fly){
                        trig_tail = 0;
                    }
                   this.fly=false;
               }
           }
        }
    }
    this.rub();
    if(trig_tail){
        this.tailing(this);
    }  
}
//TODO
//もっと便利なデータ構造を作る
var obj = new Array();
/*
var obj = new Array();
obj[0] = new Player(220,220,16);
obj[0].id = 0;
this.fly =1;
*/


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
   
    this.ax = (Math.random()-0.5)/40;
    this.ay = Math.random();
       this.id = obj.length-1;
  }
    Entity.apply(this,arguments);//Entity.thisをPlayer.thisにする的な
}
Enemy.prototype = new Entity;//プロトタイプを経由してEntityから継承
Enemy.prototype.update = function(){
    this.update_pos();
        for(var i=1;i<obj.length;i++){
        if(coll_Box(this,obj[i])==1){
           if(obj[i] instanceof Wall){
               this.vy = -0.1;
               /*応急処置*/
                if(this.x<33){
                   while(this.x<33){
                        this.x++;
                    }
               }
               if(this.x>480-33-32){
                   while(this.x>480-33-32){
                        this.x--;
                    }
               }
               
                while(coll_Box(this,obj[i])==1){
                    this.y -= gravity/Math.abs(gravity);
                }
                this.fly=false;
           }
        }
    }
}

///壁クラス
//四角い壁
function Wall(x,y){
    this.size = 32;//一片の長さ
    this.update_pos = function(){
        this.vx+= this.ax;
        this.x += this.vx;
        this.vy+= this.ay;
        this.y += this.vy;
        this.id = obj.length-1;
    }//ダミー
    Entity.apply(this,arguments);//Entity.thisをPlayer.thisにする的な
}
Wall.prototype = new Entity;//プロトタイプを経由してEntityから継承
Wall.prototype.update = function(){
    this.update_pos;
}
//TODO
//Wall専用のリストを作る
//番号をきちんとしたい
for(var y=0;y<15;y++){
    for(var x=0;x<15;x++){
    switch(Map[y][x]){
        case "1":
            obj.push(new Wall(32*x,32*y,32));
            break;
        case "P":
            obj.push(new Player(32*x,32*y,16));
            break;
        case "E":
            obj.push(new Enemy(32*x,32*y,16));
            break;
        }
    }
}


//エフェクトクラス
function Effect(x,y,w){
    this.size = 32;//初期サイズ
    this.alpha=0;
    this.time;//
    this.dpx;
    this.dpy;

    //TODO
    //関数の名前を適切なものにする
    //エフェクトごとに分ける
  this.update_pos = function(){
      this.size = 1/(0.009+ 1/this.size);//エフェクトの減衰率

      if(this.size<1){//小さくなったら消す
        eff.shift();
      }
      this.alpha+=0.7;//徐々に透明になる
  }
    Entity.apply(this,arguments);
}
Effect.prototype = new Entity;//プロトタイプを経由してEntityから継承
Effect.prototype.update = function(){
    this.update_pos();
}

//衝突判定
//箱と箱
//TODO
//判定部分と処理部分を分ける
//BOX型を作り 計算したいやつの頂点をBOX方でnewして関数に渡すようにする
function coll_Box(boxA,boxB){
        //この変数群は↑でどうにかなる
        var Ar = boxA.x+boxA.size;
        var Al = boxA.x;
        var At = boxA.y;
        var Ab = boxA.y+boxA.size;
        var Br = boxB.x+boxB.size;
        var Bl = boxB.x;
        var Bt = boxB.y;
        var Bb = boxB.y+boxB.size;
    return   (Ab<Bt) ? 0
            :(Bb<At) ? 0
            :(Ar<Bl) ? 2
            :(Br<Al) ? 2
                     : 1;
        
        
}

//箱と点
function coll_dot(box,x,y){
        //この変数群は↑でどうにかなる
        var Ar = box.x+box.size;
        var Al = box.x;
        var At = box.y;
        var Ab = box.y+box.size;
    return  (Al<x && x<Ar && At<y && y<Ab);
        
        
}

//押し戻し関数
function push(hit){
    //yの押し戻し
    if(hit == 1){
        
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
        click = 0;
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
            shakeX = 0;
            shakeY = 0;
            trig = 0;
            t = 0;
        }
}


//描画
function draw() {
    for(var i=0;i<obj.length;i++){
        if(obj[i] instanceof Player){
            ctx.strokeStyle = "rgb(130,98,197)";
            ctx.strokeRect(obj[i].x+shakeX,obj[i].y+shakeY,obj[i].size,obj[i].size);
             //var img = new Image();
            // img.src = "img.png";
            //ctx.drawImage(img, obj[i].x, obj[i].y);
        }
        if(obj[i] instanceof Enemy){
            ctx.fillStyle = "rgb(160,98,100)";
            ctx.fillText("敵",obj[i].x+shakeX+3,obj[i].y+shakeY+12);
            ctx.strokeStyle = "rgb(160,98,100)";
            ctx.strokeRect(obj[i].x+shakeX,obj[i].y+shakeY,obj[i].size,obj[i].size);
             //var img = new Image();
            // img.src = "img.png";
            //ctx.drawImage(img, obj[i].x, obj[i].y);
        }
        if(obj[i] instanceof Wall){
            ctx.strokeStyle = "rgb(140,140,140)";
            ctx.strokeRect(obj[i].x+shakeX,obj[i].y+shakeY,obj[i].size,obj[i].size);
             //var img = new Image();
            // img.src = "img.png";
            //ctx.drawImage(img, obj[i].x, obj[i].y);
        }
    }
    //DOING
    //xy座標
    //エフェクトの描画
    for(var i=0;i<eff.length;i++){
        if(eff[i] instanceof Effect){
                //ctx.strokeStyle = "rgb(255-105/eff[i].alpha,255-33/eff[i].alpha,255-105/eff.alpha)";
                
                tempA = Math.round(255-55/eff[i].alpha+10).toString();
                tempB = Math.round(255-185/eff[i].alpha).toString();
                tempC = Math.round(255-185/eff[i].alpha+40).toString();
                ctx.strokeStyle = "rgb("+tempA+","+tempB+","+tempC+")";
                
                ctx.beginPath();
                ctx.arc(eff[i].x+eff[i].dpx,eff[i].y+eff[i].dpy,eff[i].size,0,Math.PI*2,true);
                ctx.stroke();
            }
    }

    
  //外枠
    ctx.strokeStyle = "rgb(130,128,222)"
    ctx.strokeRect(shakeX,shakeY,canvas.width,canvas.height);
    ctx.restore();
}

//クリア
function clear(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}




