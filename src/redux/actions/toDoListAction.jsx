import axios from "axios";

//closure function
export const GetAllTaskAction = () => {
  return async (dispatch, getState) => {
    //getState: là hàm dùng để lấy giá trị từ rootReducer
    //Thực thi...
    try {
      let result = await axios({
        url: "http://svcy.myclass.vn/api/ToDoList/GetAllTask",
        method: "GET",
      });
      //sau khi lấy dữ liệu từ backend về => dispatch dữ liệu đó lên redux
      const action = {
        type: "GET_ALL_TASK",
        arrTask: result.data,
      };
      dispatch(action);
    } catch (err) {
      console.log("err", err);
    }
  };
};

export const addTaskApiAction = (task) => {
  return async (dispatch) => {
    try {
      let result = await axios({
        url: "http://svcy.myclass.vn/api/ToDoList/AddTask",
        method: "POST",
        data: task,
      });
      alert(result.data);
      console.log('result', result.data);
      //sau khi dispatch thành công => dispatch logic getAllTask
      const action = GetAllTaskAction();
      dispatch(action);
    } catch (err) {
      console.log('err',err);
    }
}
}


export const doneTaskAction = (taskName) => {
  return async (dispatch) => {
    try {
      let result = await axios({
        url: "http://svcy.myclass.vn/api/ToDoList/doneTask?taskName=" + taskName,
        method: "PUT",
      });
      //Cập nhật thành công => gọi getAllTaskAction
      await dispatch(GetAllTaskAction());
    } catch (error) {
      console.log(error);
    }
  }
}

export const rejectTaskAction = (taskName) => {
  return async (dispatch) => {
    try {
      let result = await axios({
        url: `http://svcy.myclass.vn/api/ToDoList/rejectTask?taskName=${taskName}`,
        method: "PUT",
      })
      //Gợi lại action getAllTaskAction
      dispatch(GetAllTaskAction());
    } catch (error) {
      console.log(error);
    }
  }
}


export const deleteTaskAction = (taskName) => {
  return async (dispatch) => {
    try {
      let result = await axios({
        url: `http://svcy.myclass.vn/api/ToDoList/deleteTask?taskName=${taskName}`,
        method: "DELETE",
      })

      //Goi lại action getAllTaskAction
      dispatch(GetAllTaskAction());
    }catch (error){
      console.log(error);
    }
  }  
}