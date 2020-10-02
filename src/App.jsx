import React from 'react'
import Image from './Image.jsx'
import { Link, Route } from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/rabbits">Rabbits</Link>
          <Link to="/duck">Ducks</Link>
        </nav>
        <main>
          <Route path="/" exact component={RobinButton} />
          <Route path="/rabbits" component={Rabbits} />
          <Route path="/duck" component={Ducks} />
        </main>
      </div>
    )
  }
}

class RobinButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: 'Hello world!',
    }
  }

  changeTheTextToRobin() {
    this.setState({
      text: 'Hello Robin!',
    })
  }

  render() {
    return (
      <div>
        <p>{this.state.text}</p>
        <button onClick={this.changeTheTextToRobin.bind(this)}>
          Change the text to Robin
        </button>
      </div>
    )
  }
}

class Rabbits extends React.Component {
  render() {
    return (
      <div class="my-grid">
        <Image titleOfTheImage="{this.state.text}" />
        <Image titleOfTheImage="Another rabbit!" />
        <Image titleOfTheImage="A third rabbit!" />
        <Image />
        <Image titleOfTheImage="The final rabbit." />
      </div>
    )
  }
}

const Ducks = () => {
  const duckSrc =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Duckling_-_domestic_duck.jpg/170px-Duckling_-_domestic_duck.jpg'

  const duckImages = [
    { title: '{this.state.text}' },
    { title: 'A duck!' },
    { title: 'Another duck!' },
    { title: null },
  ]
  return (
    <div class="my-flex">
      {duckImages.map((duck, i) => (
        <Image key={i} src={duckSrc} titleOfTheImage={duck.title} />
      ))}
      <Image titleOfTheImage="A sneaky rabbit." />
    </div>
  )
}

export default App
