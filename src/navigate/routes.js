import { routes as auth } from 'navigate/auth'
import Home from 'components/Home'

const routes = [
  {
    path: '/',
    component: Home,
    meta: {
      requiresAuth: true
    },
    children: [

    ]
  },
  ...auth
]

export default [ ...routes ]
