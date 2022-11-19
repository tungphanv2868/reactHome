import React, { Component } from 'react'
import KetQuaTroChoi from './KetQuaTroChoi'
import XucXac from './XucXac'

import style from './BaiTapGameXucXac.module.css';
export default class BaiTapGameXucXac extends Component {
  render() {
    return (
      <div className={`${style.fontGame}`} style={{backgroundImage:'url(./img/video_19_game_xuc_xac/bgGame.png)', width:'100vw', height:'100vh'}}>
        <h3 className='text-center display-4'>Tài xĩu</h3>
        <XucXac/>
        <KetQuaTroChoi/>
      </div>
    )
  }
}
