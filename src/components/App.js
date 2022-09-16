import React, { useState, useEffect } from "react";
import SearchBar from "./searchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    onFormSubmit("hello");
  }, []);

  const onFormSubmit = async (term) => {
    if (!term) return;
    const data = await youtube.get("/search", { params: { q: term } });
    setVideos(data.data.items);
    setSelectedVideo(data.data.items[0]);
  };

  const onVideoSelect = (video) => {
    setSelectedVideo(video);
  };

  const videoItem = () => {
    console.log(selectedVideo);
    return <VideoDetail video={selectedVideo} />;
  };

  return (
    <div className="ui container">
      <SearchBar onSubmit={onFormSubmit} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">{videoItem()}</div>
          <div className="five wide column">
            <VideoList videos={videos} onSelect={onVideoSelect} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
