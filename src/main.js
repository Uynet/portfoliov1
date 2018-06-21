import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from "./routes.js"
import item from "./item";
import sidebar from "./sidebar";
import hambar from "./hambar.vue";
Vue.use(VueRouter);

const router = new VueRouter({routes})

const container = new Vue({
  router,
  el:"#page", data:{
    state:"fas fa-bars",
    sidebarstate:"closed",
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
    sidebar:sidebar,
    item:item,
    hambar:hambar,
  },
  methods:{
    slide:function(){
      if(this.sidebarstate=="closed"){
        this.sidebarstate = "open";
        this.layer = "layer_dark";
        this.state = "fas fa-times";
      }
      else{
        this.sidebarstate = "closed";
        this.layer = "layer";
        this.state = "fas fa-bars";
      }
    },
    open:function(){
      this.layer2 = "layer2_trans"
    }
  }
})

