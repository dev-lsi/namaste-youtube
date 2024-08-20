import { useEffect, useState } from "react";
import { VIDEOS_API } from "../utils/constants";

export const useVideos = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  async function getVideos() {
    const response = await fetch(VIDEOS_API);
    const data = await response.json();
    setVideos(data);
  }

  return videos;
};
