import React, { Component } from "react";

export default class SinhVien extends Component {
  //thuộc tính hoTen, lop thuộc class SinhVien
  hoTen = "Nguyen Van A";
  lop = "React";
//   khoaHoc = "frontend";
  renderThongTinSinhVien = (khoaHoc) => {
    return (
      <ul>
        <li>hoTen: {this.hoTen}</li>
        <li>lop: {this.lop}</li>
        <li>khoaHoc: {khoaHoc}</li>
      </ul>
    )
  }

  //phương thức render là phương thức thuộc class SinhVien
  render() {
    //Biến của hàm render
    const khoaHoc = "frontend";

    return(
        <div className="container">
            {this.renderThongTinSinhVien(khoaHoc)}
        </div>
    )
  }
}
