import homePageController from '../controllers/homePageController'

export default app => {


  app.get('/', homePageController)
  /** 404 */
  // app.get('*', notFoundPageController)

}