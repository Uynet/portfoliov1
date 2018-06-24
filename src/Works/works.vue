<template>

<div>

<div align="center">作品おきば</div>

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
        passage:"ゲームです",
        },
        {
        path:"artc",
        title:"芸術C",
        passage:"スマホで開いてね",
        },
      ],
    }
  },
  components:{
    containts:containts
  },
}
</script>
