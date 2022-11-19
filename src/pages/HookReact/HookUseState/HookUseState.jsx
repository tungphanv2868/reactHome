//rfc

import React from 'react'
import { useState } from 'react'
import BaiTapChonMauXe from './BaiTapChonMauXe';

export default function HookUseState() {

    let [state, setState] = useState({ like: 1 }); //useState(stateDefault)
    let [like, setLike] = useState(1);

  return (
    <div className='container'>
        <div className='card w-25 mt-2'>
            <img src='https://i.pravatar.cc?u=27' alt='...'/>
            <div className='card-body'>
                <span className='text text-danger'>{like}</span>
                <button className='btn btn-danger' onClick={() => {
                    setLike(like + 1)
                }}>Like</button>
            </div>
        </div>
        <hr/>
        <h3>Bài tập chọn màu xe</h3>
        <BaiTapChonMauXe/>
    </div>
  ) 
}
