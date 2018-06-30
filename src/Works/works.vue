<template>

<div>

<h3 style="color:#6a446d">さくひんおきば</h3>
<div class="label"></div>

<containts v-bind:products="this.products" align="center">

</containts>

</div>
</template>
<script>
import containts from "./containts";

export default{ 
  data:function(){
  return {
      musics:[
      {
      title:"Stardust",
      passage:"2018春新歓コンピ",
      },
      ],
      products:[
        {
        path:"kawasemi",
        title:"kawasemi",
        passage:"JS製2Dアクションゲームです",
        link:"http://kawasemi.uynet.trap.show",
        moment:"https://twitter.com/i/moments/953677385584427008",
        code:"https://github.com/Uynet/kawasemi",
        },
        {
        path:"artc",
        title:"芸術C",
        passage:"スマホで開いてね",
        link:"http://artc.uynet.trap.show",
        moment:false,
        code:"https://github.com/Uynet/artc",
        },
        {
        path:"raitracing",
        title:"レイトレ",
        passage:"レイトレしただけ",
        link:false,
        moment:false,
        code:"https://github.com/Uynet/RayTracing",
        },
      ],
    }
  },
  components:{
    containts:containts
  },
}
</script>
