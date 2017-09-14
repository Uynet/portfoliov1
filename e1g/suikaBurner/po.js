const keyboard = function(keyCode){
  const key = {};
  let beforePressed = false;
  let nowPressed = false;
  let nextPressed = false;
  key.onPressed = false;
  key.isPressed = false;
  key.onReleased = false;
  key.isReleased = false;
  window.addEventListener("keydown",function(e){
    if(e.keyCode === keyCode){
      nextPressed = true;
      // e.preventDefault();
    }
  });
  window.addEventListener("keyup",function(e){
    if(e.keyCode === keyCode){
      nextPressed = false;
      // e.preventDefault();
    }
  });
  key.update = function(){
    beforePressed = nowPressed;
    nowPressed = nextPressed;
    key.onPressed = nowPressed && !beforePressed;
    key.isPressed = nowPressed;
    key.onReleased = !nowPressed && beforePressed;
    key.isReleased = !nowPressed;
  };
  return key;
};

window.onload = function(){
  // constants
  const WIDTH = 640;
  const HEIGHT = 480;

  const RESOURCES_FILES = [
    // ["sobaya", "sobaya.png"],
  ];
  const FONT_FAMILY = "'貂ｸ繧ｴ繧ｷ繝�け', YuGothic, '繝偵Λ繧ｮ繝手ｧ偵ざ Pro', 'Hiragino Kaku Gothic Pro', '繝｡繧､繝ｪ繧ｪ', Meiryo, Osaka, '�ｭ�ｳ �ｰ繧ｴ繧ｷ繝�け', 'MS PGothic', sans-serif";

  // aliases
  const autoDetectRenderer = PIXI.autoDetectRenderer;
  const Container = PIXI.Container;
  const loader = PIXI.loader;
  const resources = PIXI.loader.resources;
  const Sprite = PIXI.Sprite;
  const Graphics = PIXI.Graphics;
  const Text = PIXI.Text;
  const Rectangle = PIXI.Rectangle;

  const newText = function(str,size,color){
    return new Text(str,{fontFamily:FONT_FAMILY,fontSize:size,fill:color});
  };

  // main process
  // create renderer
  const renderer = autoDetectRenderer(WIDTH, HEIGHT);
  renderer.backgroundColor = 0xffffff;
  document.body.appendChild(renderer.view);
  // create main stage
  let stage = new Container();
  // key input
  const keys = {};
  const KEY_LEFT = 37;
  const KEY_RIGHT = 39;
  const KEY_Z = 90;
  keys[KEY_LEFT] = keyboard(KEY_LEFT);
  keys[KEY_RIGHT] = keyboard(KEY_RIGHT);
  keys[KEY_Z] = keyboard(KEY_Z);

  // mouse position
  let mx=0, my=0;
  // mouse down
  let isClicked=false;
  {
    const cvs = document.getElementsByTagName("canvas")[0];
    // const cvs = renderer.view; // 縺ｧ縺�＞逍第ヱ
    cvs.addEventListener('mousemove', function(e){
      mx = e.clientX - cvs.getBoundingClientRect().left;
      my = e.clientY - cvs.getBoundingClientRect().top;
    }, false);
    cvs.addEventListener('mousedown', function(e){
      isClicked = true;
    }, false);
    cvs.addEventListener('mouseup', function(e){
      isClicked = false;
    }, false);
  }

  const title = function*(){
    stage = new Container();

    const rect = new Graphics();
    rect.beginFill(0x000000);
    rect.drawRect(0,0,WIDTH,HEIGHT);
    rect.endFill();
    stage.addChild(rect);

    const titleText = newText("The Sparkler is Howling",48,"white");
    titleText.anchor.set(0.5, 0.5);
    titleText.position.set(WIDTH/2, HEIGHT/2);
    stage.addChild(titleText);

    const pressText = newText("Press Z key",24,"white");
    pressText.anchor.set(0.5, 0.5);
    pressText.position.set(WIDTH/2, HEIGHT-30);
    stage.addChild(pressText);

    let frame = 0;

    while(true){
      if(keys[KEY_Z].onPressed){
        break;
      }
      yield null;
    }
    yield game();
  };

  const centX = WIDTH/2;
  const centY = HEIGHT/2;
  class Wind {
    constructor(angle,vel){
      this.angle = angle;
      this.vel = vel / 60;
      const dx = Math.max(WIDTH-centX, centX);
      const dy = Math.max(HEIGHT-centY, centY);
      this.len = Math.sqrt(dx*dx + dy*dy) + this.vel;
      this.obj = newText("鬚ｨ", 32, 0xffffff);
      this.obj.anchor.set(0.5, 0.5);
      this.update();
    }
    update(){
      this.len = Math.max(0, this.len - this.vel);
      this.x = centX + this.len * Math.cos(this.angle);
      this.y = centY + this.len * Math.sin(this.angle);
      this.obj.position.set(this.x, this.y);
    }
  }

  class Bar {
    constructor(level){
      this.r = 64;
      this.vel = (2 * Math.PI) / 60 * f(level) * 1.1;
      this.angle = Math.PI * 1.5;
      this.obj = newText("笳�", 32, 0xffffff);
      this.obj.anchor.set(0.5, 0.5);
      this.update(false,false);
    }
    update(isLeft, isRight){
      if(isLeft){
        this.angle -= this.vel;
      }
      if(isRight){
        this.angle += this.vel;
      }
      if(this.angle < 0){
        this.angle += 2*Math.PI;
      }else if(this.angle > 2*Math.PI){
        this.angle -= 2*Math.PI;
      }
      this.x = centX + this.r * Math.cos(this.angle);
      this.y = centY + this.r * Math.sin(this.angle);
      this.obj.position.set(this.x, this.y);
      this.obj.rotation = this.angle + Math.PI*0.5;
    }
    hit(that){
      // 譛ｬ蠖薙�邱壼�縺ｨ蜀��蠖薙◆繧雁愛螳壹□縺代←髱｢蛟偵↑縺ｮ縺ｧ縺ｨ繧翫≠縺医★蜀��蛻､螳壹〒(蠎�☆縺弱ぅ��ｼ�ｼ�)
      const dx = this.x - that.x;
      const dy = this.y - that.y;
      const dr = 32;
      return dx*dx + dy*dy <= dr*dr;
    }
  }

  const f = (x)=>{
    const y = 10;
    return Math.log(x/y+1) + 1;
  }

  const strategies = [
    function*(level){
      // 360-degree rotation
      // level1, 5sec, 16winds
      const beginAngle = Math.random() * 2 * Math.PI;
      const way = Math.random()<0.5 ? 1 : -1;
      const sec = 5;
      const winds = 16;
      let time = 0;
      let unit = sec / winds;
      let nxtTime = 0;
      let count = 0;
      while(count < winds){
        time += 1/60 * f(level);
        const ret = [];
        while(time >= nxtTime){
          nxtTime += unit;
          ret.push(beginAngle + 2*Math.PI*count/winds*way);
          count++;
        }
        yield ret;
      }
    },
    function*(level){
      // sushi
      const sec = 5;
      const winds = 8;
      let time = 0;
      let unit = sec / winds;
      let nxtTime = 0;
      let count = 0;
      while(count < winds){
        time += 1/60 * f(level);
        const ret = [];
        while(time >= nxtTime){
          nxtTime += unit;
          const po = Math.floor(4*Math.random());
          ret.push(Math.PI/2*po);
          count++;
        }
        yield ret;
      }
    },
    function*(level){
      // sushi 45 rotated
      const sec = 5;
      const winds = 8;
      let time = 0;
      let unit = sec / winds;
      let nxtTime = 0;
      let count = 0;
      while(count < winds){
        time += 1/60 * f(level);
        const ret = [];
        while(time >= nxtTime){
          nxtTime += unit;
          const po = Math.floor(4*Math.random());
          ret.push(Math.PI/2*po+Math.PI/4);
          count++;
        }
        yield ret;
      }
    },
    function*(level){
      // sushi 6-way
      const sec = 5;
      const winds = 8;
      let time = 0;
      let unit = sec / winds;
      let nxtTime = 0;
      let count = 0;
      while(count < winds){
        time += 1/60 * f(level);
        const ret = [];
        while(time >= nxtTime){
          nxtTime += unit;
          const po = Math.floor(6*Math.random());
          ret.push(Math.PI/3*po);
          count++;
        }
        yield ret;
      }
    },
    function*(level){
      // sushi 8-way
      const sec = 5;
      const winds = 8;
      let time = 0;
      let unit = sec / winds;
      let nxtTime = 0;
      let count = 0;
      while(count < winds){
        time += 1/60 * f(level);
        const ret = [];
        while(time >= nxtTime){
          nxtTime += unit;
          const po = Math.floor(8*Math.random());
          ret.push(Math.PI/4*po);
          count++;
        }
        yield ret;
      }
    },
  ];
  const getStrategy = (level)=>{
    const strat = strategies[Math.floor(Math.random() * strategies.length)];
    return strat(level);
  };

  const game = function*(){
    stage = new Container();
    const blackbg = new Graphics();
    blackbg.beginFill(0);
    blackbg.drawRect(0,0,WIDTH,HEIGHT);
    blackbg.endFill();
    stage.addChild(blackbg);

    let hanabiBou, hanabiSpark;

    let level = 1;

    const MAX_HP = 8;
    let hp = MAX_HP;

    while(true){
      // the wind is howling...
      {
        const rect = new Graphics();
        rect.beginFill(0x000000);
        rect.lineStyle(3,0xffffff,1);
        rect.drawRect(30, HEIGHT/2-10, WIDTH-60, 160);
        rect.endFill();
        stage.addChild(rect);

        const wind = newText("* The wind is howling...", 32, 0xffffff);
        wind.x = 30 + 30;
        wind.y = HEIGHT/2-10 + 30;
        stage.addChild(wind);
        for(let i=0;i<60;i++){
          yield null;
        }
        stage.removeChild(rect);
        stage.removeChild(wind);
      }
      // zoom in
      {
        for(let i=0;i<20;i++){
          const rate = i/20;
          const x = 30 + (10-30)*rate;
          const y = (HEIGHT/2-10) + (10 - (HEIGHT/2-10))*rate;
          const w = (WIDTH-60) + ((WIDTH-20)-(WIDTH-60))*rate;
          const h = 160 + ((HEIGHT-20)-160)*rate;
          const rect = new Graphics();
          rect.beginFill(0x000000);
          rect.lineStyle(3,0xffffff,1);
          rect.drawRect(x,y,w,h);
          rect.endFill();
          stage.addChild(rect);
          yield null;
          stage.removeChild(rect);
        }
      }
      const rect = new Graphics();
      rect.beginFill(0x000000);
      rect.lineStyle(3,0xffffff,1);
      rect.drawRect(10,10,WIDTH-20,HEIGHT-20);
      rect.endFill();
      stage.addChild(rect);

      const wx = 40;
      const wy = 80;
      const ww = WIDTH-wx-wx;
      const wh = 20;
      const waku = new Graphics();
      waku.beginFill(0,0);
      waku.lineStyle(3,0xffffff);
      waku.drawRect(wx,wy,ww,wh);
      waku.endFill();
      const nakami = new Graphics();
      nakami.beginFill(0xff0000);
      nakami.drawRect(0,0,ww,wh);
      nakami.endFill();
      nakami.position.set(wx,wy);
      stage.addChild(nakami);
      stage.addChild(waku);

      hanabiBou = new Graphics();
      hanabiBou.beginFill(0xffffff);
      const hanabiWidth = 4;
      hanabiBou.drawRect(WIDTH/2-hanabiWidth/2,10,hanabiWidth,(HEIGHT-20)/2);
      hanabiBou.endFill();
      stage.addChild(hanabiBou);

      hanabiSpark = new Graphics();
      for(let i=0;i<16;i++){
        const breadth = 1 + Math.random()*3;
        const red = Math.max(0,Math.min(0xff,(0xff+(Math.random()*64)-32)^0));
        const green = Math.max(0,Math.min(0xff,(0x80+(Math.random()*64)-32)^0));
        const blue = Math.max(0,Math.min(0xff,(0x00+(Math.random()*64)-32)^0));
        const color = (red * 0x010000) + (green * 0x000100) + (blue * 0x000001);
        const len = 16 + Math.random()*8;
        const angle = Math.random() * 2*Math.PI;
        const tx = WIDTH/2 + len*Math.cos(angle);
        const ty = HEIGHT/2 + len*Math.sin(angle);
        hanabiSpark.lineStyle(breadth,color).moveTo(WIDTH/2, HEIGHT/2).lineTo(tx,ty);
      }
      hanabiSpark.beginFill(0xff8000);
      hanabiSpark.drawCircle(WIDTH/2, HEIGHT/2, 16);
      hanabiSpark.endFill();
      stage.addChild(hanabiSpark);

      const guideCircle = new Graphics();
      guideCircle.beginFill(0xff0000,0);
      guideCircle.lineStyle(2,0xffffff,1);
      guideCircle.drawCircle(WIDTH/2, HEIGHT/2, 64);
      guideCircle.endFill();
      stage.addChild(guideCircle);

      const bar = new Bar(level);
      stage.addChild(bar.obj);

      const levelText = newText(`level ${level}`,32,0x9999ff);
      levelText.x = WIDTH - 160;
      levelText.y = HEIGHT - 40;
      stage.addChild(levelText);

      let winds = [];

      const strategy = getStrategy(level);

      while(true){
        // main routine
        const isLeft = keys[KEY_LEFT].isPressed;
        const isRight = keys[KEY_RIGHT].isPressed;
        // strategy
        const strNext = strategy.next();
        if(strNext.value)for(const angle of strNext.value){
          const wind = new Wind(angle, 128 * f(level));
          winds.push(wind);
          stage.addChild(wind.obj);
        }
        // update
        bar.update(isLeft, isRight);
        const nextWinds = [];
        for(const o of winds){
          o.update();
          if(!bar.hit(o)){
            if(o.len <= 32){
              // damage (or game over)
              hp--;
              stage.removeChild(o.obj);
            }else{
              nextWinds.push(o);
            }
          }else{
            // hit
            stage.removeChild(o.obj);
          }
        }
        winds = nextWinds;
        nakami.scale.x = hp / MAX_HP;
        const levelEnd = strNext.done && (winds.length === 0);
        if(levelEnd){
          break;
        }
        if(hp<=0){
          break;
        }
        yield null;
      }

      // end
      stage.removeChild(rect);
      stage.removeChild(waku);
      stage.removeChild(nakami);
      stage.removeChild(guideCircle);
      stage.removeChild(hanabiBou);
      stage.removeChild(hanabiSpark);
      stage.removeChild(bar.obj);
      stage.removeChild(levelText);
      for(const o of winds){
        stage.removeChild(o.obj);
      }

      if(hp<=0){
        break;
      }else{
        level++;
      }

      // zoom out
      {
        for(let i=0;i<20;i++){
          const rate = 1-i/20;
          const x = 30 + (10-30)*rate;
          const y = (HEIGHT/2-10) + (10 - (HEIGHT/2-10))*rate;
          const w = (WIDTH-60) + ((WIDTH-20)-(WIDTH-60))*rate;
          const h = 160 + ((HEIGHT-20)-160)*rate;
          const rect = new Graphics();
          rect.beginFill(0x000000);
          rect.lineStyle(3,0xffffff,1);
          rect.drawRect(x,y,w,h);
          rect.endFill();
          stage.addChild(rect);
          yield null;
          stage.removeChild(rect);
        }
      }
    }

    // death effect
    stage.addChild(hanabiBou);
    stage.addChild(hanabiSpark);
    for(let i=0;i<60;i++){
      yield null;
    }
    hanabiSpark.y += 32;
    for(let i=0;i<60;i++){
      yield null;
    }
    stage.removeChild(hanabiSpark);
    const cx = WIDTH/2;
    const cy = HEIGHT/2+hanabiSpark.y;
    const sparkles = [];
    for(let i=0;i<64;i++){
      const p = new Graphics();
      const red = Math.max(0,Math.min(0xff,(0xff+(Math.random()*64)-32)^0));
      const green = Math.max(0,Math.min(0xff,(0x80+(Math.random()*64)-32)^0));
      const blue = Math.max(0,Math.min(0xff,(0x00+(Math.random()*64)-32)^0));
      const color = (red * 0x010000) + (green * 0x000100) + (blue * 0x000001);
      p.beginFill(color);
      p.drawCircle(0,0,2+Math.random()*4);
      p.endFill();
      const angle = 2*Math.PI*Math.random();
      const vlen = 4+8*Math.random();
      p.vx = vlen * Math.cos(angle);
      p.vy = vlen * Math.sin(angle);
      p.position.set(cx,cy);
      stage.addChild(p);
      sparkles.push(p);
    }
    for(let i=0;i<120;i++){
      for(const p of sparkles){
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.5;
      }
      yield null;
    }
    stage.removeChild(hanabiSpark);
    for(const p of sparkles){
      stage.removeChild(p);
    }

    const gameOverText = newText("GAME\nOVER",96,0xffffff);
    gameOverText.anchor.set(0.5, 0.5);
    gameOverText.position.set(WIDTH/2-4, HEIGHT/2-96);
    gameOverText.alpha = 0;
    stage.addChild(gameOverText);
    for(let i=0;i<60;i++){
      const rate = i/60;
      gameOverText.alpha = rate;
      hanabiBou.alpha = 1-rate;
      yield null;
    }
    stage.removeChild(hanabiBou);
    gameOverText.alpha = 1;
    for(let i=0;i<60;i++){
      yield null;
    }

    const scoreText = newText(`Your score : ${level}`,32,0xffffff);
    scoreText.anchor.set(0.5, 0.5);
    scoreText.position.set(WIDTH/2, HEIGHT/2+96);
    stage.addChild(scoreText);
    for(let i=0;i<60;i++){
      yield null;
    }

    const tweetText = newText("竊薙ヤ繧､繝ｼ繝医�繧ｿ繝ｳ",32,0x99ffff);
    tweetText.anchor.set(0,0);
    tweetText.position.set(10, HEIGHT-40);
    stage.addChild(tweetText);

    const txt = encodeURIComponent(`[The Sparkler is Howling] level : ${level}`);
    const url = `https://twitter.com/intent/tweet?hashtags=traP3jam&text=${txt}&url=http%3A%2F%2Fn-a.rip%2Fgamejam%2Fundyne%2F`;
    document.body.insertAdjacentHTML("beforeend", `<br><p><a href=${url} target="_blank">繝�う繝ｼ繝医☆繧�</a></p>`);

    // stopper
    while(true)yield null;
  };

  const result = function*(el,ol){
    stage = new Container();

    // 縺�ｓ縺｡
    // 縺ｯ縺励ｃ縺弱☆縺趣ｼ�ｼ�ｼ�ｼ�ｼ�ｼ�ｼ�ｼ�ｼ�ｼ�ｼ�ｼ�ｼ�ｼ�ｼ�ｼ�ｼ�ｼ�ｼ�ｼ�ｼ�ｼ�ｼ�ｼ�ｼ�ｼ�ｼ�ｼ�ｼ�

    while(true)yield null;
  };

  let current;
  const setup = function(){
    current = title();
    // current = game();
    // current = result([],[]);
    update();
  };
  const update = function(){
    requestAnimationFrame(update);
    for(const i in keys){
      keys[i].update();
    }
    const next = current.next().value;
    if(next !== null){
      current = next;
    }
    renderer.render(stage);
  };

  for(const i in RESOURCES_FILES){
    loader.add(RESOURCES_FILES[i][0], RESOURCES_FILES[i][1]);
  }
  if(RESOURCES_FILES.length > 0){
    loader.load(setup);
  }else{
    setup();
  }
};
