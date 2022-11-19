import React, {useState} from 'react'

export default function BaiTapChonMauXe() {

    const [img, setImg] = useState('./img/imgBlackCar.jpg')

  return (
    <div className='row'>
        <div className='col-6'>
            <img src={img} className='w-100'/>
        </div>
        <div className='col-6'>
            <div className='row'>
                <div className='col-4'>
                    <button className='btn bg-dark text-white' onClick={() => {
                        setImg('./img/imgBlackCar.jpg')
                    }}>black car</button>
                </div>
                <div className='col-4'>
                    <button className='btn bg-danger text-white' onClick={() => {
                        setImg('./img/imgRedCar.jpg')
                    }}>red car</button>
                </div>
                <div className='col-4'>
                    <button className='btn bg-secondary text-white' onClick={() => {
                        setImg('./img/imgSilverCar.jpg')
                    }}>silver car</button>
                </div>
            </div>
        </div>
    </div>
  )
}
