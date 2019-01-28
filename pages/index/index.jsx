import React, { Component } from 'react'
import axios from 'axios'
import { Collapse, Icon, Button } from 'antd'
import Link from 'next/link'
import { StyledIndex } from './index.styled'

const Panel = Collapse.Panel

class Index extends Component {

  static async getInitialProps () {
    const systemInfo = await axios.get('http://127.0.0.1:8080/system')
    return systemInfo.data
  }

  render() {
    return <StyledIndex>
      <h1>追书神器接口</h1>
      <p>
        追书神器接口二次封装，文档完善，使用方便
      </p>
      
      <div className="heading-link">
        <Button type="primary" style={{ marginRight: 10 }}>
          <Link href="https://xiadd.github.io/zhuishushenqi/" >
            <a className="doc-link">文档</a>
          </Link>
        </Button>
        <Button>
          <a href="https://github.com/xiadd/zhuishushenqi" className="github-link">Github</a>
        </Button>
      </div>

      <Collapse
        bordered={false}
        expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}
      >
        <Panel 
          className="system-info"
          header="系统信息" 
          key="1" 
          style={{
            background: '#f7f7f7',
            borderRadius: 4,
            marginBottom: 24,
            border: 0,
            overflow: 'auto',
          }}
        >
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
        </Panel>
      </Collapse>
    </StyledIndex>
  }
}

export default Index  