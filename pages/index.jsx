import React, { Component } from 'react'
// import { Button, Jumbotron } from 'reactstrap'
import { Icon, Collapse } from 'antd'
import styled from 'styled-components'

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  width: 100vw;
  align-items: center;
  justify-content: center;
  font-family: 'PingFang SC', 'Microsoft YaHei', 'Lantinghei SC', 'Source Han Sans SC', 'Noto Sans CJK SC', 'WenQuanYi Micro Hei', 'sans-serif', 'SimSun';
  background: #f5f5f5;
  flex-direction: column;
  h1, h5 {
    font-weight: 300;
    color: #444;
  }

  .ant-collapse {
    border: none;
    width: 500px;
    background: #f5f5f5
  }

  .ant-collapse-content-box {
    background: #f5f5f5
  }

  .ant-collapse-content-box p {
    margin-bottom: 0
  }
  .ant-collapse-item {
    border: none
  }
`

const Panel = Collapse.Panel

class Index extends Component {
  render () {
    return (
      <Wrapper className="container">
        <h1><Icon type="book" style={{ color: '#d32122' }} /> 追书神器</h1>
        <h5>基于koa+react.js+next.js的追书神器接口</h5>
        <p>书籍全面, 可换源, 实时更新, 更重要的是可以一起学习nodejs+react, 文档请查看: <a href="https://novel.juhe.im">https://novel.juhe.im</a></p>
        <p>-- Made with ❤️ by <a href="http://github.com/xiadd">xiadd</a></p>

        <Collapse>
          <Panel header="调试信息" key="1">
            <p>调试信息</p>
          </Panel>
        </Collapse>

      </Wrapper>
    )
  }
}

export default Index