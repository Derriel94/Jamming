import './App.css';
import SearchBar from './../SearchBar/SearchBar.js';
import SearchResults from './../SearchResults/SearchResults.js';
import Playlist from './../Playlist/Playlist.js';

function App() {
  return (
    <div className="App">
	  <h1>Ja<span class="highlight">mmm</span>ing</h1>
	  <div class="App">
	    <SearchBar />
	    <div class="App-playlist">
	      <SearchResults />
	      <Playlist />
	    </div>
	  </div>
    </div>
  ); 
}

export default App;
