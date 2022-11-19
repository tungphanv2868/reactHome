import { BrowserRouter, Route, Switch } from "react-router-dom";
import HeadeHome from "./components/HeaderHome/HeadeHome";
import About from "./pages/About/About";
import AdminIndex from "./pages/Admin/AdminIndex/AdminIndex";
import Contact from "./pages/Contact/Contact";
import DemoAntd from "./pages/DemoAntd/DemoAntd";
import Detail from "./pages/Detail/Detail";
import DemoHOCModal from "./pages/HOC/DemoHocmodal/DemoHOCModal";
import ModalHOC from "./pages/HOC/DemoHocmodal/ModalHOC";
import Home from "./pages/Home/Home";
import HookRedux from "./pages/HookReact/HookRedux/HookRedux";
import ParentComponent from "./pages/HookReact/HookUseCallBack/ParentComponent";
import HookUseEffect from "./pages/HookReact/HookUseEffect/HookUseEffect";
import HookUseMemo from "./pages/HookReact/HookUseMemo/HookUseMemo";
import HookUseRef from "./pages/HookReact/HookUseRef/HookUseRef";
import HookUseState from "./pages/HookReact/HookUseState/HookUseState";
import ToDoList from "./pages/HookReact/ToDoList/ToDoList";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import { AdminTemplate } from "./templates/AdminTemplate";
import { HomeTemplate } from "./templates/HomeTemplate";
import { UserTemplate } from "./templates/UserTemplate";

// import './App.css';
// import AxiosDemo from './AxiosDemo/AxiosDemo';
// import BaiTapComponent from './components/BaiTapComponents/BaiTapComponent';
// import DemoIf from './components/CauTrucDieuKien_Rerender/DemoIf';
// import DemoDT from './components/Databinding/DemoDT';
// import Event from './components/Databinding/Event';
// import SinhVien from './components/Databinding/SinhVien';
// import StyleComponent from './components/StyleComponent/StyleComponent';
// import BaiTapChonXeRedux from './DemoRedux/BaiTapChonXeRedux/BaiTapChonXeRedux';
// import BaiTapGameXucXac from './DemoRedux/BaiTapGameXucXac/BaiTapGameXucXac';
// import BaiTapQuanLyNguoiDung from './DemoRedux/BaiTapQuanLyNguoiDUng/BaiTapQuanLyNguoiDung';
// import BaiTapQLSP from './Props/BaiTapQLSP/BaiTapQLSP';
// import BaiTapXemChiTiet from './Props/BaiTapXemChiTiet/BaiTapXemChiTiet';
// import DemoPropsChildren from './Props/DemoPropsChildren/DemoPropsChildren';
// import ExerciseCarStore from './Props/ExerciseCarStore/ExerciseCarStore';
// import ViewProduct from './Props/ViewProducts/ViewProduct';
// import ReactLifeCycle from './ReactLifeCycle/ReactLifeCycle';
// import RenderWithMap from './RenderWithMap/RenderWithMap';
// import ChangeImage from './StateDemo/ChangeImage';

function App() {
  return (
    <BrowserRouter>
      {/* <HeadeHome/> */}
      <Switch>
        <HomeTemplate path={'/home'} component={Home}/>
        <HomeTemplate exact path={'/about'} component={About}/>
        <UserTemplate exact path={"/login"} component={Login} />
        <HomeTemplate exact path={"/contact"} component={Contact} />
        <UserTemplate exact path={"/register"} component={Register} />
        <HomeTemplate exact path={"/detail/:id"} component={Detail} />
        <HomeTemplate exact path={"/admin"} component={AdminIndex} />
        <HomeTemplate exact path={"/hookusestate"} component={HookUseState} />
        <HomeTemplate exact path={"/hookuseeffect"} component={HookUseEffect} />
        <HomeTemplate exact path={"/hookusecallback"} component={ParentComponent} />
        <HomeTemplate exact path={"/hookusememo"} component={HookUseMemo} />
        <HomeTemplate exact path={"/hookuseref"} component={HookUseRef} />
        <HomeTemplate exact path={"/hookredux"} component={HookRedux} />
        <HomeTemplate exact path={"/todolist"} component={ToDoList} />
        <HomeTemplate exact path={"/demohocmodal"} component={DemoHOCModal} />
        <AdminTemplate exact path={"/demoantd"} component={DemoAntd} />

        <Route exact path={"/"} component={Home} />
      </Switch>
      {/* <AdminTemplate/> */}
      <ModalHOC/>
    </BrowserRouter>
  );
}

export default App;

// <div className="App">
//   {/* <BaiTapComponent/> */}
//   {/* <SinhVien/> */}
//   {/* <Event/> */}
//   {/* <DemoDT/> */}
//   {/* <DemoIf/> */}
//   {/* <StyleComponent/> */}
//   {/* <ChangeImage/> */}
//   {/* <RenderWithMap/> */}
//   {/* <BaiTapQLSP/> */}
//   {/* <BaiTapXemChiTiet/> */}
//   {/* <ExerciseCarStore/> */}
//   {/* <ViewProduct/> */}
//   {/* <DemoPropsChildren/> */}
//   {/* <BaiTapChonXeRedux/> */}
//   {/* <BaiTapGameXucXac/> */}
//   {/* <BaiTapQuanLyNguoiDung/> */}
//   {/* <ReactLifeCycle/> */}
//   {/* <AxiosDemo/> */}
// </div>
