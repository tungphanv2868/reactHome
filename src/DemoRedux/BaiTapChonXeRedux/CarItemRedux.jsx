import React, { Component } from 'react'

import { connect } from 'react-redux';

class CarItemRedux extends Component {
  render() {
    console.log('props', this.props)
    let {item} = this.props;

    return (
      <div className='card'>
        <img src={item.img}/>
        <div className='card-body'>
            <p>{item.name}</p>
            <p>{item.price}</p>
            <button onClick={() => {
              this.props.viewDetail(item);
            }} className='btn btn-success' 
            data-toggle="modal" data-target="#modelId">Xem chi tiet</button>
        </div>
      </div>
    )
  }
}

//Hàm mapDispatchToProps là tạo ra các props là phương thức đưa dữ liệu lên redux

const mapDispatchToProps = (dispatch) => {
  return{
    viewDetail : (carDetail) => {
      // console.log(carDetail);
      const action = {
        type: 'XEM_CHI_TIET', //Thuộc tính bắc buộc khi đưa dữ liệu lên redux
        carDetail:carDetail
      }
      //Dùng hàm dispatch đưa dữ liệu lện redux
      dispatch(action);
    }
  }
}

export default connect(null,mapDispatchToProps)(CarItemRedux)