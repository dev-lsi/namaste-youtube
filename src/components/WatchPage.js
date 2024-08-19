import { useParams } from "react-router-dom";

const WhatchPage=()=>{
    
    const {videoId} = useParams();
    return (
        <div>
          <iframe width="795" height="447" 
          src={'https://www.youtube.com/embed/' + videoId} 
          title="Cómo hacer un intercambio de conversación (2)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    );
};

export default WhatchPage;