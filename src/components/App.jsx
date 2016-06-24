import React from 'react';
import Nav from './Nav.jsx';
import VideoPlayer from './VideoPlayer.jsx';
import VideoList from './VideoList.jsx';


var App = () => (
  <div>
    <Nav />
    <div className="col-md-7">
      <VideoPlayer/>
    </div>
    <div className="col-md-5">
      <VideoList videos={window.exampleVideoData} />
    </div>
  </div>
);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
