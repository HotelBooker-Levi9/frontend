import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Hotels from '../features/Hotels/Hotels';
import Login from '../features/login/Login';
import Register from '../features/register/Register';
import Reservations from '../features/Reservations/Reservations';
import './App.css';
import Footer from './Footer';
import Header from './Header';

function App() {

  const authorizedRoutes = (<Switch> 
    {/* <Route path='/login' element={Login}/> */}
  </Switch>)

  const unauthorizedRoutes = (<Switch>
        {/* <Route path='/login' element={Login}/> */}
        {/* <Route path='/register' element={Register}/> */}
  </Switch>)

  const ifAuthorized = false;

  return (
    <>
        <Header />
          <Switch> 
            <Route exact path='/login' component={Login}/>
            <Route exact path='/register' component={Register}/>
            <Route exact path='/reservations' component={Reservations}/>
            <Route exact path='/hotels' component={Hotels}/>
          </Switch>
          {/* <Login/> */}
        <Footer />
    </>
  );
}

export default App;
