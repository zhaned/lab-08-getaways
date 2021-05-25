import React from 'react';
import Getaways from '../../containers/Getaways';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../header/Header';
import PlaceDetail from '../../components/places/PlaceDetail';
import Register from '../user/Register';
import Login from '../user/Login';
import Logout from '../user/Logout';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path='/getaways' component={Getaways} />
        <Route exact path='/getaways/:id' component={PlaceDetail} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/logout' component={Logout} />
      </Switch>
    </BrowserRouter>
  )
}
