import { useEffect, useState } from "react";
import Video from "./Video";
import { VIDEOS_API } from "../utils/constants";
import Shirm from "./Shirm";

const Videos=()=>{
    
    const [videos , setVideos] = useState({});

    useEffect(()=>{
        getVideos();
    },[]);

    async function getVideos(){
        const response = await fetch(VIDEOS_API);
        const data = await response.json();
        console.log(data);
        setVideos(data);
    }

    return Object.keys(videos).length===0
        ?<Shirm/>
        :(
        <div className="flex flex-wrap justify-between gap-8">
              {videos.items.map(v=><Video key={v.id} videoData={v}/>)}
        </div>
    );
};

export default Videos;