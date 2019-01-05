import React, { Component } from 'react'
import axios from 'axios'
import { Button, Heading, Icon } from 'evergreen-ui'
import Link from 'next/link'
import { StyledIndex } from './index.styled'

class Index extends Component {

  static async getInitialProps () {
    const systemInfo = await axios.get('http://127.0.0.1:8080/system')
    return systemInfo.data
  }

  render() {
    return <StyledIndex>
      <Heading size={800} marginTop="default">
        追书神器接口
      </Heading>

      <p>
        追书神器接口二次封装，文档完善，使用方便
      </p>
      
      <div className="heading-link">
        <Button appearance="primary" height={40}>
          <Link href="https://xiadd.github.io/zhuishushenqi/" >
            <a className="doc-link">文档</a>
          </Link>
        </Button>
        <Button height={40} marginLeft={10}>
          <a href="https://github.com/xiadd/zhuishushenqi" className="github-link">GITHUB</a>
        </Button>
      </div>

      <details className="system-info">
        <summary>系统详情</summary>
        <div className="debug-item">
          <span className="debug-key">git hash: </span>
          <span className="debug-value">{this.props.gitHash.slice(0, 7)}</span>
        </div>

        <div className="debug-item">
          <span className="debug-key">内存占用: </span>
          <span className="debug-value">{this.props.memory} m</span>
        </div>

        <div className="debug-item">
          <span className="debug-key">运行时间: </span>
          <span className="debug-value">{this.props.runTime} s</span>
        </div>

        <div className="debug-item">
          <span className="debug-key">请求数: </span>
          <span className="debug-value">{this.props.requestCount}</span>
        </div>

        <div className="debug-item">
          <span className="debug-key">热门路由: </span>
          <span className="debug-value" dangerouslySetInnerHTML={{ __html: this.props.hotRoutesValue }} />
        </div>

      </details>
    </StyledIndex>
  }
}

export default Index