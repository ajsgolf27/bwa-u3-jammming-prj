import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import TrackList from '../TrackList/TrackList';
import './App.css';
import Spotify from '../../util/Spotify';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state ={searchResults: [{name:'name', artist: 'artist', album: 'album'}]}
    this.state ={playlistTracks: [{name:'name', artist: 'artist', album: 'album'}],playlistName:'MyPlaylist'}
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

  
  search(searchTerm){
   this.setState({searchResults: Spotify.search(searchTerm)});
    console.log(searchTerm);
  }

  savePlaylist(){

  }

  updatePlaylistName(name){
    this.setState({playlistName:name})
  }

  addTrack(track){

    if(!this.state.playlistTracks.includes(track.id)){
      this.setState = {playlistTracks: this.state.playlistTracks.append({name: track.name,artist:track.artist, album: track.album})}
    }
  }

  removeTrack(track){
    this.state.playlistTracks.filter(track.id);
    this.setState({playlistTracks: this.state.playlistTracks});
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
    <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults}
            onAdd={this.addTrack()}
            onSearch={this.search}/>
      <Playlist 
      playlistName={this.state.playlistName}
      playlistTracks={this.state.playlisTracks}
      onRemove={this.removeTrack()}
      onNameChange={this.updatePlaylistName}
      onSave={this.savePlaylist}
      />
      <TrackList 
      tracks={this.props.searchResults}/>
    </div>
        </div>
      </div>
    )
  }
}