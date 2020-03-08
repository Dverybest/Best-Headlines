import React from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Footer from './components/Footer'
import {BrowserRouter, Route, Switch } from 'react-router-dom'
// import NewsCategory from './components/NewsCategory';
import Sports from './components/Sports';
import Technology from './components/Technology';
import Health from './components/Health';
import Entertainment from './components/Entertainment';


function App() {
  return (
    <BrowserRouter>
      <div className="container-fluid">
        <NavBar />
        <div className="container">
        <Switch>
          <Route exact path='/Best-Headlines' component={Home}/>
          <Route path='/Best-Headlines/sports' component={Sports}/>
          <Route path='/Best-Headlines/technology' component={Technology}/>
          <Route path='/Best-Headlines/health' component={Health}/>
          <Route path='/Best-Headlines/entertainment' component={Entertainment}/>
          {/* <Route path='/:category' component={NewsCategory}/> */}
        </Switch>
        <Footer/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
