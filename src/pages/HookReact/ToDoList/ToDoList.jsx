import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import {
  addTaskApiAction,
  deleteTaskAction,
  doneTaskAction,
  GetAllTaskAction,
  rejectTaskAction,
} from "../../../redux/actions/toDoListAction";

export default function ToDoList() {
  const [task, setTask] = useState({ taskName: "", status: false });
  //   const [arrTask, setArrTask] = useState([]);
  const { arrTask } = useSelector((rootReducer) => rootReducer.toDoListReducer);

  const dispatch = useDispatch();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    //dispatch 1 action là fuction
    /*
        action có 2 loại 
        loại 1: {type : 'TYPE_NAME', payload :data}
        loại 2: fuction
      */
    let action = GetAllTaskAction();
    dispatch(action);
  }, []);

  console.log("task", task);
  const hangleChangeInput = (e) => {
    let { value, name } = e.target;
    setTask({
      ...task,
      [name]: value,
    });
  };

  const hangleSubmit = (e) => {
    e.preventDefault();
    //callApi
    //khi gọi hàm addTaskApiAction => hàm chưa gọi
    const action = addTaskApiAction(task);
    dispatch(action);
    //Nếu làm theo cách bình thường
    //gọi axios thêm
    //lấy dữ liệu về => dispatch lên redux xử lý
    //gọi axios getall
    //dispatch giá trị sau khi cho reducer
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-center align-items-center mt-2">
        <div>
          <h3>To Do List</h3>
          <form className="input-group mb-3" onSubmit={hangleSubmit}>
            <input
              onChange={hangleChangeInput}
              name="taskName"
              type="text"
              className="form-control"
              placeholder="Recipient's username"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <div className="input-group-append">
              <button
                className="input-group-button btn btn-success"
                id="basic-addon2"
                type="submit"
              >
                Add task
              </button>
            </div>
          </form>

          <table className="table">
            <tbody>
              {arrTask
                .filter(
                  (task) => task.status === true && task.taskName.trim() !== ""
                )
                .map((task, index) => {
                  return (
                    <tr key={index}>
                      <td>{task.taskName}</td>
                      <td>
                        <span className="badge badge-success">complete</span>
                      </td>
                      <td>
                        <button
                          className="btn btn-warning"
                          onClick={() => {
                            const action = rejectTaskAction(task.taskName);
                            dispatch(action);
                          }}
                        >
                          undo
                        </button>
                        <button
                          className="btn btn-danger ml-2"
                          onClick={() => {
                            const action = deleteTaskAction(task.taskName);
                            dispatch(action);
                          }}
                        >
                          delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
            <tfoot>
              {arrTask
                .filter(
                  (task) => task.status === false && task.taskName.trim() !== ""
                )
                .map((task, index) => {
                  return (
                    <tr key={index}>
                      <td>{task.taskName}</td>
                      <td>
                        <span className="badge badge-danger">incompleted</span>
                      </td>
                      <td>
                        <button
                          className="btn btn-success"
                          onClick={() => {
                            const action = doneTaskAction(task.taskName);
                            dispatch(action);
                          }}
                        >
                          done
                        </button>
                        <button
                          className="btn btn-danger ml-2"
                          onClick={() => {
                            const action = deleteTaskAction(task.taskName);
                            dispatch(action);
                          }}
                        >
                          delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
}

