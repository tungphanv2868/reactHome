import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash';

class TableDanhSachNguoiDung extends Component {
  state = {
    sortBy : 'taiKhoan',
  }
  handleSort = (name) => {
    this.setState({
      sortBy:name
    })
  } 

  render() {
    let {mangNguoiDung} = this.props;
    mangNguoiDung = _.sortBy(mangNguoiDung,[this.state.sortBy])
    console.log(this.props);
    return (
      <div className='card'>
        <div className='card-header bg-primary text-while'>Danh sách người dùng</div>
        <table className='table'>
            <thead>
                <tr className='ba-dark text-while'>
                    <th>STT</th>
                    <th style={{cursor:'pointer'}} onClick={()=>{this.handleSort('taiKhoan')}}>Tai Khoan</th>
                    <th style={{cursor:'pointer'}} onClick={()=>{this.handleSort('hoTen')}}>Ho Ten</th>
                    <th>Mat khau</th>
                    <th style={{cursor:'pointer'}} onClick={()=>{this.handleSort('email')}}>Email</th>
                    <th style={{cursor:'pointer'}} onClick={()=>{this.handleSort('soDienThoai')}}>So dien thoai</th>
                    <th style={{cursor:'pointer'}} onClick={()=>{this.handleSort('loaiNguoiDung')}}>Loai nguoi dung</th>
                    <th></th>
                </tr>
            </thead>

            <tbody>
              {mangNguoiDung.map((nguoiDung, index) => {
                return <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{nguoiDung.taiKhoan}</td>
                  <td>{nguoiDung.hoTen}</td>
                  <td>{nguoiDung.matKhau}</td>
                  <td>{nguoiDung.email}</td>
                  <td>{nguoiDung.soDienThoai}</td>
                  <td>{nguoiDung.loaiNguoiDung == '1' ? 'Người dùng' : 'Quản trị'}</td>
                  <td>
                    <button className='btn btn-danger' onClick={() => {
                      const action = {
                        type:'XOA_NGUOI_DUNG',
                        taiKhoan : nguoiDung.taiKhoan
                      };
                      //gửi dữ liệu lên reducer
                      this.props.dispatch(action);
                    }}>Xoá</button>
                    <button className='btn btn-primary ml-2' onClick={() => {
                      const action = {
                        type :'SUA_NGUOI_DUNG',
                        nguoiDung: nguoiDung
                      };
                      this.props.dispatch(action);
                    }}>Sửa</button>
                  </td>
                </tr>
              })}
            </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = (rootReducer) => {
    return{
      mangNguoiDung: rootReducer.baiTapQuanLyNguoiDungReducer.mangNguoiDung
    }
}

export default connect(mapStateToProps)(TableDanhSachNguoiDung);
