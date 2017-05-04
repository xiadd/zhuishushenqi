# 在线地址:

`http://novel.juhe.im`

注意: **如果运行在自己的服务器的话 请务必使用node 7.6 以上**


## api接口

#### 获取带书籍数量的父分类

url: `http://novel.juhe.im/categories`

#### 获取带子分类的分类

url: `http://novel.juhe.im/sub-categories`

#### 获取分类详情

url: `http://novel.juhe.im/category-info?gender=male&type=hot&major=奇幻&minor=&start=0&limit=20`

query:

```
{
  gender, type, major(主分类), minor(子分类), start, limit
}
```

#### 获取书籍详情

url: `http://novel.juhe.im/book-info/53115e30173bfacb4904897e`

params:

```
{
  id: book id
}
```

#### 获取作者名下的书籍

url: `http://novel.juhe.im/author-books?author=忘语`

query:

```
{
  author: 作者名
}
```

#### 获取书籍源

url: `http://novel.juhe.im/book-sources?view=summary&book=567d2cb9ee0e56bc713cb2c0`

query:

```
{
  view: summary,
  book: {bookid}
}
```

#### 获取书籍章节

url: `http://novel.juhe.im/book-chapters/56f8da09176d03ac1983f6cd`

params:

```
{
  id: {书籍源id}
}
```

#### 获取章节详细内容

url: `http://novel.juhe.im/chapters/http%3A%2F%2Fvip.zhuishushenqi.com%2Fchapter%2F56f8da09176d03ac1983f6d7%3Fcv%3D1486473051386`  // 注意这里需要进行url编码

params:

```
{
  link: {目录中的章节link}
}
```

#### 获取搜索结果

url: `http://novel.juhe.im/search?keyword=遮天`

query:

```
{
  keyword: {书籍关键字}
}
```

#### 获取排名分类

url: `http://novel.juhe.im/rank-category`

#### 获取排名详情

url: `http://novel.juhe.im/rank/54d42d92321052167dfb75e3`

params:

```
{
  id: {排名分类的id}
}
```

演示

![demo](https://ooo.0o0.ooo/2017/04/23/58fc43dd29072.gif)


已完成功能

书架 换源 阅读 切换章节 demo上有的未展示 换源这个功能只能说可以实现吧

欢迎加入群讨论:

![群](https://camo.githubusercontent.com/a63f5178a3128dd2bdff9e7f358e66217de27dd2/68747470733a2f2f6f6f6f2e306f302e6f6f6f2f323031372f30312f31382f353837663331346538616335612e706e67)
