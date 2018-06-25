<template>

<div>

<div align="center" class="works">作品おきば</div>

<containts v-bind:products="this.products"></containts>

</div>
</template>
<script>
import containts from "./containts";

export default{ 
  data:function(){
  return {
      products:[
        {
        path:"kawasemi",
        title:"kawasemi",
        passage:"JS製2Dアクションゲームです",
        link:"http://kawasemi.uynet.trap.show",
        },
        {
        path:"artc",
        title:"芸術C",
        passage:"スマホで開いてね",
        link:"http://artc.uynet.trap.show",
        },
      ],
    }
  },
  components:{
    containts:containts
  },
}
</script>
