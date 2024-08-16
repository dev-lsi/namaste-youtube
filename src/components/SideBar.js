import SidebarSection from "./SideBarSection";

const SideBar=()=>{

    
    
    return (
        <div className="side-bar flex flex-col gap-2 px-2 border w-min border-slate-500">
           <SidebarSection/>
           <SidebarSection/>
           <SidebarSection/>
           <SidebarSection/>
        </div>
    );
};

export default SideBar;