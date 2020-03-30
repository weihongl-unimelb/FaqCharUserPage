import React from 'react';

import FaqMain from './components/FaqMain'
import QuestionDetail from './components/QuestionDetail';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={FaqMain} />
          <Route path="/QuestionDetail/:id" exact component={QuestionDetail} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
