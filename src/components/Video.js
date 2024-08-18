const Video=({videoData})=>{
    
    const {snippet, statistics} = videoData;
    const {viewCount,likeCount,favoriteCount,commentCount}=statistics;
    return (
        <div className="vido-container border-2 basis-1/3">
            <h1>{snippet.title.split('|')[0]}</h1>
            <h2>{viewCount}</h2>
        </div>
    );
};

export default Video;