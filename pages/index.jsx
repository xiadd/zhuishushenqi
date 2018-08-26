import React, { Component } from 'react'
import { Button, Jumbotron } from 'reactstrap'

class Index extends Component {
  render () {
    return (
      <div className="container" style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Jumbotron style={{ textAlign: 'center', width: '100%' }}>
          <h1 className="display-4">追书神器接口</h1>
          <p className="lead">
            简单的追书神器接口整理还在不断更新中, 有问题可以联系本人
          </p>
          <hr className="my-4" />
          <p>
            如有侵权问题请联系本人删除!
          </p>
          <p className="lead" >
            <a className="btn btn-primary btn-lg" style={{ marginRight: '10px' }} href="https://xiadd.github.io/zhuishushenqi/#/" role="button">查看文档</a>
            <a className="btn btn-danger btn-lg" href="https://github.com/xiadd/zhuishushenqi" role="button">查看源码</a>
          </p>
        </Jumbotron>
      </div>
    )
  }
}

export default Index