import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet, injectGlobal } from 'styled-components'

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
    min-height: 600px;
    overflow: auto;
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

  render () {
    return (
      <html>
        <Head>
          <link href="https://cdn.bootcss.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" />
          <link href="https://cdn.bootcss.com/antd/3.5.4/antd.min.css" rel="stylesheet" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
          {this.props.styleTags}
        </Head>
        <body style={{ background: '#fff' }}>
          <Main />
          <NextScript />
          <script dangerouslySetInnerHTML={{ __html: bd_analyst }}></script>
        </body>
      </html>
    )
  }
}