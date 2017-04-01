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

url: `http://api02u58f.zhuishushenqi.com/book/accurate-search?author=忘语`

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
