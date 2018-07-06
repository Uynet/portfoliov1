<template>
<div>
        <div class = "logo" align="center">
          ゆいブログ
          <div class = "logo_subtext">
          - トップ絵描き途中 -
          </div>
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
