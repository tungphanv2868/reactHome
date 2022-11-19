import React, { Component } from "react";
import { connect } from "react-redux";
import _ from 'lodash'
import { THEM_NGUOI_DUNG } from "../../redux/actions/types/baiTapQuanLyNguoiDungType";
import { themNguoiDungAction } from "../../redux/actions/baiTapQuanLyNguoiDungAction";
class FormDangKy extends Component {
  state = {
    values: {
      taiKhoan: "",
      matKhau: "",
      email: "",
      hoTen: "",
      soDienThoai: "",
      loaiNguoiDung: "1", //Dữ liệu trường select bắt buộc phải có kể cả người dùng chưa chọn
    },
    errors: {
      taiKhoan: "",
      matKhau: "",
      email: "",
      hoTen: "",
      soDienThoai: "",
    },
  };

  handleChangeInput = (event) => {
    let { name, value, type } = event.target;
    
    let newValues = {...this.state.values};
    //cập nhất value cho object value
    newValues[name] = value;


    let newErrors = {...this.state.errors};
    let errorMess = '';
    if(value === ''){
      errorMess = name + ' không được bỏ trống';
    }
    if(type === 'email'){
        let regexEmail = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        if(!regexEmail.test(value)){
          errorMess = name + ' không đúng định dạng';
        }
    }
    newErrors[name] = errorMess;

    //xử lý xong values và error thì cập nhật lại state cho 2 thuộc tính này
    this.setState({
      values : newValues,
      errors : newErrors,
    }, () => {
      console.log(this.state);
    })
  }

  handleSubmit = (event) => {
    event.preventDefault(); //phương thức cản sự kiện reload của browser
    console.log('values',this.state.values);

    //kiểm tra hợp lệ khi cho submit
    let { values, errors } = this.state;
    let valid = true;
    //duyệt các giá trị của values 
    for(let key in values){
      if(values[key] === ''){
        alert('thông tin không hợp lệ');
        return;
      }
    }
    for(let key in errors){
      if(errors[key] != ''){
        alert('thông tin không hợp lệ');
        return;
      }
    }

    //khi thông tin form đã hợp lệ => đưa dữ liệu lên redux
    const action = themNguoiDungAction(this.state.values);
    //gửi dữ liệu lên redux
    this.props.dispatch(action);

  }

  //Hàm này đang được gọi bởi handleChange(setState)
  //Hàm này được gọi khi bấm nút sửa (newProps)
  //Làm sao biết được khi nào bấm chỉnh sửa thì cần setState
  //Khi nào không bấm chỉnh sửa mà change input thì không cần gán newProps vào state
  /* 
  static getDerivedStateFromProps(newProps, currentState) {
    //Nhận vào props mới trước khi render và state hiện tại
    //Hàm này sẽ chạy trước khi giao diện thay đổi (nhận vào props mới và state hiện tại)
    //=> lấy props từ redux gán vào state của component
    if(newProps.nguoiDungSua.taiKhoan !== currentState.values.taiKhoan){
      currentState = {
        ...currentState,
        values: newProps.nguoiDungSua
      }
    }
    return currentState;
  }
  */

  componentWillReceiveProps(newProps){
    //trước khi reder và sau khi props thay đổi thì gán props vào state
    this.setState({
      values: newProps.nguoiDungSua
    })
  }

  render() {
    let {taiKhoan, hoTen, email, matKhau, soDienThoai, loaiNguoiDung} = this.state.values;
    return (
      <form className="card" onSubmit={this.handleSubmit}>
        <div className="card-header text-center bg-dark text-white">
          <h3>Form dang ky</h3>
        </div>
        <div className="row card-body">
          <div className="col-6">
            <div className="form-group">
              <p>Tài khoản</p>
              <input
                className="form-control"
                name="taiKhoan"
                onChange={this.handleChangeInput}
                value={taiKhoan}
              />
              <div className="text-danger">{this.state.errors.taiKhoan}</div>
            </div>
            <div className="form-group">
              <p>Mật khẩu</p>
              <input
                type={"password"}
                className="form-control"
                name="matKhau"
                onChange={this.handleChangeInput}
                value={matKhau}
              />
              <div className="text-danger">{this.state.errors.matKhau}</div>
            </div>
            <div className="form-group">
              <p>Email</p>
              <input type="email"
                className="form-control"
                name="email"
                onChange={this.handleChangeInput}
                value={email}
              />
              <div className="text-danger">{this.state.errors.email}</div>
            </div>
          </div>

          <div className="col-6">
            <div className="form-group">
              <p>Họ Tên</p>
              <input
                className="form-control"
                name="hoTen"
                onChange={this.handleChangeInput}
                value={hoTen}
              />
              <div className="text-danger">{this.state.errors.hoTen}</div>
            </div>
            <div className="form-group">
              <p>Số điện thoại</p>
              <input
                className="form-control"
                name="soDienThoai"
                onChange={this.handleChangeInput}
                value={soDienThoai}
              />
              <div className="text-danger">{this.state.errors.soDienThoai}</div>
            </div>
            <div className="form-group">
              <p>Loại người dùng</p>
              <select name="loaiNguoiDung" className="form-control" 
              value={loaiNguoiDung} onChange={this.handleChangeInput}>
                <option value="1">Người dùng</option>
                <option value="2">Quản trị</option>
              </select>
            </div>
          </div>
        </div>
        <div className="card-footer">
          <button type="submit" className="btn btn-outline-success">
            Đăng ký
          </button>
          <button type="submit" className="btn btn-outline-primary ml-2" onClick={() => {
            //sử dụng dữ liệu giao diện gửi lên redux thay đổi giá trị người dùng trong mảng
            const action = {
              type: 'NGUOI_DUNG_CAP_NHAT',
              nguoiDungCapNhat:this.state.values
            }
            //gửi dữ liệu ngươi dùng thay đổi lên redux
            this.props.dispatch(action);
          }}>
            Cập nhât
          </button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (rootReducer) => {
  return{
    nguoiDungSua : rootReducer.baiTapQuanLyNguoiDungReducer.nguoiDungSua
  }
}
export default connect(mapStateToProps)(FormDangKy);