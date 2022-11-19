const stateDefault = {
  gioHang: [
    // {
    //   maSP: 1,
    //   tenSP: "VinSmart Live",
    //   giaBan: 5700000,
    //   soLuong: 3,
    //   hinhAnh: "./img/vsphone.jpg",
    // }
  ],
};

export const gioHangReducer = (state = stateDefault, action) => {
  console.log(action, "action");
  switch (action.type) {
    case "THEM_GIO_HANG": {
      let gioHang = [...state.gioHang];
      //từ action giỏ hằng tạo ra object spGioHang
      let spGioHang = { ...action.sanPham, soLuong: 1 };
      // kiểm tra sp đó có tồn tại hay chưa
      let sp = gioHang.find((sanPham) => sanPham.maSP === spGioHang.maSP);
      if (sp) {
        sp.soLuong += 1;
      } else {
        gioHang.push(spGioHang);
      }

      state.gioHang = gioHang;
      console.log("gio Hang", state.gioHang);
      return { ...state };
    }
    case "XOA_GIO_HANG": {
      let gioHang = [...state.gioHang];
      gioHang = gioHang.filter(
        (sanPham) => sanPham.maSP !== action.maSanPhamClick
      );

      //cap nhat lai state.gioHang
      state.gioHang = gioHang;
      return { ...state };
    }
    case "TANG_GIAM_SL": {
      let gioHang = [...state.gioHang];
      //tìm ra sản phẩm cần tăng giảm số lượng
      let spTangGiam = gioHang.find(
        (sanPham) => sanPham.maSP === action.maSanPham
      );
      if (spTangGiam) {
        spTangGiam.soLuong += action.soLuong;
        // if(spTangGiam.soLuong < 1){
        //   alert('số lượng tối thiểu là 1!');
        //   spTangGiam.soLuong -= action.soLuong;
        //   return {...state};
        // }
        if (spTangGiam.soLuong < 1) {
          if (window.confirm("Bạn có muốn xoá sản phẩm này không :( ")) {
            state.gioHang = gioHang.filter(
              (sanPham) => sanPham.maSP !== action.maSanPham
            );
            return { ...state };
          } else {
            spTangGiam.soLuong -= action.soLuong;
          }
        }
      }
      //gán lại state giỏ hàng
      state.gioHang = gioHang;
      return { ...state };
    }
    default:
      return state;
  }
};
