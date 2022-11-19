import React, { Component } from 'react'

//ket noi redux
import { connect } from 'react-redux'

class GioHang extends Component {
  render() {
    console.log(this.props,'props');
    return (
      <table className='table' height={300} >
        <thead>
            <tr>
                <th>Ma san pham</th>
                <th>hinh anh</th>
                <th>ten san pham</th>
                <th>don gia</th>
                <th>so luong</th>
                <th>thanh tien</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            {this.props.gioHang.map((spGH, index) => {
                return <tr key={index}>
                <td>{spGH.maSP}</td>
                <td><img src={spGH.hinhAnh} alt='...' height={50} width={50}/></td>
                <td>{spGH.tenSP}</td>
                <td>{spGH.giaBan}</td>
                <td>
                    <button className='btn btn-primary' onClick={() => {
                        this.props.tangGiamSoLuong(spGH.maSP, 1)
                    }}>
                        +
                    </button>
                    {spGH.soLuong}
                    <button className='btn btn-primary ml-2' onClick={() => {
                        this.props.tangGiamSoLuong(spGH.maSP, -1)
                    }}>
                        -
                    </button>
                </td>

                <td>{spGH.giaBan * spGH.soLuong}</td>
                <td><button className='btn btn-danger' onClick={() => {
                    this.props.xoaGioHang(spGH.maSP);
                }}>Xoa</button></td>
            </tr>
            })}
        </tbody>
      </table>
    )
  }
}


const mapStateToProps = (rootReducer) => {
    return{
        gioHang  : rootReducer.gioHangReducer.gioHang
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        xoaGioHang: (maSanPhamClick) => {
            // console.log('maSanPham', maSanPhamClick);
            const action = {
                type: 'XOA_GIO_HANG',
                maSanPhamClick
            }
            //Gửi dữ liệu lên redux
            dispatch(action);
        },
        tangGiamSoLuong: (maSanPham, soLuong) => {
            // console.log(maSanPham,'masanpham');
            // console.log(soLuong, 'soLuong');
            const action ={
                type: 'TANG_GIAM_SL',
                maSanPham,
                soLuong,
            };
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(GioHang)