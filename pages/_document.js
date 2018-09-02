import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

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