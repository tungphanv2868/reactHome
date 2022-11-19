import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function HookRedux(props) {
  const [state, setState] = useState({ name: "", content: "" });
  //useSelector: lấy dữ liệu redux về
  const { arrContent } = useSelector(rootReducer => rootReducer.FaceBookAppReducer);
  //useDispatch:đưa dữ liệu lên redux
  const dispatch = useDispatch();

  // console.log(state);
  const handleChangeInput = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
    const action = {
      type: "COMMENT",
      userComment: state,
    };
    dispatch(action);
  };

  return (
    <div className="container">
      <h3>Facebook app</h3>
      <div className="card">
        <div className="card-header">
          {arrContent.map((user, index) => {
            return (
              <div className="row" key={index}>
                <div className="col-2">
                  <img
                    src={`https://i.pravatar.cc?u=${user.name}`}
                    alt="..."
                    width={50}
                    height={50}
                  />
                </div>
                <div className="col-8">
                  <p className="text-danger font-weight-bold">{user.name}</p>
                  <p>{user.content}</p>
                </div>
              </div>
            );
          })}
        </div>
        <form className="card-body" onSubmit={handleSubmit}>
          <div className="form-group">
            <p>Name</p>
            <input
              type="text"
              className="form-control"
              name="name"
              onChange={handleChangeInput}
            />
          </div>
          <div className="form-group">
            <p>Content</p>
            <input
              type="text"
              className="form-control"
              name="content"
              onChange={handleChangeInput}
            />
          </div>
          <div className="form-group">
            <p>Name</p>
            <button className="btn btn-success" type="submit">
              send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
