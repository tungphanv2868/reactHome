import { clear } from '@testing-library/user-event/dist/clear';
import React, { Component, PureComponent } from 'react'

export default class ChildComponent extends PureComponent {

    constructor(props){
        super(props);
        this.state = {

        }
        console.log('constructor child');
        this.timeOut = {};
    }

    static getDerivedStateFromProps(newProps, currentState) { 
      //Nhận vào props mới trước khi render và state hiện tại
        console.log('getDerivedStateFromProps child');
        return currentState;
    }

    // shouldComponentUpdate(newProps, newState){
    //   console.log('shouldComponentUpdate');
    //   console.log('this.props', this.props);
    //   console.log('newProps', newProps);
    //   if(this.props.number === newProps.number){
    //     return false;
    //   }
    //   return true;
    // }


  render() {
    console.log('render child');
    return (
      <div className='container'>
        <p className='p-5 bg-dark text-white display-4'>Child Component</p>
        <h3 className='text-danger'>{this.props.object.number}</h3> 
      </div>
    )
  }


  componentDidMount(){

    this.timeOut = setInterval(() => {
        console.log('123');
    }, 1000);

    console.log('componentDidMount child');
  }


  componentDidUpdate (){
      console.log('componentDidUpdate child')
  }

  componentWillUnmount(){
    //clear các hàm chạy ngầm hoặc các sự kiện addEventListener
    clearTimeout(this.timeOut);

  }

}
