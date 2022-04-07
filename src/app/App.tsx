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

  const authorizedRoutes = (<Switch></Switch>)

  const unauthorizedRoutes = (<Switch></Switch>)

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
        <Footer />
    </>
  );
}

export default App;
