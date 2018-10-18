import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// import DashboardAsync from './views/dashboard/dashboard.async';
// import ClientsAsync from './views/clients/clients.async';
// import WorkshopsAsync from './views/workshops/workshops.async';
// import EmployeesAsync from './views/employees/employees.async';
import AuthenticationAsync from './views/authentication/authentication.async';
import NotFound from './views/not-found/not-found.view';

class Navigation extends Component {
  render() {
    const { auth } = this.props;
    return auth.hasOwnProperty('id') && auth.id ? (
      <Router>
        <Switch>
          {/* <Route path="/" exact component={DashboardAsync} />
          <Route path="/clients" component={ClientsAsync} />
          <Route path="/employees" component={EmployeesAsync} />
          <Route path="/workshops" component={WorkshopsAsync} /> */}
          <Route component={NotFound} />
        </Switch>
      </Router>
    ) : (
      <AuthenticationAsync />
    );
  }
}

export default Navigation;
