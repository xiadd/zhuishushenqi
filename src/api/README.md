## 这里是自己整理的追书神器接口

### 分类

#### 带书籍数量的父分类

url: `http://api.zhuishushenqi.com/ranking/gender`

response:

```js
{
  "male": [
    {
      "name": "玄幻",
      "bookCount": 429247
    },
    {
      "name": "奇幻",
      "bookCount": 41711
    }
  ],
  "female": [
    {
      "name": "古代言情",
      "bookCount": 338664
    },
    {
      "name": "现代言情",
      "bookCount": 395887
    }
    ...
  ]
  "press": []
}
```

#### 带子分类的父分类

url: `http://api.zhuishushenqi.com/cats/lv2`

response:

```js
{
  "male": [
    {
      "major": "玄幻",
      "mins": [
        "东方玄幻",
        "异界大陆",
        "异界争霸",
        "远古神话"
      ]
    },
    {
      "major": "奇幻",
      "mins": [
        "西方奇幻",
        "领主贵族",
        "亡灵异族",
        "魔法校园"
      ]
    }
  ]
  ...
}
```


#### 获取分类书籍(categoryInfo)

request:

```js
query:
{
  gender: 'male' // 性别
  type: 'reputation' // 按照不同的类型获取分类下的书籍(hot, new, reputation, over)
  major: '玄幻' // 父分类
  minor: '东方玄幻' // 子分类
  start: 0 // 起始位置
  limit: 20 //每页数量
}
```

response:

```js
  {
    _id: 书籍id
    title: 书籍名
    author: 作者
    shortIntro: 简介
    cover: 封面
    site: 书源
    latelyFollower: 追书人数
    retentionRatio: 好评率(%)
    lastChater: 最新章节
    tag: 标签
  }
```

### 书籍

#### 书籍详情

url: `http://api.zhuishushenqi.com/book/:id`

request:

```
url params: {
  id: BookId
}
```

response:

```js
{
  "_id": "5106099abb1c67cf28000016", //书籍id
  "author": "禹枫", //作者
  "cover": "/agent/http://images.zhulang.com/book_cover/image/18/98/189843.jpg", // 封面
  "creater": "iPhone 4",
  "longIntro": "...", //长介绍
  "title": "异世灵武天下", //书名
  "cat": "东方玄幻",
  "majorCate": "玄幻", //主分类
  "minorCate": "东方玄幻", //子分类
  "_le": false,
  "allowMonthly": true,
  "allowVoucher": true,
  "allowBeanVoucher": true,
  "hasCp": true,
  "postCount": 3183,
  "latelyFollower": 43192, //追书人数
  "followerCount": 5164,
  "wordCount": 11241234, //总字数
  "serializeWordCount": 129762, //平均
  "retentionRatio": "66.16", //好评率
  "updated": "2017-01-19T05:58:53.799Z", //更新于
  "isSerial": false, //连载中
  "chaptersCount": 3577, //总章数
  "lastChapter": "后续第五章:大结局终章", //最新章节
  "gender": [
    "male"
  ],
  "tags": [],
  "donate": false
}
```

#### 书籍章节

这部分相对比较复杂

步骤如下:

书籍id -> 获取所有书源 -> 书源id -> 获取章节目录 -> 章节link -> 章节内容

url : `http://api.zhuishushenqi.com/btoc`

request:

```
url params: {
  id: BookId
}

query string: {
  view: chapters
}
```


response:

```js
{
  "_id": "5881e82e3e3357fa266f6a3e",
  "name": "优质书源",
  "link": "http://vip.zhuishushenqi.com/toc/5881e82e3e3357fa266f6a3e",
  "book": "5779b38d3b433dd647d95da2",
  "chapters": [
    {
      "title": "第一章 状元再世", // 章节名
      "link": "http://vip.zhuishushenqi.com/chapter/5881e82e4e307ea47f89deeb?cv=1484908590347", //章节地址
      "id": "5881e82e4e307ea47f89deeb", //章节id
      "currency": 10, //价格
      "unreadble": false,
      "isVip": false // 是否是vip章节
    }
  ],
  "updated": "2017-03-31T14:44:51.413Z", //更新于
  "host": "vip.zhuishushenqi.com" // 书源
}
```

#### 章节内容

url: `http://chapter2.zhuishushenqi.com/chapter/:chapterLink`

request:
```
url params: {
  chapterLink: 'http://vip.zhuishushenqi.com/chapter/5881e82e4e307ea47f89df43' // 章节地址
}
```

response:

```js
{
  "ok": true,
  "chapter": {
    "title": "第八十九章 杂阿神功（二）", // 章节名
    "body": "\n\r\n\r\n\r请安装最新版追书 以便使用优质资源",
    "isVip": true,
    "cpContent": "..", //章节内容
    "currency": 10,
    "id": "5881e82e4e307ea47f89df43"
  }
}
```

#### 作者的书籍

url: `http://api.zhuishushenqi.com/book/accurate-search?author=忘语`

request:

```
url params: {
  author: 作者名
}
```

response:

```js
{
  "books": [
    {
      "_id": "567d2cb9ee0e56bc713cb2c0",
      "title": "玄界之门",
      "author": "忘语",
      "shortIntro": "...",
      "cover": "/cover/148369972991098",
      "cat": "仙侠",
      "site": "zhuishuvip",
      "majorCate": "仙侠",
      "minorCate": "幻想修仙",
      "banned": 0,
      "latelyFollower": 35504,
      "followerCount": 0,
      "retentionRatio": 65.18,
      "lastChapter": "第919章 前线告急"
    },
    ...
  ],
  "ok": true
}
```

### 排名

#### 排名分类

url: `http://api.zhuishushenqi.com/ranking/gender`

response:

```js
{
  "female": [
    {
      "_id": "54d43437d47d13ff21cad58b", //周榜
      "title": "追书最热榜 Top100",
      "cover": "/ranking-cover/142319314350435",
      "collapse": false,
      "monthRank": "564d853484665f97662d0810", //月榜
      "totalRank": "564d85b6dd2bd1ec660ea8e2" // 总榜
    }
  }
```

#### 排名详情

url: `http://api.zhuishushenqi.com/ranking/:id`

request:

```
url params: {
  id: 排名id //周榜等
}
```

response:

```js
{
  "ranking": {
    "_id": "54d42d92321052167dfb75e3",
    "updated": "2017-03-31T21:20:09.135Z",
    "title": "追书最热榜 Top100",
    "tag": "zhuishuLatelyFollowerMale",
    "cover": "/ranking-cover/142319144267827",
    "icon": "/cover/148945782817557",
    "__v": 790,
    "monthRank": "564d820bc319238a644fb408",
    "totalRank": "564d8494fe996c25652644d2",
    "created": "2017-04-01T03:20:20.988Z",
    "isSub": false,
    "collapse": false,
    "new": true,
    "gender": "male",
    "priority": 250,
    "books": [
      {
        "_id": "51d11e782de6405c45000068",
        "author": "天蚕土豆",
        "cover": "/agent/http://image.cmfu.com/books/2750457/2750457.jpg",
        "shortIntro": "大千世界，位面交汇，万族林立，群雄荟萃，一位位来自下位面的天之至尊，在这无尽世界，演绎着令人向往的传奇，追求着那主宰之路。 无尽火域，炎帝执掌，万火焚苍穹。 武...",
        "title": "大主宰",
        "site": "zhuishuvip",
        "cat": "玄幻",
        "banned": 0,
        "latelyFollower": 359456,
        "retentionRatio": "45.31"
      }
    ]
    ...
    ok: true
  }
```

### 书评

#### 讨论

url: `http://api.zhuishushenqi.com/post/by-book?&start=21&limit=20`

request:
```
query strings: {
  book: {bookId},
  sort: (updated|created|comment-count) // 排序方式
  type: (normal,vote) // 未知
  start,
  limit
}
```

response:

```
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

#### 短评

url: `http://api.zhuishushenqi.com/post/short-review/by-book`

request: 
```
query strings: {
  book: {bookId},
  sortType: (lastUpdated|newest|mostlike) //排序方式
  start,
  limit
}
```

response: 
```
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

### 书评

url: `http://api.zhuishushenqi.com/post/review/by-book?book=51060c88bb1c67cf28000035&sort=updated&start=0&limit=20`

request:
```
query strings: {
  book: {bookId},
  sort: (updated|created|comment-count),
  start,
  limit
}
```

response:
```
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

url: `http://api.zhuishushenqi.com/book-list`

request: 

```
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
```
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

url: `http://api.zhuishushenqi.com/book-list/:bookId`

request: 

```
url params: {
  bookId: {bookId}
}
```

response: 
```
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