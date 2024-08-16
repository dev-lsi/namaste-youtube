import Main from "./Main";
import SideBar from "./SideBar";

const Body=()=>{
    return (
        <div className="flex flex-nowrap">
          <SideBar/>
          <Main/>
        </div>
    );
};

export default Body;