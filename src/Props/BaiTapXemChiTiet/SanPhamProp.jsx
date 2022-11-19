import React, { Component } from 'react'
// kết nối redux
import { connect } from 'react-redux'

class SanPhamProp extends Component {
  render() {
    let {sanPham} = this.props
    return (
        <div className="card">
        <img src={sanPham.hinhAnh} height={300} />
        <div className="card-body">
          <p>{sanPham.tenSP}</p>
          <p>{sanPham.giaBan}</p>
          <button onClick={()=>{
                // this.xemChitietSanPham(product)
                // this.props.xemChitiet(sanPham)

                this.props.xemChiTietSanPham(sanPham)
          }} className="btn btn-success">View product</button>
          <button className='btn btn-danger ml-3' 
          onClick={() => {
            this.props.themGioHang(sanPham)
          }}>Them gio hang</button>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    xemChiTietSanPham: (sanPhamClick) => {
      //tao 1 action 
      const action = {
        type:'XEM_CHI_TIET_SP',
        sanPhamClick:sanPhamClick
      };
      dispatch(action);
    },
    themGioHang: (sanPham) => {
      //tao ra 1 action
      const action = {
        type: 'THEM_GIO_HANG',
        sanPham 
      }
      //đưa dữ liệu lên redux
      dispatch(action)
    }
  }
}

export default connect(null,mapDispatchToProps)(SanPhamProp)