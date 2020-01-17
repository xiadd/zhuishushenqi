/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app
  /**
   * 首页门面controller
   */
  router.get('/', controller.home.index)
  router.get('/examples', controller.home.examples)
  router.get('/analysis', controller.home.analysis)
  /**
   * 小说相关controller
   */
  router.get('/books', controller.novel.list)
  router.get('/book/:id', controller.novel.detail)
  router.get('/book/:id/:cid', controller.novel.chapterDetail)
};
