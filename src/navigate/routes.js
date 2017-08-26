import { routes as auth } from './auth'
import Home from 'components/Home'

const home = {
  name: 'home-view',
  path: '/',
  meta: { requiresAuth: true },
  component: Home
}

const routes = [ ...home, ...auth ]
export default [ ...routes ]
