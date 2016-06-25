import React from 'react';
import Nav from './Nav.jsx';
import VideoPlayer from './VideoPlayer.jsx';
import VideoList from './VideoList.jsx';
import searchYouTube from '../lib/searchYouTube.js';
import youtube from '../config/youtube.js';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentVideo: window.exampleVideoData[0],
      videos: window.exampleVideoData
    };
    searchYouTube({key: youtube, query: 'Bliss Eso', max: 6}, this.displayResults.bind(this));
  }

  displayResults(results) {
    this.state.videos = results.items;
    this.setState(this.state);
  }

  setCurrentVideo (video) {
    this.state.currentVideo = video;
    this.setState(this.state);
  }

  search (searchString) {
    searchYouTube({key: youtube, query: searchString, max: 6}, this.displayResults.bind(this));
  }

  render () {
    return (
      <div>
        <Nav search={this.search.bind(this)}/>
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo} />
        </div>
        <div className="col-md-5">
          <VideoList videos={this.state.videos} setCurrentVideo={this.setCurrentVideo.bind(this)} />
        </div>
      </div>
    );    
  }

}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
