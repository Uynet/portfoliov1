import index from './index.vue';
import about from './about.vue';
import works from './Works/works.vue';
import blog from './blog.vue';
import post0 from './Posts/post0.vue';

export default [
  {
    path: '/',
    component: index
  },
  {
    path: '/about',
    component: about
  },
  {
    path: '/works',
    component: works
  },
  {
    path: '/blog',
    component: blog
  },
  {
    path: '/post/0',
    component: post0
  },
]
