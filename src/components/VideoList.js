import React from "react";
import VideoItem from "./VideoItem";

const VideoList = (props) => {
  const renderedVideoList = (videos) => {
    return videos.map((video) => {
      return (
        <VideoItem
          video={video}
          key={video.id.videoId}
          onSelect={props.onSelect}
        />
      );
    });
  };

  const videos = props.videos;
  return (
    <div className="ui relaxed divided list">{renderedVideoList(videos)}</div>
  );
};

export default VideoList;
