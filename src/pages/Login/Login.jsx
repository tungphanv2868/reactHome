import React, { Component } from 'react'
import { connect } from 'react-redux'
import { dangNhapAction } from '../../redux/actions/quanLyNguoiDungAction'

class Login extends Component {

  state = {
    username:'',
    password:'',
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  handleSubmit = (e) => {
    //sự kiện cản relaod browser
    e.preventDefault();
    // let {username, password} = this.state;
    // if(username === 'cybersoft' && password === 'cybersoft'){
    //   localStorage.setItem('userLogin', 'user');

    //   //chuyển hướng về home
    //   this.props.history.push("/home")
    //   console.log('login', this.props);

    //   // thay đổi trang hiện tại về hướng chỉ định
    //   // this.props.history.replace('/contact');

    // }else if (username === 'admin' && password === 'admin'){
    //   localStorage.setItem('userLogin', 'admin');
    //   this.props.history.push("/admin")
    // }else{
    //   alert('Tài khoản hoặc mật khẩu không đúng !');
    // }

    //Gọi hàm action truyền vào dữ liệu đăng nhập
    const action = dangNhapAction(this.state);
    this.props.dispatch(action);
  }

  render() {
    return (
      <form className='container' onSubmit={this.handleSubmit}>
        <h3>Login</h3>
        <div className='form-group'>
          <p>UserName</p>
          <input className='form-control' name='username' onChange={this.handleChange}/>
        </div>
        <div className='form-group'>
          <p>Password</p>
          <input className='form-control' name='password' onChange={this.handleChange}/>
        </div>
        <div className='form-group'>
          <button className='btn btn-success' type='submit'>Sign in</button>
        </div>
      </form>
    )
  }
}

export default connect() (Login)