import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.global.scss';
import Header from './components/Header';
import CreateRecipe from './components/CreateRecipe';
import Home from './components/Home';

function App() {

  return (
    <div>
    <Header />
    <Router>
      <Switch>
        {/* <Route path='/my_recipes' >
          <UserRecipes />
        </Route> */}
        <Route path='/create_recipe'>
          <CreateRecipe />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </Router>
    </div>
  )
};

export default App;