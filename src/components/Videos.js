import Video from "./Video";
import { VideoPlus } from "./Video";
import Shirm from "./Shirm";
import { useVideos } from "../utils/useVideos";

const Videos=()=>{
    
    const videos = useVideos();
    const Vid = VideoPlus(Video);

    return Object.keys(videos).length===0
        ?<Shirm/>
        :(
        <div className="videos flex flex-wrap justify-start w-11/12 gap-y-8 gap-x-4 p-4">
            {videos.items
              .map(v=>{
                return Number(v.statistics.likeCount)<=30000
                ?<Video key={v.id} videoData={v}/>
                :<Vid key={v.id} videoData={v} />
                //:<VideoPlus key={v.id} Video={<Video videoData={v}/>}/>
            })}
        </div>
    );
};

export default Videos;