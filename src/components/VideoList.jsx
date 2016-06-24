import VideoListEntry from './VideoListEntry.jsx';
import React from 'react';

var VideoList = () => (
  <div className="video-list media">
    <VideoListEntry />
    <VideoListEntry />
    <VideoListEntry />
    <VideoListEntry />
    <VideoListEntry />
    <VideoListEntry />
    <VideoListEntry />
    <VideoListEntry />
    <VideoListEntry />
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

export default VideoList;