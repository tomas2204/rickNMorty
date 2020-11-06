import React from 'react';
import './App.css';
import CharacterList from './components/CharacterList'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Character from './components/Character';

function App() {
  return (
    <Router>
        <Route exact path="/" component={CharacterList}/>
        <Route exact path="/character/:id" component={Character}/>
    </Router>
  );
}

export default App;
