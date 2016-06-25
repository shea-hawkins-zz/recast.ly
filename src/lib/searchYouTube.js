import $ from 'jquery';

var searchYouTube = (options, callback) => {
  $.ajax({
    url: `https://www.googleapis.com/youtube/v3/search`,
    type: 'GET',
    data: {
      part: 'snippet',
      key: options.key,
      q: options.query,
      maxResults: options.max,
      videoEmbeddable: 'true',
      type: 'video'
    },
    success: callback,
    error: (response) => console.dir('API Error' + response)
  });
};

export default searchYouTube;
