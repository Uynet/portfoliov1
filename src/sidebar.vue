<template>
      <div v-bind:class="state">
        <div class = "menu">
          <div class="menutitle">☆めにゅ〜</div>
          <div class="label2"></div>

          <div class = "item" v-for="item in items">
            <item v-bind:path="item.path" v-bind:title="item.message"></item>
          </div>
        </div>
      </div>
</template>

<script>
import item from "./item";
export default{ 
  props:["items","state"],
  components:{
    item:item
  }
}
</script>
