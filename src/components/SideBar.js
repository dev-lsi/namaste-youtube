import { useSelector } from "react-redux";
import SidebarSection from "./SideBarSection";

const SideBar=()=>{

    let isMenuOpen = useSelector(store=>store.app.isMenuOpen);
    return !isMenuOpen
    ?null
    :(
        <div className="side-bar flex flex-col gap-2 px-2 border w-min border-slate-200">
            <h1>{JSON.stringify(isMenuOpen)}</h1>
           <SidebarSection/>
           <SidebarSection/>
           <SidebarSection/>
           <SidebarSection/>
        </div>
    );
};

export default SideBar;