// style
import './Playlist.css';
// local component
import TrackListFunctional from '../TrackList/TrackListFunctional';

const PlaylistFunctional = (props) => {
 const {onSave,onNameChange,playlistTracks,addTrack,onRemove}= props;
 const handleNameChange = (event) =>{
 onNameChange(event.target.value);
 }
 return(
  <div className='Playlist'>
    <input defaultValue={"New PlayList"} onChange={handleNameChange}/>
   <TrackListFunctional tracks={playlistTracks} onAdd={addTrack} onRemove={onRemove} isRemoval={true}/>
   <button className='Playlist-save' onClick={onSave}>Save To Spotify</button>
  </div>
 )
}
export default PlaylistFunctional;