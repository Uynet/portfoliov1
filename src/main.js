import Vue from 'vue'
import App from './App.vue'

Vue.component('item-menu', {
  props:["title","open"],
  template:`
  <div v-on:click="open">{{title}}<div class="label"></div></div>
  `
});

new Vue({
  el:"#page",
  data:{
    sidebar:"sidebar",
    container:"container",
    layer:"layer",
    items:[
      {
        message:"About",
        open:function(){
          console.log("po");
        }
      },
      {
        message:"Works",
        open:function(){
          console.log("po");
        }
      },
      {
        message:"Unko",
        open:function(){
          console.log("po");
        }
      },
    ],
  },
  methods:{
    slide:function(){
      console.log(this.layer)
      if(this.sidebar=="sidebar"){
        this.sidebar = "sidebar_open";
        this.layer = "layer_dark";
      }
      else{
        this.sidebar = "sidebar";
        this.layer = "layer";
      }
    },
  }
})

