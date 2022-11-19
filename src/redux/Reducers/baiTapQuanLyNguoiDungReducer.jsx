import { NGUOI_DUNG_CAP_NHAT, SUA_NGUOI_DUNG, THEM_NGUOI_DUNG, XOA_NGUOI_DUNG } from "../actions/types/baiTapQuanLyNguoiDungType";

const stateDefault = {
  mangNguoiDung: [
    {
      taiKhoan: "abc",
      hoTen: "Nguyen Van A",
      soDienThoai: "0909090",
      email: "nguyenvana@gmail.com",
      matKhau: "123123",
      loaiNguoiDung: "1",
    },
    {
      taiKhoan: "xyz",
      hoTen: "Tran Van B",
      soDienThoai: "0909090",
      email: "tranvanb@gmail.com",
      matKhau: "123123",
      loaiNguoiDung: "2",
    },
  ],
  nguoiDungSua: {
    taiKhoan: "",
    hoTen: "",
    soDienThoai: "",
    email: "",
    matKhau: "",
    loaiNguoiDung: "",
  },
};

export const baiTapQuanLyNguoiDungReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case THEM_NGUOI_DUNG: {
      state.mangNguoiDung = [...state.mangNguoiDung, action.nguoiDung];
      return { ...state };
    }

    case XOA_NGUOI_DUNG: {
      let mangNguoiDungDelete = [...state.mangNguoiDung];

      mangNguoiDungDelete = mangNguoiDungDelete.filter(
        (nguoiDung) => nguoiDung.taiKhoan !== action.taiKhoan
      );

      state.mangNguoiDung = mangNguoiDungDelete;
      return { ...state };
    }

    case SUA_NGUOI_DUNG: {
      state.nguoiDungSua = action.nguoiDung;
      return { ...state };
    }
    case NGUOI_DUNG_CAP_NHAT: {
      let mangNguoiDungUpdate = [...state.mangNguoiDung];
      let NguoiDungUpdate = mangNguoiDungUpdate.find(
        nd => nd.taiKhoan === action.nguoiDungCapNhat.taiKhoan
      );
    
      if(NguoiDungUpdate){
        // NguoiDungUpdate.hoTen = action.nguoiDungCapNhat.hoTen;
        
        for(let key in NguoiDungUpdate){
            NguoiDungUpdate[key] = action.nguoiDungCapNhat[key];
        }
      }
      //setState mảng người dùng
      state.mangNguoiDung = mangNguoiDungUpdate;
      return {...state};
    }

    default:
      return state;
  }
};
