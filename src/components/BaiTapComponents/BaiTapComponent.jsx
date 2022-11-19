import React, { Component } from 'react'
import Footer from './Footer'
import Header from './Header'
import ProductList from './ProductList'
import Slider from './Slider'

export default class BaiTapComponent extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Slider/>
        <ProductList/>
        <Footer/>
      </div>
    )
  }
}
