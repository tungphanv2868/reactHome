import React, { Component } from 'react'
import './Style.css';
import style from './Style.module.css';

export default class StyleComponent extends Component {
  render() {

    const styleObject = {
        backgroundColor:'black',
        color:'green'
    }

    return (
      <div>
        <p className='pColorRed'>Hello</p>
        <p className={style.pColorGreen}>Hello word</p>
        <p className={style['p-color-blue']}>Hello word</p>
        
        {/* Cách 1 */}
        <p style={{
            backgroundColor:'pink',
            color:'green'
        }}>123</p>
        
        {/* Cách 2 */}
        <p style={styleObject}>123</p>
      </div>
    )
  }
}
