<template>
   <div v-bind:class="this.sidebarclass">
        <div class = "menu">
          <div class="menutitle">☆めにゅ〜</div>
          <div class="label2"></div>

          <div class = "item" v-for="item in items">
          <router-link v-bind:to="item.path"style="color:#e0e0e1">
            <item v-bind:path="item.path" v-bind:title="item.message"></item>
          </router-link>
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
  },
  computed:{
    sidebarclass:function(){
      switch(this.state){
         case "closed" : return "sidebar_closed";
         case "open" : return "sidebar_open";
         default :return "error";
      }
    }
  }
}
</script>
