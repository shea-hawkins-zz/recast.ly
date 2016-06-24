import React from 'react';

var VideoListEntry = () => (
  <div className="video-list-entry">
    <div className="media-left media-middle">
      <img className="media-object" src="https://i.ytimg.com/vi/dQw4w9WgXcQ/default.jpg" alt="" />
    </div>
    <div className="media-body">
      <div className="video-list-entry-title">Video Title</div>
      <div className="video-list-entry-detail">Video Description</div>
    </div>
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoListEntry.propTypes = {
  video: React.PropTypes.object.isRequired
};

export default VideoListEntry;
