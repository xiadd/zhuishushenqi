import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet, injectGlobal } from 'styled-components'
import { extractStyles } from 'evergreen-ui'

injectGlobal`
  ::-webkit-scrollbar {
    width: 6px !important;
    height: 6px !important;
    -webkit-appearance: none;
  }
  ::-webkit-scrollbar-thumb {
      height: 6px;
      border-radius: 6px;
      background-color: #BAC1C6;
  }
  ::-webkit-scrollbar-track {
      border-radius: 0px;
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
    const { css, hydrationScript } = extractStyles()
    return { ...page, styleTags, css, hydrationScript }
  }

  render() {
    const { css, hydrationScript } = this.props
    return (
      <html>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
          {this.props.styleTags}
          <style dangerouslySetInnerHTML={{ __html: css }} />
        </Head>
        <body style={{ background: '#fff' }}>
          <Main />
          {hydrationScript}
          <NextScript />
          <script dangerouslySetInnerHTML={{ __html: bd_analyst }} />
        </body>
      </html>
    )
  }
}