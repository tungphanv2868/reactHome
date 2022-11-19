import React, { Component } from "react";

export default class DemoIf extends Component {
  isLogin = true;
  userName = "";

  //Cach 1:dùng phương thức kết hợp if để xác định nội dung render ra giao diện
  // renderContent = () => {
  //     if(this.isLogin){ //isLogin === true => nguoi dung da dang nhap{
  //         this.userName = 'tung'
  //         return (
  //             <div>
  //                 hello word {this.userName}<button>Logout</button>
  //             </div>
  //         )
  //     }
  //     return (<div>
  //         <button>Login</button>
  //     </div>)
  // }

  render() {
    return (
      <div>
        {/* {this.renderContent()} */}
        {this.isLogin === true ? (
          <div>
            Hello {this.userName} ! word <button>Logout</button>
          </div>
        ) : (
          <button>Login</button>
        )}
      </div>
    );
  }
}
