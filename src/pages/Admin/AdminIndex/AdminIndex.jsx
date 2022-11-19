import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';

export default class AdminIndex extends Component {

  render() {

    if(localStorage.getItem('userLogin') === 'admin'){
        return (
            <div className='container'>
              <p>Admin Page</p>
            </div>
          )
    }
    alert("bạn không đủ quyền truy cập vào trang này");
    return <Redirect to='home'/>
    
  }
}
