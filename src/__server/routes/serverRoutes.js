import {
  HOME_PAGE_URL,
  USER_PAGE_URL,
  NOT_FOUND_URL
} from 'configs/constants'

import userStatusController from '../controllers/userStatusController'
import homePageController from '../controllers/homePageController'
import notFoundPageController from '../controllers/notFoundPageController'

export default app => {
  app.get(HOME_PAGE_URL, homePageController)
  app.get(USER_PAGE_URL, userStatusController)
  /** 404 */
  app.get(NOT_FOUND_URL, notFoundPageController)
}