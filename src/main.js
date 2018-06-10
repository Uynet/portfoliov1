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
      { id: 2, text: "po" },
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
    view: 'v-b',
  },
  components: {
    'v-a': { template: '<div>A</div>' },
    'v-b': { template: '<div>B</div>' }
  },
  methods:{
    change:function(){
      if(this.view == "v-a")this.view = "v-b";
      else if (this.view == "v-b")this.view = "v-a";
      console.log(this.view);
    }
  },
})

  

