<template>
<div>
<div v-for="product in products" class="containts">
<frame v-bind:product="product"></frame>
</div>
</div>
</template>
<script>
import frame from "./frame";
export default{ 
  props:["products"],
  components:{
    frame:frame
  },
}
</script>
