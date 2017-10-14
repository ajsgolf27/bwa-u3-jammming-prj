import React from 'react';
import './Playlist.css';
import TrackList from '../TrackList/TrackList';

export default class Playlist extends React.Component {
constructor(props){
  super(props);
  this.onNameChange = this.onNameChange.bind(this); 
}
handleNameChange(e){
  const name = e.target.value
  this.props.onNameChange(name);
}

  render() {
    return (
      <div className="Playlist">
        <input value={"New Playlist"} onChange={this.handleNameChange()}/>
        <TrackList 
        tracks={this.props.playlistTracks}
        name={this.props.playlistName}
        onRemove={this.props.onRemove}
        />
        <a className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</a>
      </div>
    )
  }
}

