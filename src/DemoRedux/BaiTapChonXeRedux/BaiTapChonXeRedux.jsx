import React, { Component } from 'react'
import CarListRedux from './CarListRedux'
import CarModalRedux from './CarModalRedux'

export default class BaiTapChonXeRedux extends Component {

    products = [
        { id: 1, name: 'black car', img: './img/imgBlackCar.jpg', price: 1000 },
        { id: 2, name: 'red car', img: './img/imgRedCar.jpg', price: 2000 },
        { id: 3, name: 'silver car', img: './img/imgSilverCar.jpg', price: 3000 },
    ];

  render() {
    return (
      <div className='container'>
        <h3 className='text-center'>Car list</h3>
        <CarModalRedux/>
        <CarListRedux productList={this.products}/>
      </div>
    )
  }
}
