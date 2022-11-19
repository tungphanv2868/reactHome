import React, { Component } from "react";
import SanPhamProp from "./SanPhamProp";

// kết nối redux
import { connect } from 'react-redux'
import GioHang from "./GioHang";
let arrProduct = [
  {
    maSP: 1,
    tenSP: "VinSmart Live",
    manHinh: "AMOLED, 6.2, Full HD+",
    heDieuHanh: "Android 9.0 (Pie)",
    cameraTruoc: "20 MP",
    cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 5700000,
    hinhAnh: "./img/vsphone.jpg",
  },
  {
    maSP: 2,
    tenSP: "Meizu 16Xs",
    manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
    heDieuHanh: "Android 9.0 (Pie); Flyme",
    cameraTruoc: "20 MP",
    cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 7600000,
    hinhAnh: "./img/meizuphone.jpg",
  },
  {
    maSP: 3,
    tenSP: "Iphone XS Max",
    manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
    heDieuHanh: "iOS 12",
    cameraSau: "Chính 12 MP & Phụ 12 MP",
    cameraTruoc: "7 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 27000000,
    hinhAnh: "./img/applephone.jpg",
  },
];

class BaiTapXemChiTiet extends Component {
    //Yêu cầu người dùng state lên giao diện, và sử lý setState khi người dùng bấm xem chi tiet
    state = {
        productItem: {
        maSP: 1,
        tenSP: "VinSmart Live",
        manHinh: "AMOLED, 6.2, Full HD+",
        heDieuHanh: "Android 9.0 (Pie)",
        cameraTruoc: "20 MP",
        cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
        ram: "4 GB",
        rom: "64 GB",
        giaBan: 5700000,
        hinhAnh: "./img/vsphone.jpg",
        },
  };    

  renderProduct = () => {
    return arrProduct.map((product, index) => {
      return (
        <div className="col-4" key={index}>
            <SanPhamProp sanPham = {product} 
            xemChitiet = {this.xemChitietSanPham}/>
          {/* <div className="card">
            <img src={product.hinhAnh} height={300} />
            <div className="card-body">
              <p>{product.tenSP}</p>
              <p>{product.giaBan}</p>
              <button onClick={()=>{
                    this.xemChitietSanPham(product)
              }} className="btn btn-success">View product</button>
            </div>
          </div> */}
        </div>
      );
    });
  };

  xemChitietSanPham = (sanPhamClick) => {
        this.setState({
            productItem:sanPhamClick
        })
  }

  render() {
    console.log('props', this.props);
    let {tenSP, hinhAnh,manHinh, heDieuHanh, cameraTruoc, cameraSau, ram, rom} = this.props.spChiTiet;
    return (
      <div className="container">
        <h3>Giỏ hàng</h3>
        <GioHang/>
        <h3 className="text-center display-flex">Xem chi tiet</h3>
        <div className="row">{this.renderProduct()}</div>
        
        <div className="mt-4">
          <div className="row">
            <div className="col-4">
              <h3 className="text-center">{tenSP}</h3>
              <img src={hinhAnh} height={300}/>
            </div>
            <div className="col-8">
              <h3 className="text-center">Product detail</h3>
              <table className="table">
                <thead>
                  <tr>
                    <th>Màn Hình</th>
                    <th>{manHinh}</th>
                  </tr>
                  <tr>
                    <th>Hệ điều hành</th>
                    <th>{heDieuHanh}</th>
                  </tr>
                  <tr>
                    <th>cameraTruoc</th>
                    <th>{cameraTruoc}</th>
                  </tr>
                  <tr>
                    <th>cameraSau</th>
                    <th>{cameraSau}</th>
                  </tr>
                  <tr>
                    <th>ram</th>
                    <th>{ram}</th>
                  </tr>
                  <tr>
                    <th>rom</th>
                    <th>{rom}</th>
                  </tr>
                </thead>
                <tbody></tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


//Định nghĩa hàm mapStateToProps lấy dữ liệu từ redux về
const mapStateToProps = (rootReducer) => {
  return {
    spChiTiet : rootReducer.productDetailReducer
  }
}

export default connect(mapStateToProps)(BaiTapXemChiTiet);