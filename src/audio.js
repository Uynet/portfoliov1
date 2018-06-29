//サウンド管理
let source,buffer,gainNode;
let loaded = false
export default class Audio{
  static Init(){
    if(loaded){
      window.AudioContext = window.AudioContext || window.webkitAudioContext;
      this.context = new AudioContext();
      this.BGM = { } 
        this.SE = { }
          this.stack = [];
        this.Load();
      loaded = true
    }
  };
  static LoadSE(name){
    let url = "resource/SE/" + name + ".wav";
    let req = new XMLHttpRequest();
    // array buffer を指定
    req.responseType = 'arraybuffer';
    req.onreadystatechange = ()=>{
      if (req.readyState === 4) {
        if (req.status === 0 || req.status === 200) {
          // array buffer を audio buffer に変換
          this.context.decodeAudioData(req.response,
            (buffer)=>{this.SE[name] = buffer
            });
        }
      }
    }
    req.open('GET', url, true);
    req.send('');
  }
  static LoadBGM(name){
    let url = "src/resource/BGM/" + name + ".mp3";
    let req = new XMLHttpRequest();
    // array buffer を指定
    req.responseType = 'arraybuffer';
    req.onreadystatechange = ()=>{
      if (req.readyState === 4) {
        if (req.status === 0 || req.status === 200) {
          // array buffer を audio buffer に変換
          this.context.decodeAudioData(req.response,(buffer)=>{this.BGM[name] = buffer});
        }
      }
    }
    req.open('GET', url, true);
    req.send('');
  }
  // サウンドを再生
  static async PlayBGM(name,gain){
    let buffer = this.BGM[name];
    source = this.context.createBufferSource(); // source を作成
    source.buffer = buffer; // buffer をセット
    source.connect(this.context.destination); // context に connect
    source.loop = true; // 再生
      if(gain){
        let gainNode = this.context.createGain();
        source.connect(gainNode);
        gainNode.connect(this.context.destination);
        gainNode.gain.value = gain;
      }
    source.start(0);
    return;
  };
  static PlaySE(name,gain,pitch){
    source = this.context.createBufferSource();
    source.buffer = this.SE[name];
    source.connect(this.context.destination);
    source.loop = false; // 再生
      if(!pitch)pitch = 1;
    source.playbackRate.value = pitch + Rand(0.05);
    gainNode = this.context.createGain();
    source.connect(gainNode);
    gainNode.connect(this.context.destination);
    gainNode.gain.value = 1;
    if(gain) gainNode.gain.value += gain;
    source.start(0);
  };
  static Load() {
    return new Promise(res=>{
      this.Init();
      //!ココで読み込むnameはファイル名に統一すること!
      this.LoadSE('click');
      res();
    })
  };
};
