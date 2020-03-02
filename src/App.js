import React from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Footer from './components/Footer'
import {BrowserRouter, Route, Switch } from 'react-router-dom'
import NewsCategory from './components/NewsCategory';
import Sports from './components/Sports';
import Technology from './components/Technology';
import Health from './components/Health';
import Entertainment from './components/Entertainment';


function App() {
  return (
    <BrowserRouter>
      <div className="container ">
        <NavBar />

        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/sports' component={Sports}/>
          <Route path='/technology' component={Technology}/>
          <Route path='/health' component={Health}/>
          <Route path='/entertainment' component={Entertainment}/>
          {/* <Route path='/:category' component={NewsCategory}/> */}
        </Switch>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
