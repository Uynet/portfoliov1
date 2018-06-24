<template>
<div>
<div v-for="product in products" align="center">
<flame v-bind:product="product"></flame>
</div>
</div>
</template>
<script>
import flame from "./flame";
export default{ 
  props:["products"],
  components:{
    flame:flame
  },
}
</script>
