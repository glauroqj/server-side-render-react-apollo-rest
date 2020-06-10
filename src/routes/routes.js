import Home from 'pages/Home/Home'
import PlayerStatus from 'pages/PlayerStatus/PlayerStatus'

const routes = [
  {
    path: '/',
    name: 'home',
    exact: true,
    component: Home,
  },
  {
    path: '/player/:account_id',
    name: 'playerStatus',
    exact: true,
    component: PlayerStatus,
  }
]

export default routes