import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Home from './admin/AdminHomePage'
import SoldiersList from './admin/soldierList/layouts/SoldiersList';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/SoldiersList' component={SoldiersList}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;


