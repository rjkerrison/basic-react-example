import React from 'react'

class Image extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      src:
        props.src ||
        'https://static.wamiz.fr/images/animaux/rongeurs/medium/lapin.jpg',
    }
  }

  render() {
    return (
      <picture>
        <img src={this.state.src} title={this.props.titleOfTheImage} />
      </picture>
    )
  }
}

export default Image
