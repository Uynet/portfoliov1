<template>

<div>

<h3>制作物</h3>

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
        hilight:"第七回GAME^3優勝",
        passage:"JS製2Dアクションゲームです",
        link:"http://kawasemi.uynet.trap.show",
        moment:"https://twitter.com/i/moments/953677385584427008",
        code:"https://github.com/Uynet/kawasemi",
        },
        {
        path:"artc",
        title:"芸術C",
        hilight:false,
        passage:"スマホで開いてね",
        link:"http://artc.uynet.trap.show",
        moment:false,
        code:"https://github.com/Uynet/artc",
        },
        {
        path:"raitracing",
        title:"レイトレ",
        hilight:false,
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
