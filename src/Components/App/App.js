import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [{
        name: 'Tiny Dancer',
        artist: 'Elton John',
        album: 'Madman Across The Water',
        id: 1,
      },
      {
        name: 'Tiny Dancer',
        artist: 'Tim McGraw',
        album: 'Love Story',
        id: 2,
      },
      {
        name: 'Tiny Dancer',
        artist: 'Rockabye Baby!',
        album: 'Lullaby Renditions of Elton John',
        id: 3,
      },
      {
        name: 'Tiny Dancer',
        artist: 'The White Raven',
        album: 'Tiny Dancer',
        id: 4,
      }],
      playlistName: 'My Best Ever Playlist',
      playlistTracks: [{
        name: 'The Healing Day',
        artist: 'Bill Fay',
        album: 'Life Is People',
        id: 5,
      },
      {
        name: 'Emmylou',
        artist: 'First Aid Kit',
        album: 'The Lion\'s Roar',
        id: 6,
      },
      {
        name: 'Stole the Show (feat. Parson James)',
        artist: 'Kygo',
        album: 'Cloud Nine',
        id: 7,
      }],
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

  addTrack(track) {
    let tracks = this.state.playlistTracks;
    if (tracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }
    tracks.push(track);
    this.setState({playlistTracks: tracks});
  }

  removeTrack(track) {
    let tracks = this.state.playlistTracks;
    let filteredTracks = tracks.filter(savedTrack => savedTrack.id !== track.id);
    this.setState({playlistTracks: filteredTracks});
  }

  updatePlaylistName(name) {
    this.setState({playlistName: name});
  }

  savePlaylist() {
    let trackURIs = this.state.playlistTracks.map(track => track.uri);
  }

  search(term) {
    console.log(term);
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar onSearch={this.search} />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} />
            <Playlist playlistName={this.state.playlistName} onNameChange={this.updatePlaylistName} playlistTracks={this.state.playlistTracks} onRemove={this.removeTrack} onSave={this.savePlaylist} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;