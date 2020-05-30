import React from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Footer from './components/Footer'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
// import NewsCategory from './components/NewsCategory';
import Sports from './components/Sports';
import Technology from './components/Technology';
import Health from './components/Health';
import Entertainment from './components/Entertainment';
import dotevn from 'dotenv'
dotevn.config()


function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <div className="container px-0">
          <Switch>
            <Route exact path='/Best-Headlines' component={Home} />
            <Route path='/Best-Headlines/sports' component={Sports} />
            <Route path='/Best-Headlines/technology' component={Technology} />
            <Route path='/Best-Headlines/health' component={Health} />
            <Route path='/Best-Headlines/entertainment' component={Entertainment} />
            {/* <Route path='/:category' component={NewsCategory}/> */}
          </Switch>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
