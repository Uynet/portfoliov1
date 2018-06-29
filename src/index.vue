<template>
<div>
        <div class = "logo" align="center">
          ゆいブログ
          <div class = "logo_subtext"></div>
        </div>
        <div class="chara" align="center">

          <div class="greeting" align="center">
            <marquee scrolldelay="400">{{emo}}</marquee>
          </div>
          <br>
          <img src="resource/chara.png">
          <div class=logo_subtext>イメージキャラクター"ゆいちゃん"</div>
        </div>
        </div>
</template>

<script>
export default{ 
  computed:{
    emo:function(){
      if(Math.random()<0.5){
        return "よおこそ♨";
      }else{
        return "こんにちわ☼";
      }
    },
  }
}
</script>
