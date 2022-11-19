import React, { Component } from 'react'

export default class DemoDT extends Component {

    renderImage = () => {
        return <img src='https://picsum.photos/200'></img>
    }

    renderText = () => {
        return <p>Hello word</p>
    }

    renderMuticomponent = () => {
        const virus = {
            id: 1,
            name: 'covid19',
            alias: 'covid19',
            desc: 'chinese covid'
        }
        return <div className='container'>
            <p>{virus.id}</p>
            <p>{virus.name}</p>
            <p>{virus.alias}</p>
            <p>{virus.desc}</p>
        </div>
    }
  render() {
    return (
      <div className='container'>
        {this.renderImage()}
        {this.renderText()}
        {this.renderMuticomponent()}
      </div>
    )
  }
}
