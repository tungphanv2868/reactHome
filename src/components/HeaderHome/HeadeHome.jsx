import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";


export default function HeadeHome() {

  const {userLogin} = useSelector(rootReducer => rootReducer.quanLyNguoiDungReducer);
  const renderLogin = () => {
    if(userLogin) {
      return <NavLink exact activeClassName='bg-white text-dark' className='nav-link'
      to="/profile">Hello {userLogin.hoTen}</NavLink>
    }
    return <NavLink exact activeClassName='bg-white text-dark' className='nav-link'
    to="/login">Login</NavLink>
  }
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <NavLink className="navbar-brand" to="/">
          Cyber
        </NavLink>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        />
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <NavLink exact activeClassName="bg-white text-dark" className="nav-link" to="/home">
                Home <span className="sr-only">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink activeStyle={{color:'orange'}} exact activeClassName="bg-white" className="nav-link" to="/about">
              About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact activeClassName="bg-white text-dark" className="nav-link" to="/register">
              register
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact activeClassName="bg-white text-dark" className="nav-link" to="/contact">
              Contact
              </NavLink>
            </li>
            <li className="nav-item">
              {renderLogin()}
            </li>
            <li className="nav-item">
              <NavLink exact activeClassName="bg-white text-dark" className="nav-link" to="/demohocmodal">
              HOC
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown"
              aria-haspopup="true" aria-expanded="false">Hooks</a>
              <div className="dropdown-menu" aria-labelledby="dropdownId">
                <NavLink className="dropdown-item" to="/hookusestate">UseState</NavLink>
                <NavLink className="dropdown-item" to="/hookuseeffect">UseEffect</NavLink>
                <NavLink className="dropdown-item" to="/hookusecallback">UseCallBack</NavLink>
                <NavLink className="dropdown-item" to="/hookusememo">UseMemo</NavLink>
                <NavLink className="dropdown-item" to="/hookuseref">UseRef</NavLink>
                <NavLink className="dropdown-item" to="/hookredux">hookredux</NavLink>
                <NavLink className="dropdown-item" to="/todolist">ToDoList</NavLink>
              </div>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="text"
              placeholder="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
  )
}

