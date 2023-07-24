import React from "react";
import LandingPage from "./components/LandingPage";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './features/User/Login';
import Signup from './features/User/Signup';
import Dashboard from './features/User/Dashboard';
import NotFound from './components/NotFound';
import { PrivateRoute } from './helpers/PrivateRoute';
export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
        <Router>
          <Switch>
            <Route exact component={LandingPage} path="/" />
            <Route exact component={Login} path="/login" />
            <Route exact component={Signup} path="/signup" />
            <PrivateRoute exact component={Dashboard} path="/dashboard" />
            <Route component={NotFound} />
          </Switch>
        </Router>
    </main>
  );
}
