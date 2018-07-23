import React from 'react'
import Image from './Image.jsx'
import { Link, Route } from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Link to='/'>Home</Link>
          <Link to='/rabbits'>Rabbits</Link>
          <Link to='/duck'>Ducks</Link>
        </div>
        <div>
          <Route path='/' exact component={BobButton} />
          <Route path='/rabbits' component={Rabbits} />
          <Route path='/duck' component={Rabbits} />
        </div>
      </div>
    )
  }
}

class BobButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: 'Hello world!'
    }
  }

  changeTheTextToBob() {
    this.setState({
      text: 'Bob'
    })
  }

  render() {
    return (
      <div>
        <p>{this.state.text}</p>
        <button onClick={this.changeTheTextToBob.bind(this)}>Change the text to Bob</button>
      </div>
    )
  }
}

class Rabbits extends React.Component {
  render() {
    return (
      <div>
        <Image titleOfTheImage='{this.state.text}' />
        <Image titleOfTheImage="Another rabbit!" />
        <Image titleOfTheImage="A third rabbit!" />
        <Image />
        <Image titleOfTheImage="The final rabbit." />
      </div>
    )
  }
}

export default App
