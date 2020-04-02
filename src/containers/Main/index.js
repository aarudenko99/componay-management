import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Profile from '../../components/Profile';
import Dashboard from '../../components/Dashboard';
import Facilities from '../../components/Facilities';
import OrgMap from '../../components/OrgMap';
import Sync from '../../components/Sync';
import Workers from '../../components/Workers';
import { useAuth0 } from '../../react-auth0-spa';
import PrivateRoute from '../PrivateRoute';

const Main = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  return (
    <Switch>
      <Route exact path="/">
        { isAuthenticated ? <Dashboard /> : loginWithRedirect }
      </Route>
      <PrivateRoute path="/facilities" component={Facilities} />
      <PrivateRoute path="/workers" component={Workers} />
      <PrivateRoute path="/map" component={OrgMap} />
      <PrivateRoute path="/sync" component={Sync} />
      <PrivateRoute path="/profile" component={Profile} />
      <Route path="*" render={() => <h1>Not Found</h1>} />
    </Switch>
  );
};

export default Main;
