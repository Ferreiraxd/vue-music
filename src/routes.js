import Search from './views/Search.vue';
import About from '@/views/About.vue';
import TrackDetail from '@/views/TrackDetail.vue';

function guardMyroute(to, from, next)
{
  if(from.name !== 'search'){
    next('/search');
  } else {
    next();
  }
}


const routes = [
  {
    path: '/',
    component: Search,
    name: 'search'
  },
  {
    path: '/about',
    component: About,
    name: 'about'
  },
  {
    path: '/track/:id',
    component: TrackDetail,
    beforeEnter: guardMyroute,
    name: 'track-detail'
  }
];

export default routes;
