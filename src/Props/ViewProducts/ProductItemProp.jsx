import React, { Component } from "react";

export default class ProductItemProp extends Component {
  render() {
    let {sanPham} = this.props
    return (
      <div className="card mt-4">
        <img src={sanPham.hinhAnh} height={300} />
        <div className="card-body">
          <p>{sanPham.tenSP}</p>
          <p>{sanPham.giaBan}</p>
          <button onClick={() => {
                this.props.xemChiTiet(sanPham);
          }} className="btn btn-success">
            View Product
          </button>
        </div>
      </div>
    );
  }
}
