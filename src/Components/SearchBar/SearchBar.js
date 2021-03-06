import React, { Component } from 'react';
//import css file
import './SearchBar.css';
// compononent searchbar
class SearchBar extends Component {
constructor(props){
  super(props);
  this.state ={term:''}
  this.search = this.search.bind(this);
  this.handleTermChange = this.handleTermChange.bind(this);
}

  //method search
  search(){
    this.props.onSearch(this.state.term);
  }
  handleTermChange(event){
    this.setState({
      term:event.target.value});
  }
 render() {
  return (
   <div className="SearchBar">
    <input placeholder="Enter A Song, Album, or Artist" onChange={this.handleTermChange}/>
    <button className="SearchButton" onClick={this.search} >SEARCH</button>
  </div>
  );
 }
}

export default SearchBar;