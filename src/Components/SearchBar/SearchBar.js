import React from 'react';
import './SearchBar.css';

export default class SearchBar extends React.Component {
  constructor(props){
    super(props)
    this.search = this.search.bind(this);
  }

  handleTermChange(e){
   e.target.value = this.state.search;
   
  }
  search(){
    this.props.onSearch(this.state.search);
  }
  render() {
    return (
      <div className="SearchBar">
        <input placeholder="Enter A Song, Album, or Artist" 
        onChange={this.handleTermChange}/>
        <a>SEARCH</a>
      </div>
    )
  }
}
