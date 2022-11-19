import React, { Component } from 'react'

export default class KetQuaTroChoi extends Component {
  render() {
    return (
      <div className='text-center display-4'>
        <div>Bạn đã chọn: <span className='text-danger'>Tài</span></div>
        <div>Số bàn thắng: <span className='text-success'>0</span></div>
        <div>Tổng số bàn chơi: <span className='text-warning'>0</span></div>
        <button className='btn btn-success'>
            <div className='p-2' style={{fontSize:25}}>Play game</div>
        </button>
      </div>
    )
  }
}
