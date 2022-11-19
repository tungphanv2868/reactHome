import React, { Component } from "react";

export default class ProductItem extends Component {
  render() {
    let {product} = this.props;
    return (
      <div className="card">
        <img src={product.image} />
        <div className="card-body">
          <p>{product.name}</p>
          <p>{product.price}</p>
          <button className="btn btn-dark text-while">Add to card</button>
        </div>
      </div>
    );
  }
}
