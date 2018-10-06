import React, { Component } from 'react'
import { Icon, Collapse, Row, Col } from 'antd'
import Head from 'next/head'
import styled from 'styled-components'
import axios from 'axios'

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  width: 100vw;
  align-items: center;
  justify-content: center;
  font-family: 'PingFang SC', 'Microsoft YaHei', 'Lantinghei SC', 'Source Han Sans SC', 'Noto Sans CJK SC', 'WenQuanYi Micro Hei', 'sans-serif', 'SimSun';
  background: #fff;
  flex-direction: column;
  h1, h5, p {
    font-weight: 300;
    color: #444;
    width: 500px;
    text-align: center
  }

  .ant-collapse {
    border: none;
    width: 400px;
    background: #f5f5f5
  }

  .ant-collapse-content-box {
    background: #f5f5f5;
    text-align: left;
    max-height: 300px;
    overflow-y: auto;
    overflow-x: hidden;
  }

  .ant-collapse-content-box p {
    text-align: left
  }
  .ant-collapse-item {
    border: none
  }
  .debug-name {
    text-align: left;
    font-size: .8rem
  }

  .debug-value {
    text-align: left;
    font-size: .8rem
  }
  .ant-row {
    margin-bottom: 1rem;
  }
`

const Panel = Collapse.Panel

class Index extends Component {

  static async getInitialProps () {
    const systemInfo = await axios.get('http://127.0.0.1:8080/system')
    return systemInfo.data
  }

  render () {
    return (
      <Wrapper className="container">
        <Head>
          <title>追书神器</title>
        </Head>
        <h1><Icon type="book" style={{ color: '#d32122' }} /> 追书神器</h1>
        <h5>基于koa+react.js+next.js的追书神器接口</h5>
        <p>书籍全面, 可换源, 实时更新, 更重要的是可以一起学习nodejs+react.</p>
        <p>文档请查看: <a href="https://xiadd.github.io/zhuishushenqi">https://xiadd.github.io/zhuishushenqi</a></p>
        <p>-- Made with ❤️ by <a href="http://github.com/xiadd">xiadd</a></p>

        <Collapse>
          <Panel header="调试信息" key="1">
            <Row gutter={16}>
              <Col span={8} className="debug-name">git hash</Col>
              <Col span={16} className="debut-value">{this.props.gitHash.slice(0, 7)}</Col>
            </Row>
            <Row gutter={16}>
              <Col span={8} className="debug-name">内存占用</Col>
              <Col span={16} className="debut-value">{this.props.memory} m</Col>
            </Row>
            <Row gutter={16}>
              <Col span={8} className="debug-name">运行时间</Col>
              <Col span={16} className="debut-value">{this.props.runTime} s</Col>
            </Row>
          </Panel>
        </Collapse>

      </Wrapper>
    )
  }
}

export default Index