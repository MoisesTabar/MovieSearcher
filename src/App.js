import './styles/App.css';
import 'bulma/css/bulma.css';
import Search from './components/Search';

function App() {
  return (
    <div className="App">
      <h1 className="title is-1">Online Movie Searcher</h1>
      <div className="Search-wrapper">
        <Search />
      </div>
    </div>
  );
}

export default App;
