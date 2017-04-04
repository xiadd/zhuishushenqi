export default {
  category: {
    // 带书籍数量的父分类
    categoryWithBookCount: 'http://api.zhuishushenqi.com/cats/lv2/statistics',
    // 带子分类的父分类
    categoryWithSubCategories: 'http://api.zhuishushenqi.com/cats/lv2',
    // 分类详情: 带着书籍
    categoryInfo: 'http://api.zhuishushenqi.com/book/by-categories'
  },
  book: {
    // 书籍详情
    bookInfo: 'http://api.zhuishushenqi.com/book', // id 书籍id
    // 作者名下的书籍
    authorBooks: 'http://api02u58f.zhuishushenqi.com/book/accurate-search', // query ?author=忘语
    // 书籍章节内容
    bookChapters: 'http://api.zhuishushenqi.com/atoc',
    // 书源
    bookSources: 'http://api.zhuishushenqi.com/atoc', // query ?view=summary&book=5779b38d3b433dd647d95da2
    // 章节内容:id 单章id
    chapterContent: 'http://chapter2.zhuishushenqi.com/chapter', //id: chapter id
    // 书籍搜索 可以搜索作者但是不精确
    bookSearch: 'http://api.zhuishushenqi.com/book/fuzzy-search' //query ?query=凡人修仙传
  },
  rank: {
    // 排名分类
    rankCategory: 'http://api.zhuishushenqi.com/ranking/gender',
    // 排名详情
    rankInfo: 'http://api.zhuishushenqi.com/ranking' // id: rank id
  }
}
