import MainView from '@/views/MainView.vue'
import HomeView from '@/views/HomeView.vue'
import RegisterView from '@/views/RegisterView.vue'

const routes = () => [
  {
    path: '/',
    name: 'Home',
    component: MainView,
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'Home',
        component: HomeView,
      },
      {
        path: '/register',
        name: 'Register',
        component: RegisterView,
      },
    ],
  },
]

export default routes
