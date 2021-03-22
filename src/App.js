import './styles/App.css';
import 'bulma/css/bulma.css';
import Movies from './components/Movies';
import Description from './pages/Description';
import NotFound from './pages/NotFound';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1 className="title is-1">Online Movie Searcher</h1>
      <Switch>
        <Route exact path='/' component={Movies} /> 
        <Route path='/desc/:id' component={Description} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
