import Vue from 'vue'
import App from './App.vue'


Vue.component('todo-item', {
  props: ['todo'],
  template: '<div class="box">{{ todo.text }}</div>'
})

var app = new Vue({
  el: '#app',
  data: {
    menu: [
      { id: 0, text: 'About' },
      { id: 1, text: "Works" },
      { id: 1, text: "経歴" },
    ],
  },
  methods: {
    a: function () {
      this.menu[0].text = "こんにちは"
      this.menu[1].text = "ぽきた"
      this.menu[2].text = "ぽやしみ"
      this.menu[3].text = "ぽはよう"
    }
  }
})

new Vue({
  el: "#trans",
  data: { 
    view: 'v-a',
    count:0,
  },
  components: {
    'v-a': { template: '<div>Component A</div>' },
    'v-b': { template: '<div>Component B</div>' }
  }
})

new Vue({
  el:"#po",
  data:{
    todos:[
      {text:0},
      {text:1},
      {text:2},
    ],
    message:"p"
  },
  methods:{
    add:function(){
      this.todos.push({text:"unko"})
    }
  },
  watch:{
    message:function(){
      this.todos[0].text.concat(".");
    }
  }
  
})

new Vue({
  el:"#ye",
  data:{
    isActive: false,
    hasError: false
  }
})

Vue.component("blog",{
  props:["post"],
  template: `
  <div class="blog">
  <h3>{{ post.title }}</h3>
  <div v-html="post.content"></div>
  </div>
  `

})
new Vue({
  el:"#ii",
  data:{
    posts:[
     { title:"un1",content:"<h1>うｎかおあおｒｋゔぁのろあ<br></h1><s>ぽぽぽぽぽwwwwww<br><br><br><i>うんちうんち</i> <img src=`chara.png`></s>" },
     { title:"un1" },
     { title:"un1" },
    ],
  }
})
