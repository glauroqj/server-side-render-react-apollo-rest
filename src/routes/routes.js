import {
  HOME_PAGE_URL,
  USER_PAGE_URL,
  NOT_FOUND_URL
} from 'configs/constants'

import Home from 'pages/Home/Home'
import UserStatus from 'pages/UserStatus/UserStatus'
import NotFound from 'pages/NotFound/NotFound'

const routes = [
  {
    path: HOME_PAGE_URL,
    name: 'home',
    exact: true,
    component: Home,
  },
  {
    path: USER_PAGE_URL,
    name: 'userStatus',
    exact: true,
    component: UserStatus,
  },
  {
    path: NOT_FOUND_URL,
    name: 'notFound',
    exact: false,
    component: NotFound,
  }
]

export default routes