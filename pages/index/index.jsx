import React, { Component } from 'react'
import axios from 'axios'
import { Collapse, Icon, Button } from 'antd'
import Link from 'next/link'
import { StyledIndex } from './index.styled'

const Panel = Collapse.Panel

class Index extends Component {

  static async getInitialProps () {
    const systemInfo = await axios.get('/system')
    return systemInfo.data
  }

  render() {
    return <StyledIndex>
      <h1>追书神器接口</h1>
      <p>
        追书神器接口二次封装，文档完善，使用方便
      </p>
      <p>
        查看文档：<a href="https://xiadd.github.io/zhuishushenqi/" target="_blank" rel="noopener noreferrer">文档</a>
      </p>
      <p>
      Repo: <a href="https://github.com/xiadd/zhuishushenq" target="_blank" rel="noopener noreferrer">GITHUB</a>
      </p>
      <p>
        Made by <a href="https://github.com/xiadd" target="_blank" rel="noopener noreferrer">xiadd</a>
      </p>

      <Collapse
        bordered={false}
        expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}
      >
        <Panel 
          className="system-info"
          header="系统信息" 
          key="1" 
          style={{
            background: '#fff',
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