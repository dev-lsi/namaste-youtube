import { Link } from "react-router-dom";

const Video=({videoData, currClass})=>{
    
    const {snippet, statistics, id, etag} = videoData;
    const {viewCount,likeCount,favoriteCount,commentCount}=statistics;
    const{ title, channelTitle } = snippet;
    console.log(videoData.snippet.thumbnails.medium.height)
    return (
        <div className="video">
            <Link to={"/watch/"+ id} alt={""}>
                <img 
                    alt="thumbnail" 
                    src={snippet.thumbnails.medium.url}>
               </img>
            </Link>
            
            <h1 className="font-bold">{title.split('|')[0]}</h1>
            <h1 className="font-semibold text-base">{channelTitle}</h1>

            <h6 className="text-xs">views: {viewCount}</h6>
            <h6 className="text-xs">likes: {likeCount}</h6>
            <h6 className="text-xs">favorite: {favoriteCount}</h6>
            <h6 className="text-xs">comments: {commentCount}</h6>

        </div>
    );
};

export const VideoPlus = (Video) => {
           
            return ({key,videoData})=>{
                console.log(videoData.snippet.thumbnails.medium.height)
                return (
                    <div className={"video"}>
                        <Video key={key} videoData={videoData} className={""}/>
                    </div>
                )
            }
}

export default Video;