/* eslint-disable */
import React, { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import "./App.css";
import Login from './pages/login/Login';
import Header from './components/Header/Header';
import Homepage from './pages/homepage/Homepage';
import { UserProvider, useUserUpdate } from './context/UserContext'

export default function App() {

  return (
    <div className="App" >
      <Router>
        <Switch>
          {/* login */}
          <Route path="/login">
            <UserProvider>
              <Login />
            </UserProvider>
          </Route>
          {/* users */}
          <Route path="/users">
          </Route>
          {/* homepage */}
          <Route path="/">
            <UserProvider>
              <Header />
              <Homepage />
            </UserProvider>
          </Route>
          {/*  */}
        </Switch>
      </Router>
    </div>
  );
}

