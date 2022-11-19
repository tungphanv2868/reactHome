import React, { Component } from "react";

export default class ChangeImage extends Component {
  state = {
    imgSrc: "./img/sp_blackberry.png",
    fontSize: 100,
  };

  changeImg = (img) => {
    this.setState({
      imgSrc: `./img/${img}.png`,
    });
  };

  changFont = (fSize) => {
    this.setState({
        fontSize: this.state.fontSize + fSize
    })
  }

  render() {
    return (
      <div className="container">
        <h3 className="text-center">ChangImage</h3>
        <div className="row">
          <div className="col-6">
            <img
              style={{
                fontSize: `${this.state.fontSize}px`,
              }}
              src={this.state.imgSrc}
            />
            <button onClick={()=>{
                this.changFont(1);
            }} className="btn btn-success">+</button>
            <button onClick={()=>{
                this.changFont(-1);
            }} className="btn btn-success ml-2">-</button>
          </div>

          <div className="col-6">
            <div className="row">
              <div className="col-3">
                <button
                  onClick={() => {
                    this.changeImg("sp_blackberry");
                  }}
                >
                  Black Berry
                </button>
              </div>
              <div className="col-3">
                <button
                  onClick={() => {
                    this.changeImg("sp_iphoneX");
                  }}
                >
                  Iphone
                </button>
              </div>
              <div className="col-3">
                <button
                  onClick={() => {
                    this.changeImg("sp_note7");
                  }}
                >
                  SamSung
                </button>
              </div>
              <div className="col-3">
                <button
                  onClick={() => {
                    this.changeImg("sp_vivo850");
                  }}
                >
                  Vivo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
