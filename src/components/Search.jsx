import React from 'react';

var Search = (props) => {

  var searchValue = '';
  return (
  <div className="search-bar form-inline">
    <input className="form-control" type="text" onChange={(event) => { 
        searchValue = event.target.value;
        props.search(searchValue); 
      }}/>
    <button className="btn hidden-sm-down" onClick={() => props.search(searchValue)}>
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div> 
  );
};

export default Search;
