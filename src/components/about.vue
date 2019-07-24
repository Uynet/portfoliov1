<template>
<div align="center">

<BGEffect></BGEffect>
<div class="headbox">︎こんにちわ</div>
    <div align="center">
      <img class="profile_icon" src = "../../resource/img/icon.png"></img>
      <div class="profile_name">uynet </div>
    </div>

  <div class="frame" style="max-width:100%">
  　　作曲かプログラミング
  </div>
  <div class="frame" style="max-width:100%">
    <table border="0">
  <tr>
    <th></th><th></th>
  </tr>
  <tr>
    <td>名前</td><td>|</td><td>美座天佑</td>
  </tr>
  <tr>
    <td>誕生日</td><td>|</td><td>1996/12/19</td>
  </tr>
  <tr>
    <td>所属 </td><td>|</td><td> 東京工業大学/情報理工学院M1</td>
  </tr>
    <td>サークル </td><td>|</td><td><a href="http://trap.jp" > デジタル創作同好会traP
    <i class="fas fa-external-link-alt"></i></a>
    <br></td>
     </table>


  </div>
<div class="frame" style="max-width:100%" align="center">
<h3>受賞など</h3>
GooglePlayIndieGameFestival  /  Top10<br>
DeNAサマーインターンシップ /  優勝<br>
U22プログラミングコンテスト2018  / 経済産業大臣賞<br>
BCN ITジュニア賞<br>
</div>
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
