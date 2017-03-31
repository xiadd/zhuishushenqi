import Router from 'koa-router'

const router = new Router()

import { getUserInfo, registerNewUser } from '../controller/user'

//用户相关的路由
router.get('/user/:uid', async ctx => getUserInfo(ctx))
router.post('/user/new', async ctx => registerNewUser(ctx))
router.get('/wechat', ctx => ctx.body = 'xiadd')

export default router
