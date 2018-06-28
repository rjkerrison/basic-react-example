import React from 'react'

class Image extends React.Component {
  render() {
    return (
      <img src="https://static.wamiz.fr/images/animaux/rongeurs/medium/lapin.jpg" title={this.props.titleOfTheImage} />
    )
  }
}

export default Image
