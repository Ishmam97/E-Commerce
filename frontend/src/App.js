import './App.css';

import Navigation from './Components/Navigation';
import Home from './Components/Home'
import Signin from './Components/Signin'
import Signup from './Components/Signup'
import NotFound from './Components/NotFound'
import {BrowserRouter , Switch , Route} from 'react-router-dom'

function App() {

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

export default App;
