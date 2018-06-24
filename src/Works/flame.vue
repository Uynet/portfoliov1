<template>
<div class="flame">
     <div class="image">
       <img v-bind:src="path" class="unko"></img>
     </div>

     <div class="title">
      -  {{this.product.title}}  -
     </div>
     <div class="passage">
     {{this.product.passage}}
     </div>
</div>
</template>
<script>
export default{ 
  props:["product"],
  computed:{
    path:function(){
      return "../../resource/" + this.product.path + ".png"; 
    }
  }
}
</script>
