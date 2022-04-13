import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Hotels from '../features/Hotels/Hotels';
import Login from '../features/login/Login';
import Register from '../features/register/Register';
import Reservations from '../features/Reservations/Reservations';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import "react-datepicker/dist/react-datepicker.css";
import { useStore } from '../store/store';
import CreateHotel from '../features/Hotels/CreateHotel';
import BookReservation from '../features/Reservations/BookReservation';

function App() {

  const {clientStore} = useStore();
  const {isAuthorized} = clientStore;
 
  const authorizedRoutes = (<Switch></Switch>)

  const unauthorizedRoutes = (<Switch></Switch>)


  return (
    <>
        <Header isAuthorized={isAuthorized}/>
        <div className='body-wrapper'>
          <Switch> 
            <Route exact path='/login' component={Login}/>
            <Route exact path='/register' component={Register}/>
            <Route exact path='/reservations' component={Reservations}/>
            <Route exact path='/hotels' component={Hotels}/>
            <Route exact path='/createHotel' component={CreateHotel}/>
            <Route exact path='/bookReservation' component={BookReservation}></Route>
          </Switch>
        </div>
        {/* <Footer /> */}
    </>
  );
}

export default App;
