import React, { Component } from 'react'
import CarList from './CarList';
import ModelCar from './ModelCar';



export default class ExerciseCarStore extends Component {

  state = {
    sanPhamChiTiet : { id: 1, name: 'black car', img: './img/imgBlackCar.jpg', price: 1000 },
  }

    products = [
        { id: 1, name: 'black car', img: './img/imgBlackCar.jpg', price: 1000 },
        { id: 2, name: 'red car', img: './img/imgRedCar.jpg', price: 2000 },
        { id: 3, name: 'silver car', img: './img/imgSilverCar.jpg', price: 3000 },
    ];
    //Đặt state tại đâu viết setState tại đó
    xemChiTiet = (carItem) => {
      this.setState({
        sanPhamChiTiet:carItem
      })
    }

  render() {
    return (
      <div className='container'>
        <h3>Bài tập truyền Props</h3>
        <ModelCar ProductImg = {this.state.sanPhamChiTiet} />
        <CarList ProductData = {this.products} xemChiTiet = {this.xemChiTiet}/>
      </div>
    )
  }
}
