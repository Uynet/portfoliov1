import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from "./routes.js"
import item from "./item";
import sidebar from "./sidebar";
Vue.use(VueRouter);

const cl = console.log
const router = new VueRouter({routes})

Vue.component('item-menu', {
  props:["title","layer2"],
  methods:{
    open:function(){
      container.open(this.title);
    }
  },
  template:`
  <div v-on:click="open">{{title}}
    <div class="label"></div>
  </div>
  `
});

const container = new Vue({
  router,
  el:"#page",
  data:{
    state:"fas fa-bars",
    sidebar:"sidebar",
    container:"container",
    layer:"layer",
    layer2:"layer2",
    items:[
      { message:"Top",path:"./" },
      { message:"About",path:"/about" },
      { message:"Works",path:"./works" },
    ],
  },
  components:{
    item:item,
  },
  methods:{
    slide:function(){
      if(this.sidebar=="sidebar"){
        this.sidebar = "sidebar_open";
        this.layer = "layer_dark";
        this.state = "fas fa-times";
      }
      else{
        this.sidebar = "sidebar";
        this.layer = "layer";
        this.state = "fas fa-bars";
      }
    },
    open:function(){
      this.layer2 = "layer2_trans"
    }
  }
})

