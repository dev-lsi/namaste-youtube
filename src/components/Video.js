const Video=({videoData})=>{
    
    const {snippet, statistics} = videoData;
    const {viewCount,likeCount,favoriteCount,commentCount}=statistics;
    return (
        <div className="vido-container border-2 basis-1/3">
            <img alt="thumbnail" src={snippet.thumbnails.medium.url}></img>
            <h1>{snippet.title.split('|')[0]}</h1>
            <h2>"views: "{viewCount}</h2>
            <h2>"likes: "{likeCount}</h2>
            <h2>"favorite: "{favoriteCount}</h2>
            <h2>"comments: "{commentCount}</h2>

        </div>
    );
};

export default Video;