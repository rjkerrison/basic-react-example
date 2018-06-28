import React from 'react'
import Image from './Image.jsx'

class App extends React.Component {
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
        <Image titleOfTheImage={this.state.text} />
        <Image titleOfTheImage="Another rabbit!" />
        <Image titleOfTheImage="A third rabbit!" />
        <Image />
        <Image titleOfTheImage="The final rabbit." />
        <button onClick={this.changeTheTextToBob.bind(this)}>Change the text to Bob</button>
      </div>
    )
  }
}

export default App
