

import './TrackList.css';
import TrackFunctional from '../Track/TrackFunctional';
const TrackListFunctional = (props) => {
 const{tracks,onAdd,onRemove,isRemoval} = props;
  return (
       <div className="TrackList">
      {
        tracks && tracks.map(track => {
          return <TrackFunctional track={track} key={track.id} onAdd={onAdd} onRemove={onRemove} isRemoval={isRemoval}/>
        })
      }
    
    </div>
  )
}

export default TrackListFunctional