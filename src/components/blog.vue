<template>
<div align="center">
    <div class="headbox">︎ブログ</div>
<BGEffect></BGEffect>

<div class="frame">
△!工事中!△
</div>
<!--div class="frame">
<h4>ゆいブログができるまで</h4>
ポートフォリオサイト作ってみました<br>
<router-link to="post/0">(...続きを読む)</router-link>
<div style="font-size:12px">2018/7/12/1:22</div>
</div-->



</div>
</template>
<script>
import BGEffect from "./BGEffect";
export default{
  props:["products"],
  components:{
    BGEffect:BGEffect
  },
}
</script>

