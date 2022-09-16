import React from "react";
import "./VideoItem.css";

const VideoItem = (props) => {
  const video = props.video;
  return (
    <div className="item video-item" onClick={() => props.onSelect(video)}>
      <img
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
      />
      <div className="content">
        <a className="header" href={`/`}>
          {video.snippet.title}
        </a>
      </div>
    </div>
  );
};

export default VideoItem;
