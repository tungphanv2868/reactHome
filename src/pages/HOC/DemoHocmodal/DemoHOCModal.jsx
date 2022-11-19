import React, {useState} from "react";
import Login from "../../Login/Login";
import Register from "../../Register/Register";
import ModalHOC from "./ModalHOC";
import { useDispatch } from "react-redux";
import { computeHeadingLevel } from "@testing-library/react";

export default function DemoHOCModal(props) {

    const [component, setComponent] = useState(<Register/>);

    const dispatch = useDispatch();


  return (
    <div className="container">
    <h3 className="mt-5 text-center">Demo HOC</h3>
      <button
        type="button" className="btn btn-primary btn-lg"
        data-toggle="modal" data-target="#modelId" 
        onClick={()=>{
            const action = {
                type: "OPEN_FORM",
                component: <Register/>,
                handleSubmit: () => {
                    console.log("Sign in");
                }
            };
            dispatch(action);
        }}>
        Sign in
      </button>
      <button
        type="button" className="btn btn-primary btn-lg"
        data-toggle="modal" data-target="#modelId"
        onClick={() => {
            const action = {
                type: "OPEN_FORM",
                component: <Login/>,
                handleSubmit: () => {
                    console.log("Login");
                }
            };
            dispatch(action);
        }}>
        Login
      </button>
      <ModalHOC component={component}/>
    </div>
  );
}
