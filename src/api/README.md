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
