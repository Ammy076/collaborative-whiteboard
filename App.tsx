// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Whiteboard from './components/Whiteboard';
import PrivateRoute from './components/PrivateRoute';
import SessionManager from './components/SessionManager';
import SaveButton from './components/SaveButton';
import { initKeycloak } from './services/KeycloakService';

const App: React.FC = () => {
  React.useEffect(() => {
    initKeycloak(() => {});
  }, []);

  return (
    <Router>
      <Switch>
        <PrivateRoute exact path="/" component={SessionManager} />
        <PrivateRoute path="/whiteboard/:sessionId" component={Whiteboard} />
        <Route path="/login" component={() => <div>Login Page</div>} />
      </Switch>
      <SaveButton />
    </Router>
  );
};

export default App;
