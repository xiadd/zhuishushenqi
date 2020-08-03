/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app
  /**
   * 小说相关controller
   */

  // 书籍列表
  router.get('/books', controller.novel.list)
  // 书籍详情
  router.get('/book/:id', controller.novel.detail)
  // 章节列表
  router.get('/book/:id/chapters', controller.novel.chapters)
  // 章节详情
  router.get('/book/:id/chapters/:cid', controller.novel.chapterDetail)
  // 搜索小说
  router.get('/search', controller.novel.searchBooks)

  /**
   * 首页门面controller
   */
  router.get('*', controller.home.index)
  router.get('/examples', controller.home.examples)
  router.get('/analysis', controller.home.analysis)
};
