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
 
export default{ 
  data:function(){
  return {
      products:[
        {title:"kawasemi"},
        {title:"artc"},
      ],
    }
  },
  components:{
    containts:containts
  },
}
</script>
