import './App.css';
import React, {Component} from 'react';
import Navigation from './Components/Navigation';
import Home from './Components/Home'
import Signin from './Components/Signin'
import Signup from './Components/Signup'
import NotFound from './Components/NotFound'
import {BrowserRouter , Switch , Route} from 'react-router-dom'

class App extends Component{
  constructor(){
    super()
    this.state = {
      robots: [],
      searchfield:''
    }
  } 
  render(){
    return (
      <BrowserRouter>
        <Navigation/>
        <main>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/signin' component={Signin}/>
            <Route exact path='/signup' component={Signup}/>
            <Route component={NotFound}/>
          </Switch>
        </main>
      </BrowserRouter>
    );
  }  
}

export default App;