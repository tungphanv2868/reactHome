import axios from "axios";
import { ACCESSTOKEN, DOMAIN, TOKEN_CYBERSOFT, USER_LOGIN } from "../../util/setting";

//userLogin : {taiKhoan:'',matKhau:''}
export const dangNhapAction = (userLogin) => {
  return async (dispatch) => {
    try {
      let result = await axios({
        url: `${DOMAIN}/api/quanLyNguoiDung/dangNhap`,
        method: "POST",
        data: userLogin,
        headers: {
          //token đưa vào phần thuộc tính header
          TokenCybersoft: TOKEN_CYBERSOFT,
        },
      });

      //Lưu lại thông tin ngươi dùng user và token khi người dùng đăng nhập thành công
      let usLogin = result.data.content;
      let token = usLogin.accessToken;
      //Lưu thông tin token vào storage để dùng cho các api sau
      localStorage.setItem(ACCESSTOKEN,token);
      //Thông tin user trả về chuổi => lưu vào storage
      localStorage.setItem(USER_LOGIN, JSON.stringify(usLogin));

      console.log(result.data);
    } catch (error) {
        console.log(error.response?.data);
    }
  };
};
