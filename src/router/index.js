import Router from 'koa-router'
import jwt from 'koa-jwt'
import categoryController from '../controller/category'
import bookController from '../controller/book'
import rankController from '../controller/rank'
import homeController from '../controller/home'
import commentsController from '../controller/comment'
import BookListController from '../controller/booklist'
import SystemController from '../controller/system'

const router = new Router()

//设置前缀
// router.prefix('/api')
/**
 * 分类相关路由
 */

// 首页
// router.get('/', homeController.index)

// 登录
// router.get('/authenticate', UserController.userLogin)
//router.get('/authenticate', UserController.userLogin)

//设置jwt 权限
// router.use(jwt({ secret: JWTSecret }))  如果需要授权的话

/**
 * @api {get} /categories 获取父级分类
 * @apiGroup Categories
 */
router.get('/categories', categoryController.getCategoriesWithBookCount)

/**
 * @api {get} /sub-categories 获取带子分类的分类
 * @apiGroup Categories
 */
router.get('/sub-categories', categoryController.getCategoriesWithSubCategories)

/**
 * @api {get} /category-info 获取分类详情
 * @apiGroup Categories
 */
router.get('/category-info', categoryController.getCategoryInfo)

/**
 * @api {get} /book-info/:id 获取书籍详情
 * @apiGroup Book
 */
router.get('/book-info/:id', bookController.getBookInfo)

/**
 * @api {get} /recommend/:id 获取书籍相关推荐
 * @apiGroup Book
 */
router.get('/recommend/:id', bookController.getRelatedRecommendedBooks)

// 获取书籍热评
router.get('/comments/:id', bookController.getHotComments)

// 获取作者名下的书籍
router.get('/author-books', bookController.getAuthorBooks)

// 获取书籍章节 id: 书源id
router.get('/book-chapters/:id', bookController.getBookChapters)

// 获取章节详细内容
router.get('/chapters/:link', bookController.getChapterContent)

// 获取搜索结果
router.get('/search', bookController.getBookSearchResults)

// 获取书籍源
router.get('/book-sources', bookController.getBookSources)

// 获取排名分类
router.get('/rank-category', rankController.getRankCategory)

// 获取排名详情
router.get('/rank/:id', rankController.getRankInfo)

// 获取书籍讨论
router.get('/book/discussions', commentsController.getBookComments)

// 获取书籍短评
router.get('/book/short-reviews', commentsController.getBookShortReviews)

// 获取长书评
router.get('/book/reviews', commentsController.getBookReviews)

// 获取书单列表
router.get('/booklists', BookListController.getLists)

// 获取书单详情
router.get('/booklists/:id', BookListController.getListDetail)

/**
 * 用户部分
 */

// 获取书架
// router.get('/bookshelf', UserController.getBookShelf)

// 添加到书架
// router.post('/bookshelf', UserController.addToShelf)

// 从书架移除
// router.delete('/bookshelf', UserController.deleteFromShelf)

// 获取用户信息
// router.get('/profile', UserController.getUserInfo)
/**
 * 获取系统详情
 */

router.get('/system', SystemController.getSystemInfo)

export default router
