import React, { Component } from 'react'

export default class CarItem extends Component {
  render() {
    
    let {item} = this.props;

    return (
      <div className='card'>
        <img src={item.img}/>
        <div className='card-body'>
          <p>{item.name}</p>
          <p>{item.price}</p>
          <button data-toggle="modal" data-target="#modelId" className='btn btn-success'
          onClick={() => {
            this.props.xemChiTiet(item);
          }}>Xem chi tiet</button>
        </div>
      </div>
    )
  }
}
