import React, { Component } from 'react'

export default class Event extends Component {

    //Phương thức xử lý cho nut click
    handleShowMessage = (message) => {
        alert(message);
    }

  render() {

    let message = 'hello'

    return (

      <div className='container'>
        {/* <button onClick={this.handleShowMessage.bind(this,message)}>Show message</button> */}

        <button onClick={() => {
            this.handleShowMessage(message)
        }}>Show message</button>
      </div>
    )
  }
}
