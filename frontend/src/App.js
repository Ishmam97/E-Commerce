import './App.css';
import React /*, { useEffect}*/ from 'react';
import Navigation from './Components/Navigation';
import Home from './Components/Home'
import Signin from './Components/Signin'
import Signup from './Components/Signup'
import NotFound from './Components/NotFound'
import UserDash from './Components/UserDash'
import AdminDash from './Components/AdminDash'
import AdminRoute from './Components/AdminRoute'
import UserRoute from './Components/UserRoute'
import {BrowserRouter , Switch , Route} from 'react-router-dom'
//redux
// import {useDispatch} from 'react-redux'
// import {getCategories} from './Redux/actions/categoryActions'


const App = ()=>{ 
  
  // const dispatch = useDispatch();
  // useEffect(()=>{
  //   dispatch(getCategories())
  // },[dispatch])

  return (
      <BrowserRouter>
        {/*render navbar*/}
        <Navigation/>
        <main>
          <Switch>
            {/*react routing*/}
            <Route exact path='/' component={Home}/>
            <Route exact path='/signin' component={Signin}/>
            <Route exact path='/signup' component={Signup}/>
            <UserRoute exact path='/user/dash' component={UserDash}/>
            <AdminRoute exact path='/admin/dash' component={AdminDash}/>
            <Route component={NotFound}/>
          </Switch>
        </main>
      </BrowserRouter>
    );
}  


export default App;
