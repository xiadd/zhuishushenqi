const nunjucks = require('nunjucks')
const { promisify } = require('bluebird')
const parseString = promisify(require('xml2js').parseString)

const tml = [
  '<xml>',
  '<ToUsername><![CDATA[{{ tousername }}]]></ToUsername>',
  '<FromUserName><![CDATA[{{ fromusername }}]]></FromUserName>',
  '<CreateTime>{{ createtime }}</CreateTime>',
  '<MsgType><![CDATA[{{ msgtype }}]]></MsgType>',
  '{% if msgtype === "text" %}',
  '<Content><![CDATA[{{ content }}]]></Content>',
  '{% endif %}',
  '{% if msgtype === "image" %}',
  '<Image><MediaId>![CDATA[{{ mediaid }}]]></MediaId></Image>',
  '{% endif %}',
  '{% if msgtype === "voice" %}',
  '<Voice><MediaId>![CDATA[{{ mediaid }}]]></MediaId></Voice>',
  '{% endif %}',
  '{% if msgtype === "video" %}',
  '<Video>',
  '<MediaId><![CDATA[{{ mediaid }}]]></MediaId>',
  '<Title><![CDATA[{{ title }}]]></Title>',
  '<Description><![CDATA[{{ description }}]]></Description>',
  '</Video>',
  '{% endif %}',
  '{% if msgtype === "music" %}',
  '<Music>',
  '<MusicUrl><![CDATA[musicurl]]></MusicUrl>',
  '<Title><![CDATA[{{ title }}]]></Title>',
  '<HQMusicUrl><![CDATA[hqmusicurl]]></HQMusicUrl>',
  '<ThumbMediaId><![CDATA[mediaid]]></ThumbMediaId>',
  '<Description><![CDATA[{{ description }}]]></Description>',
  '</Music>',
  '{% endif %}',
  '{% if msgtype === "news" %}',
  '<ArticleCount>{{ articles.length }}</ArticleCount>',
  '<Articles>',
  '{% for item in articles %}',
  '<item>',
  '<Title><![CDATA[{{ item.title }}]]></Title>',
  '<Description><![CDATA[{{ item.description }}]]></Description>',
  '<PicUrl><![CDATA[{{ item.picurl }}]]></PicUrl>',
  '<Url><![CDATA[{{ item.url }}]]></Url>',
  '</item>',
  '{% endfor %}',
  '</Articles>',
  '{% endif %}',
  '</xml>'
].join('')


const getMessage = function (xmlMessage) {

}
