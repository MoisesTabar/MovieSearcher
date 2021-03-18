import './styles/App.css';
import 'bulma/css/bulma.css';
import Movies from './components/Movies';

function App() {
  return (
    <div className="App">
      <h1 className="title is-1">Online Movie Searcher</h1>
      <Movies />
    </div>
  );
}

export default App;
