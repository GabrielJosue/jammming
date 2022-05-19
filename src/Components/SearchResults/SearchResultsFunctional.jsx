import React from 'react'
import './SearchResults.css';
import TrackListFunctional from '../TrackList/TrackListFunctional';
const SearchResultsFunctional = (props) => {
 const {searchResults,onAdd} = props;
  return (
    <div className="SearchResults">
  <h2>Results</h2>
  <TrackListFunctional tracks={searchResults} onAdd={onAdd} isRemoval={false}/>
</div>
  )
}

export default SearchResultsFunctional