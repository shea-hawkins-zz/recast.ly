import VideoListEntry from './VideoListEntry.jsx';
import React from 'react';

var VideoList = (props) => {
  return (
    <div className="video-list media">
      {props.videos.map(function(video) {
        return (<VideoListEntry key={video.id.videoId} video={video} setCurrentVideo={props.setCurrentVideo} />);
      })}
    </div>
  );
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

export default VideoList;