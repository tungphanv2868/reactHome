import React, { Component } from "react";
import ProductItemProp from "./ProductItemProp";

let dataPhone = [
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
  {
    maSP: 4,
    tenSP: "Iphone X",
    manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
    heDieuHanh: "iOS 12",
    cameraSau: "Chính 12 MP & Phụ 12 MP",
    cameraTruoc: "7 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 20000000,
    hinhAnh: "./img/sp_iphoneX.png",
  },
  {
    maSP: 5,
    tenSP: "SamSung Note 7",
    manHinh: "Android 9.0 (Pie); Flyme",
    heDieuHanh: "iOS 12",
    cameraSau: "Chính 12 MP & Phụ 12 MP",
    cameraTruoc: "7 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 17000000,
    hinhAnh: "./img/sp_note7.png",
  },
  {
    maSP: 6,
    tenSP: "Vivo 850",
    manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
    heDieuHanh: "Android 9.0 (Pie); Flyme",
    cameraSau: "Chính 12 MP & Phụ 12 MP",
    cameraTruoc: "7 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 7000000,
    hinhAnh: "./img/sp_vivo850.png",
  },
];

export default class ViewProduct extends Component {
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
    return dataPhone.map((product, index) => {
      return (
        <div className="col-4" key={index}>
          <ProductItemProp sanPham={product} 
          xemChiTiet={this.handlClickViewProduct}/>
        </div>
      );
    });
  };

  handlClickViewProduct = (itemClick) => {
    this.setState({
      productItem: itemClick,
    });
  };

  render() {
    let {
      tenSP,
      hinhAnh,
      manHinh,
      heDieuHanh,
      cameraTruoc,
      cameraSau,
      ram,
      rom,
    } = this.state.productItem;
    return (
      <div className="container">
        <h3 className="text-center display-flex">Xem chi tiet</h3>
        <div className="row">{this.renderProduct()};</div>
        <div className="mt-4">
          <div className="row">
            <div className="col-4">
              <h3 className="text-center">{tenSP}</h3>
              <img src={hinhAnh} height={300} />
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
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
