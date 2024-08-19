import Video from "./Video";
import Shirm from "./Shirm";
import { useVideos } from "../utils/useVideos";
import { Link } from "react-router-dom";

const Videos=()=>{
    
    const videos = useVideos();

    return Object.keys(videos).length===0
        ?<Shirm/>
        :(
        <div className="videos flex flex-wrap justify-start w-11/12 gap-y-8 gap-x-4 p-4">
              
              {videos.items.map(v=><Video key={v.id} videoData={v}/>)}
        </div>
    );
};

export default Videos;