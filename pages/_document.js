import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet, injectGlobal } from 'styled-components'

injectGlobal`
  ::-webkit-scrollbar {
    width: 4px !important;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 3px;
    background-color: #eee;
  }

  body {
    overflow: auto;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,"Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", SimSun, sans-serif;
    padding: 0;
    margin: 0;
  }
`

const bd_analyst = `
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?2b64264f13db2b95b2107e92eadddadd";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
`

export default class MyDocument extends Document {

  static getInitialProps ({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }

  render() {
    return (
      <html>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
          {this.props.styleTags}
        </Head>
        <body style={{ background: '#fff' }}>
          <Main />
          <NextScript />
          <script dangerouslySetInnerHTML={{ __html: bd_analyst }} />
        </body>
      </html>
    )
  }
}