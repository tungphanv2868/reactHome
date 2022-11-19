import React, { Component } from 'react'

export default class handlEvent extends Component {

    login = false;
    userName = 'Nguyen Van A';

    renderFormLogin = () => {
        if(this.login){
            return <div>
                Hello {this.userName}
            </div>
        }
        return <button onClick={this.handleLogin}>Dang nhap</button>
    }

    handleLogin = () => {
        console.log(123);
    }

  render() {
    return (
      <div className='container'>
        {this.renderFormLogin()}
      </div>
    )
  }
}
