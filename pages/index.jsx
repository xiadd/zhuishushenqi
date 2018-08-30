import React, { Component } from 'react'
// import { Button, Jumbotron } from 'reactstrap'
import { Button } from 'antd'

class Index extends Component {
  render () {
    return (
      <div className="container" style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Button>hello</Button>
      </div>
    )
  }
}

export default Index