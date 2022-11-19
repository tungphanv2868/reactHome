import React, { Component } from 'react'

export default class XucXac extends Component {
  render() {
    return (
      <div className='row'>
        <div className='col-4 text-right'>
          <button className='btn btn-danger'>
            <div className='display-4 text-while p-5' style={{borderRadius:'15px'}}>Tài</div>
          </button>
        </div>
        <div className='col-4 text-center'>
            <img src='./img/video_19_game_xuc_xac/1.png' width={50} height={50}/>
            <img src='./img/video_19_game_xuc_xac/1.png' width={50} height={50}/>
            <img src='./img/video_19_game_xuc_xac/1.png' width={50} height={50}/>
        </div>
        <div className='col-4 text-left'>
        <button className='btn btn-danger'>
            <div className='display-4 text-while p-5' style={{borderRadius:'15px'}}>Xĩu</div>
          </button>
        </div>
      </div>
    )
  }
}
