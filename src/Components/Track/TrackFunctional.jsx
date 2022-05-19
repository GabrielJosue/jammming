import './Track.css';

import React from 'react'

const TrackFunctional = (props,track) => {
 const { isRemoval, onAdd, onRemove} = props;
 const {name,artist,album} = track;
 // 
 const renderAction = () => {
  isRemoval ? <button className="Track-action" onClick={removeTrack}>-</button> : <button className="Track-action" onClick={addTrack}>+</button>
 }
 // 
const addTrack = () => {
  onAdd(track);
}

const removeTrack = () => { onRemove(track);}

  return (
     <div className="Track">
  <div className="Track-information">
    <h3> {name}</h3>
    <p> {artist} | {album}</p>
  </div>
  {renderAction}
</div>
  )
}

export default TrackFunctional