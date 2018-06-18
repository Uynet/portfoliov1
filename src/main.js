import Vue from 'vue'
import App from './App.vue'

Vue.component('item-menu', {
  props:["title","layer2"],
  methods:{
    open:function(){
      switch(this.title){
        case "About" :
          console.log(this.layer2);
          break;
        case "Works" :
          break;
        case "Music" :
          break;
      }
    }
  },
  template:`
  <div v-on:click="open">{{title}}
    <div class="label"></div>
  </div>
  `
});

new Vue({
  el:"#page",
  data:{
    sidebar:"sidebar",
    container:"container",
    layer:"layer",
    layer2:"layer2",
    items:[
      {
        message:"About",
      },
      {
        message:"Works",
      },
      {
        message:"Music",
      },
    ],
  },
  methods:{
    slide:function(){
      if(this.sidebar=="sidebar"){
        this.sidebar = "sidebar_open";
        this.layer = "layer_dark";
      }
      else{
        this.sidebar = "sidebar";
        this.layer = "layer";
      }
    },
    open:function(){
    }
  }
})

