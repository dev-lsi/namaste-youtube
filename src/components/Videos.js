import { useEffect, useState } from "react";
import Video from "./Video";
import { VIDEOS_API } from "../utils/constants";

const Videos=()=>{
    
    const [videos , setVideos] = useState([]);

    useEffect(()=>{
        getVideos();
    },[]);

    async function getVideos(){
        const response = await fetch(VIDEOS_API);
        const data = await response.json();
        console.log(data);
        setVideos(data.items)
    }

    return (
        
        <div className="flex flex-wrap justify-between gap-8">
              {videos.map(v=><Video id={v.id}/>)}
        </div>
    );
};

export default Videos;