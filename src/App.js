import React from 'react';

import FaqMain from './components/FaqMain'
import QuestionDetail from './components/QuestionDetail';
import TopicDetail from './components/TopicDetail';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar dark color='primary'>
          <div className="container">
            <NavbarBrand href="/">FAQ User Page</NavbarBrand>
          </div>  
        </Navbar>
        <Switch>
          <Route path="/" exact component={FaqMain} />
          <Route path="/QuestionDetail/:id" exact component={QuestionDetail} />
          <Route path="/TopicDetail/:id/:name" exact component={TopicDetail} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
