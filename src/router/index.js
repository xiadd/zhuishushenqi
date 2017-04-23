import Router from 'koa-router'
import jwt from 'koa-jwt'
import { JWTSecret } from '../../config/config.default'
import UserController from '../controller/user'
import categoryController from '../controller/category'
import bookController from '../controller/book'
import rankController from '../controller/rank'

const router = new Router()

//设置前缀
router.prefix('/api')
/**
 * 分类相关路由
 */

// 登录
router.get('/authenticate', UserController.userLogin)
//router.get('/authenticate', UserController.userLogin)

//设置jwt 权限
router.use(jwt({ secret: JWTSecret }))

// 获取带书籍数量的父分类
router.get('/categories', categoryController.getCategoriesWithBookCount)

// 获取带子分类的分类
router.get('/sub-categories', categoryController.getCategoriesWithSubCategories)

// 获取分类详情
router.get('/category-info', categoryController.getCategoryInfo)

// 获取书籍详情 id: bookid
router.get('/book-info/:id', bookController.getBookInfo)

// 获取作者名下的书籍
router.get('/author-books', bookController.getAuthorBooks)

// 获取书籍章节 id: bookid
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

// 用户部分

// 获取书架
router.get('/bookshelf', UserController.getBookShelf)

// 添加到书架
router.post('/bookshelf', UserController.addToShelf)

// 从书架移除
router.delete('/bookshelf', UserController.deleteFromShelf)

// 获取用户信息
router.get('/profile', UserController.getUserInfo)

export default router
