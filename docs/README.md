## 追书神器接口

这里整理的追书神器接口， 不保证实时更新，如有侵权请联系删除。

欢迎加入群讨论:

![群](https://camo.githubusercontent.com/a63f5178a3128dd2bdff9e7f358e66217de27dd2/68747470733a2f2f6f6f6f2e306f302e6f6f6f2f323031372f30312f31382f353837663331346538616335612e706e67)

## 帮助与支持

服务器还是挺贵的, 尤其香港的, 希望大家支持一下吧, 帮助小站持续运营, 请点击下面搬瓦工链接注册一下, 我也收获点aff支撑服务器运营:

[搬瓦工](https://bandwagonhost.com/aff.php?aff=30537)


`http://novel.juhe.im`

注意: **如果运行在自己的服务器的话 请务必使用node 7.6

以上**(因为很多模块直接用到了async,所以就算加上babel也没用, 打包过后仍然是直接引用)

已经允许跨域 前端一般无需进行任何配置

由于有速率限制, 所以请保证redis在运行中(默认端口)

这里使用的是pm2的自动部署, 具体链接可查看[自动部署](http://pm2.keymetrics.io/docs/usage/deployment/)

另外这里移除了用户部分, 如果需要把注释删除即可,但是请注意mongodb是否运行中

关于静态资源不再提供补全 前端中自行补全 静态资源地址为: `http://statics.zhuishushenqi.com`

## 开发与部署

`npm run dev`: 启动开发服务器

~~`npm run build`: 通过babel打包~~ 已经移除babel

部署按照正常node 部署即可·`npm start`


## api接口

### 获取带书籍数量的父分类

url: `http://novel.juhe.im/categories`

### 获取带子分类的分类

url: `http://novel.juhe.im/sub-categories`

### 获取分类详情

url: `http://novel.juhe.im/category-info?gender=male&type=hot&major=奇幻&minor=&start=0&limit=20`

query:

```js
{
  gender, type, major(主分类), minor(子分类), start, limit
}
```

### 获取书籍详情

url: `http://novel.juhe.im/book-info/53115e30173bfacb4904897e`

params:

```js
{
  id: book id
}
```

### 获取书籍相关推荐

url: `http://novel.juhe.im/recommend/53115e30173bfacb4904897e`

query:

```js
{
  id: 书籍id
}
```

### 获取作者名下的书籍

url: `http://novel.juhe.im/author-books?author=忘语`

query:

```js
{
  author: 作者名
}
```

### 获取书籍源

url: `http://novel.juhe.im/book-sources?view=summary&book=567d2cb9ee0e56bc713cb2c0`

query:

```js
{
  view: summary,
  book: {bookid}
}
```

### 获取书籍章节

url: `http://novel.juhe.im/book-chapters/56f8da09176d03ac1983f6cd`

params:

```js
{
  id: {书籍源id}
}
```

### 获取章节详细内容

url: `http://novel.juhe.im/chapters/http%3A%2F%2Fvip.zhuishushenqi.com%2Fchapter%2F56f8da09176d03ac1983f6d7%3Fcv%3D1486473051386`  **注意这里需要进行url编码**

params:

```js
{
  link: {目录中的章节link}
}
```

### 获取搜索结果

url: `http://novel.juhe.im/search?keyword=遮天`

query:

```js
{
  keyword: {书籍关键字}
}
```

### 获取排名分类

url: `http://novel.juhe.im/rank-category`

### 获取排名详情

url: `http://novel.juhe.im/rank/54d42d92321052167dfb75e3`

params:

```json
{
  id: {排名分类的id}
}
```

### 书评-讨论

url: `http://api.zhuishushenqi.com/post/by-book?&start=21&limit=20`

request:
```json
query strings: {
  book: {bookId},
  sort: (updated|created|comment-count) // 排序方式
  type: (normal,vote) // 未知
  start,
  limit
}
```

response:

```json
{
	"posts": [{
		"_id": "59b25a1ca17d25ad324e208d",
		"author": {
			"_id": "54ef4d94704d6be45528af89",
			"avatar": "/avatar/34/bb/34bbc2992b34e6a042a83be1f6f3b735", //http://statics.zhuishushenqi.com
			"nickname": "追书家的小萝莉",
			"activityAvatar": "/activities/20170120/1.jpg",
			"type": "official",
			"lv": 9,
			"gender": "female"
		},
		"type": "vote",
		"likeCount": 371,
		"block": "ramble",
		"haveImage": true,
		"state": "normal",
		"updated": "2017-09-16T05:38:16.092Z",
		"created": "2017-09-08T08:51:40.345Z",
		"commentCount": 5309,
		"voteCount": 3980,
		"title": "【真够刺激】答题拿红包！邀请好友满30元就能提现！★攻略真的不先看下么！"
	}],
	"ok": true
}
```

### 书评-短评

url: `http://api.zhuishushenqi.com/post/short-review/by-book`

request: 

```json
query strings: {
  book: {bookId},
  sortType: (lastUpdated|newest|mostlike) //排序方式
  start,
  limit
}
```

response: 

```json
{
  "docs": [
    {
      "_id": "596affc7fe0ad34f1b8317e3",
      "rating": 3,
      "type": "short_review",
      "author": {
        "_id": "596ac9b85d0fe1b460155952",
        "avatar": "/avatar/bd/bf/bdbf666388552ebb3166473e3f689dfd",
        "nickname": "素心",
        "activityAvatar": "",
        "type": "normal",
        "lv": 4,
        "gender": "female"
      },
      "book": {
        "_id": "51060c88bb1c67cf28000035",
        "cover": "/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F23766%2F_23766_549079.jpg%2F",
        "title": "真灵九变"
      },
      "likeCount": 2,
      "priority": 0.497,
      "block": "short_review",
      "state": "normal",
      "updated": "2017-08-06T09:58:26.733Z",
      "created": "2017-07-16T05:55:19.277Z",
      "content": "就是结尾有点烂尾了"
    }
  ],
  "ok": true
}
```

### 书评--长评

url: `http://api.zhuishushenqi.com/post/review/by-book?book=51060c88bb1c67cf28000035&sort=updated&start=0&limit=20`

request:

```json
query strings: {
  book: {bookId},
  sort: (updated|created|comment-count),
  start,
  limit
}
```

response:

```json
{
	"total": 35,
	"reviews": [{
		"_id": "584201194fe8537c0f7fdf32",
		"rating": 1,
		"author": {
			"_id": "580cc42178afb3190f41f5ae",
			"avatar": "/avatar/b3/70/b370b0054ae878829bfae3fe8ceacf3e",
			"nickname": "……",
			"activityAvatar": "/activities/20170120/4.jpg",
			"type": "normal",
			"lv": 8,
			"gender": "male"
		},
		"helpful": {
			"total": 35,
			"yes": 117,
			"no": 82
		},
		"likeCount": 5,
		"state": "normal",
		"updated": "2017-09-13T15:08:48.577Z",
		"created": "2016-12-02T23:17:45.711Z",
		"commentCount": 76,
		"content": "1）一边声明“猪脚资质一般”，一边又在没有“穿越神器”的情况下给猪脚开挂。修炼速度莫名其妙就比其他人快，这也是“资质一般”？能自圆其说不？\n\n2）明明是凡人流里那种勾心斗角杀人夺宝的世界，猪脚的朋友未免太多了吧？还各个都为猪脚着想，围着猪脚转？凡人流啊！那是神马鸡毛世界，那是人人都可能在你身后打闷棍的世界。想玩哥们弟兄义气江湖的，请出门左手见《飘渺之旅》下车。\n\n3）“俏皮、傲娇”的女主！我拉个擦，这个基本是所有YY书的鹤顶红了，本以为绝迹几千年，没想到还能见！\n\n4）师姐，不是1个，是10个！我进错门了吗？这是许仙传吗？真是许仙传就好了！这分明是睡裤外穿、浓妆艳抹的乡下小保姆嘛！\n\n5）美少妇师傅！你到底想写啥？玩后宫，人妻的请出门右转进晋江。\n\n6）N个陷害猪脚，差点让猪脚死球的同门，猪脚被坑了一次又一次，从来不报复，从来不想解决，于是被人从头坑到尾。请问，你是白求恩还是科利华？还是传说中的圣雄甘地？\n\n7）猪脚开挂升级也就罢了，猪脚的朋友们也是哥哥开挂。一开始书中声称“升溶血修士如何如何难，升锻蛋修士更是千中无一”，好，猪脚开挂，奇遇不断，十几年升到锻蛋！贫道以为这已经是牛逼透顶的了，结果再看，猪脚的朋友们也一个个都锻蛋了！这尼玛也是“如何如何难”？“千中无一”？？拜托你学凡人流，看过凡人没有？？？更恶心的是，就连猪脚随便找得几个土匪小弟，也一个个吃猪尿泡一样升锻蛋了。我。。。。叉。。。。",
		"title": "个人观点，看书前最好看看！"
	}],
	"ok": true
}
```

### 书单

url: `https://novel.juhe.im/booklists`

request: 

```json
query string: {
  sort: (collectorCount|created),
  duration: (last-seven-days|all),
  gender: (male|female),
  tag: (有点多),
  start
}

说明:

本周最热的query是: sort=collectorCount&duration=last-seven-days&start=0
最新发布是: sort=created&duration=all
最多收藏是: sort=collectorCount&duration=all
```

response: 

```json
{
  "total": 241518,
  "bookLists": [
    {
      "_id": "57331505025ffaa06cb28852",
      "title": "★星光书局 ★(04－20更",
      "author": "人闲",
      "desc": "☆准星（不好看），★一星，★★二星，★★★三星，★★★★，★★★★★五星 （持续更新中……）……………本期歌单:周慧敏《自作多情》、赵雷《已是两条路上的人》、张韶涵《寓言》、张惠妹《我最亲爱的》、张惠妹《哭砂》、张惠妹《剪爱》、张碧晨《渡红尘》、Amy Winehouse《You know I'm no good》、邓紫棋《偶尔》、邓紫棋《喜欢你》、叶倩文《曾经心疼》、叶倩文《祝福》",
      "gender": "male",
      "collectorCount": 96298,
      "cover": "/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F41678%2F_41678_412098.jpg%2F",
      "bookCount": 464
    }
  ],
  "ok": true
}

```

### 书单详情

url: `https://novel.juhe.im/booklists/:bookId`

request: 

```json
url params: {
  bookId: {bookId}
}
```

response: 

```json
{
    "bookList": {
        "_id": "57331505025ffaa06cb28852",
        "updated": "2017-05-25T03:18:20.437Z",
        "title": "★星光书局 ★(04－20更",
        "author": {
            "_id": "568dcb55f08722bf2bdeeb38",
            "avatar": "/avatar/41/32/41327b6d253592bb644fa4dd4c5c9b03",
            "nickname": "人闲",
            "type": "normal",
            "lv": 9
        },
        "desc": "☆准星（不好看），★一星，★★二星，★★★三星，★★★★，★★★★★五星 （持续更新中……）……………本期歌单:周慧敏《自作多情》、赵雷《已是两条路上的人》、张韶涵《寓言》、张惠妹《我最亲爱的》、张惠妹《哭砂》、张惠妹《剪爱》、张碧晨《渡红尘》、Amy Winehouse《You know I'm no good》、邓紫棋《偶尔》、邓紫棋《喜欢你》、叶倩文《曾经心疼》、叶倩文《祝福》",
        "gender": "male",
        "created": "2016-05-11T11:18:29.278Z",
        "tags": [
            "热血",
            "都市",
            "现代"
        ],
        "stickStopTime": null,
        "isDraft": false,
        "isDistillate": false,
        "collectorCount": 96299,
        "books": [
            {
                "book": {
                    "cat": "东方玄幻",
                    "_id": "579eaef492253c435235dbea",
                    "title": "斗战狂潮",
                    "author": "骷髅精灵",
                    "longIntro": "双月当空，无限可能的英魂世界孤寂黑暗，神秘古怪的嬉命小丑百城联邦，三大帝国，异族横行，魂兽霸幽这是一个英雄辈出的年代，人类卧薪尝胆重掌地球主权，孕育着进军高纬度的野望！重点是……二年级的废柴学长王同学，如何使用嬉命轮盘，撬动整个世界，学妹们，请注意，学长来了！！！斗战一群：21222419（两千人战力群）骷髅的微信公共号：kuloujingling00新浪微博：骷髅精灵",
                    "cover": "/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F1286280%2F_1286280_696459.jpg%2F",
                    "site": "zhuishuvip",
                    "majorCate": "玄幻",
                    "minorCate": "东方玄幻",
                    "banned": 0,
                    "latelyFollower": 26038,
                    "wordCount": 1962241,
                    "retentionRatio": 60.36
                },
                "comment": "★★二星…………"
            }
        ],
        "shareLink": "http://share.zhuishushenqi.com/booklist/57331505025ffaa06cb28852",
        "id": "57331505025ffaa06cb28852",
        "total": 464
    },
    "ok": true
}
```


