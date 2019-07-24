<template>
<div v-on:click="linkTo">
  {{title}}
  <div class="label"></div>
</div>
</template>

<script type="module">
export default{
  props:["title","path"],
  methods:{
    linkTo:function(){
    }
  },
}
</script>
