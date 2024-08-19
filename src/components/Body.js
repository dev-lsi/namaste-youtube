import { Outlet } from "react-router-dom";
import Main from "./Main";
import SideBar from "./SideBar";

const Body=()=>{
    return (
        <div className="flex flex-nowrap">
          <SideBar/>
          <Outlet/>
        </div>
    );
};

export default Body;