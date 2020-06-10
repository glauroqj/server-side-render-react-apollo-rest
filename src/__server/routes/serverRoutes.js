import homePageController from 'server/controllers/homePageController.js'

export default app => {


  app.get('/', homePageController)
  /** 404 */
  // app.get('*', notFoundPageController)

}