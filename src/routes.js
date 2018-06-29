import index from './index.vue';
import about from './about.vue';
import works from './Works/works.vue';
import project from './project.vue';

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
    path: '/project',
    component: project
  },
]
