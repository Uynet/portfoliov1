<template>

<div >

<div align="center">作品おきば</div>
<div align="center">
<router-link to="/">もどるポヨ</router-link>
</div>

<containts v-bind:products="this.products"></containts>

</div>
</template>
<script>
import containts from "./containts";
import container from "./main.js";
 
console.log(container);

export default{ 
  data:function(){
  return {
      products:[
        {title:1},
        {title:2},
        {title:3},
        {title:4},
      ],
    }
  },
  components:{
    containts:containts
  },
}
</script>
