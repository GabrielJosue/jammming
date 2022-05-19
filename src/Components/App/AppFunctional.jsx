import React , {useState} from 'react';
// local components
import SearchBarFunctional from '../SearchBar/SearchBarFunctional';
import SearchResultsFuntional from '../SearchResults/SearchResultsFunctional';
import PlaylistFunctional from '../Playlist/PlaylistFunctional';
import './App.css';
// utils
import Spotify from '../../util/Spotify';
// create functionial App Component
const AppFunctional = (props)  => {
 const {track,onSave,onNameChange,onRemove} = props;
 const [searchResults, setSearchResults] = useState([]);
 const [playlistName, setPlaylistName] = useState('New Playlist');
 const [playlistTracks, setPlaylistTracks] = useState([]);

 const addTrack = (track) =>{
   let tracks = playlistTracks;
   if (tracks.find(savedTrack => savedTrack.id === track.id)){
     return;
   }
   tracks.push(track);
   setPlaylistTracks(tracks);
 }
//  remove tracks 
const removeTrack = (track) =>{
 let tracks = playlistTracks;
 tracks = tracks.filter(currentTrack => currentTrack.id !== track.id);
  setPlaylistTracks(tracks);
}
const updatePlaylistName = (name) =>{setPlaylistName(name);}

const savePlaylist = () =>{
  const trackURIs = playlistTracks.map(track => track.uri);
  Spotify.savePlaylist(playlistName, trackURIs);
  setPlaylistTracks([]);
}
const search =(term) =>{
  Spotify.search(term).then(searchResults => setSearchResults(searchResults));
}
 return(
   <div>
     <h1>Ja<span className="highlight">mmm</span>ing</h1>
  <div className="App">
    <SearchBarFunctional onSearch={search}/>
    <div className="App-playlist">
      <SearchResultsFuntional searchResults= {searchResults} onAdd={addTrack}/>
      <PlaylistFunctional playlistName={playlistName} playlistTracks={playlistTracks} onRemove={removeTrack} onNameChange={updatePlaylistName} onSave={savePlaylist}/>
    </div>
  </div>
   </div>
 )
}

export default AppFunctional;