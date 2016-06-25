import React from 'react';
import _ from 'underscore';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.throttledSearch = _.throttle(this.props.search, 500);
  }

  render() {
    var searchValue = '';
    return (
      <div className="search-bar form-inline">
        <input className="form-control" type="text" onChange={(event) => { 
          searchValue = event.target.value;
          this.throttledSearch(searchValue);
        }}/>
        <button className="btn hidden-sm-down" onClick={() => this.props.search(searchValue)}>
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div> 
    );
  }
}

export default Search;
