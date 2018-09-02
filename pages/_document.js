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
          <title>追书神器</title>
          {this.props.styleTags}
        </Head>
        <body style={{ background: '#f5f5f5' }}>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}