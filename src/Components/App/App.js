import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
	  <h1>Ja<span class="highlight">mmm</span>ing</h1>
	  <div class="App">
	    <SearchBar />
	    <div class="App-playlist">
	      <SearchResults />
	      <PlayList />
	    </div>
	  </div>
    </div>
  ); 
}

export default App;
