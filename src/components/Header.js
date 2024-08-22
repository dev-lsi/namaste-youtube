import ButtonIcon from "./ButtonIcon";
import logo from "../assets/YouTube_Logo.png";
import hamburgerMenu from "../assets/hamburger-menu.svg";
import search from "../assets/search_Icon.png";
import microphone from "../assets/microphone.svg";
import camera from "../assets/camera.png";
import bell from "../assets/bell.png";
import user from "../assets/user.png";
import { toggleMenu } from "../utils/appSlice";
import { useDispatch, useSelector, useStore } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { SUGGESTIONS_API_URL } from "../utils/constants";
import { addToCache } from "../utils/serchSlice";
import { searchSlice } from "../utils/serchSlice";



const Header = () => {
  const dispatch = useDispatch()
  const [searchQuery,setSearchQuery]=useState("");
  const [suggestions,setSuggestions]=useState([]);
  const[areShownSuggestions,setAreShownSuggestions]=useState(false);
  const cache = useSelector(()=>searchSlice.state)
  const dispatchAddToCache = useDispatch(()=>addToCache())
  

  useEffect(()=>{

    const timer= setTimeout(()=>getSuggestions(),400)
    return ()=>clearTimeout(timer)
  },[searchQuery])
  const getSuggestions=async ()=>{
    const response=await fetch(SUGGESTIONS_API_URL+searchQuery);
    const data = await response.json();
    setSuggestions(data[1])
  }
  const handleToggleMenu=()=>{
    dispatch(toggleMenu())
  }
  return (
    <div className="header flex flex-nowrap align-middle justify-between p-x-4 gap-x-8 py-2 border-b border-slate-200">
      <div className="left-section flex py-2 pr-2 gap-x-4 flex-shrink-0 align-middle">
        
        <img alt="icon" src={hamburgerMenu} 
          className="h-6  cursor-pointer" 
          onClick={()=>{handleToggleMenu()}}>
        </img>
        <Link to={"/"}>
          <img alt="logo" src={logo} className="h-5 pt-1 flex-shrink-0"></img>
        </Link>
        
      </div>
      <div className="middle-section flex flex-nowrap align-middle basis-full">
        <div className="w-full relative">
          <input
            type="text"
            placeholder="Search"
            className=
            " border border-slate-400 rounded-l-full basis-full w-full h-8 focus:outline-none focus:border-slate-600 pl-4"
            value={searchQuery}
            onChange={(e)=>setSearchQuery(e.target.value)}
            onFocus={()=>setAreShownSuggestions(true)}
            onBlur={()=>setAreShownSuggestions(false)}
          ></input>
          <ul className="flex-col w-full absolute   mt-2 bg-slate-100">
            {areShownSuggestions&&suggestions.map(s=><li className="hover:bg-slate-200 hover:cursor-default" key={s}>🔍 {s}</li>)}
          </ul>
        </div>

        <button className="border border-slate-400 w-12 h-8 rounded-r-full bg-slate-100 pl-3 pt-0 flex-shrink-0">
          <img alt="search" src={search} className="w-6 h-6 flex-shrink-0" />
        </button>
        <ButtonIcon src={microphone} alt="microphone" />
      </div>
      <div className="right-section basis-auto flex flex-nowrap align-middle">
        <ButtonIcon src={camera} alt="camera" />
        <ButtonIcon src={bell} alt="bell" />
        <ButtonIcon src={user} alt="user" />
      </div>
    </div>
  );
};

export default Header;
