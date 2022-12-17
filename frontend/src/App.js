import './App.css';
import React, { useEffect } from 'react';

// import Navigation from './Components/Navigation';
// import Home from './Components/Home'
// import Signin from './Components/Signin'
// import NotFound from './Components/NotFound'
// import UserDash from './Components/UserDash'
// import AdminDash from './Components/AdminDash'
// import AdminEditProduct from './Components/AdminEditProduct'
// import AdminRoute from './Components/AdminRoute'
// import UserRoute from './Components/UserRoute'

import {BrowserRouter , Switch , Route} from 'react-router-dom'
//redux
// import {getProducts} from './Redux/actions/productActions'
import {useDispatch} from 'react-redux'

const App = ()=>{ 
  
  // const dispatch = useDispatch();
  // useEffect(()=>{
  //   dispatch(getProducts())
  // },[dispatch])

  // return (
  //   <BrowserRouter>
  //     {/*render navbar*/}
  //     <Navigation/>
  //     <main>
  //       <Switch>
  //         {/*react routing*/}
  //         <Route exact path='/' component={Home}/>
  //         <Route exact path='/signin' component={Signin}/>
          
  //         <UserRoute exact path='/user/dash' component={UserDash}/>
  //         <AdminRoute exact path='/admin/dash' component={AdminDash}/>
  //         <AdminRoute exact path='/admin/edit/product/:pId' component={AdminEditProduct}/>
  //         <Route component={NotFound}/>
  //       </Switch>
  //     </main>
  //   </BrowserRouter>
  // ); 

  return (
            <h1>Hello</h1>
    );
}  


export default App;