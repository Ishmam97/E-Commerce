import './App.css';
import React, { useEffect } from 'react';

import Navigation from './Components/Navigation';
import Home from './Components/Home'
import Signin from './Components/Signin'
import NotFound from './Components/NotFound'
import UserDash from './Components/UserDash'
import AdminDash from './Components/AdminDash'
import AdminEditProduct from './Components/AdminEditProduct'
import AdminRoute from './Components/AdminRoute'
import UserRoute from './Components/UserRoute'

import {BrowserRouter , Routes , Route} from 'react-router-dom'
//redux
import {getProducts} from './Redux/actions/productActions'
import {useDispatch} from 'react-redux'

const App = ()=>{ 
  
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getProducts())
  },[dispatch])

  return (
    <BrowserRouter>
      {/*render navbar*/}
      <Navigation/>
      <main>
        <Routes>
          {/*react routing*/}
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/signin' element={<Signin/>}/>
          <Route exact path='/user/dash' element={<UserRoute/>}>
            <Route exact path='/user/dash' element={<UserDash/>}/>
          </Route>
          <Route exact path='/admin/dash' element={<AdminRoute/>}>
            <Route exact path='/admin/dash' element={<AdminDash/>}/>
          </Route>
          <Route exact path='/admin/edit/product/:pId' element={<AdminRoute/>}>
            <Route exact path='/admin/edit/product/:pId' element={<AdminEditProduct/>}/>
          </Route>
          <Route component={NotFound}/>
        </Routes>
      </main>
    </BrowserRouter>
  ); 
}  


export default App;