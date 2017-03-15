const Emitter = require('events')


class App extends Emitter {
  constructor () {
    super()
  }

  handleError() {
    this.on('error', function (e) {
      console.log(e)
    })
  }

  getName () {
    this.emit('error', 1)
  }
}

const app = new App()

app.on('error', function (e) {
  console.log(e)
})

app.getName()
// nodejs events
