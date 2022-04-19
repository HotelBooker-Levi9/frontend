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
import Top10Destinations from '../features/Destinations/Top10Destinations';
import cart from '../features/cart/Cart';


function App() {

  const {clientStore} = useStore();
  localStorage.setItem("role", "ROLE_ADMIN")
 
  const adminRoutes = (<Switch>
            <Route exact path='/createHotel' component={CreateHotel}/>
            <Route exact path='/bookReservation' component={BookReservation}></Route>
            <Route exact path='/top10destinations' component={Top10Destinations}/>    
            <Route exact path='/my-cart' component={cart}/>            
            <Route exact path='/register' component={Register}/>
            <Route exact path='/reservations' component={Reservations}/>
            <Route exact path='/hotels' component={Hotels}/>
  </Switch>)

  const clientRoutes = (<Switch>
            <Route exact path='/bookReservation' component={BookReservation}></Route>
            <Route exact path='/top10destinations' component={Top10Destinations}/>    
            <Route exact path='/my-cart' component={cart}/>           
            <Route exact path='/reservations' component={Reservations}/>
            <Route exact path='/hotels' component={Hotels}/>
  </Switch>)

  const unauthorizedRoutes = (<Switch>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/register' component={Register}/>
            <Route exact path='/reservations' component={Reservations}/>
            <Route exact path='/hotels' component={Hotels}/>
            <Route exact path='/top10destinations' component={Top10Destinations}/> 
  </Switch>)


  return (
    <>
    <div style={{backgroundColor: "rgb(249, 249, 249)"}}>
        <Header />
        <div className='body-wrapper' >
          {(localStorage.getItem("role") !== "ROLE_ADMIN" && localStorage.getItem("role") !== "ROLE_CLIENT") ? unauthorizedRoutes : (localStorage.getItem("role") === "ROLE_ADMIN") ? adminRoutes : clientRoutes}
        </div>
        {/* <Footer />  */}
    </div>
    </>
  );
}

export default App;
