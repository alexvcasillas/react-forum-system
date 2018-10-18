import React, { Component } from 'react';
import { createContext, Consumer } from 'cratebox-react';

import { GraphQLService } from './services/graphql.service';
import { authUser } from './queries/auth.query';

import Navigation from './Navigation';
import Authenticating from './views/authenticating/authenticating.view';

import { cratebox } from './stores/cratebox.store';
const { Provider } = createContext(cratebox);

const { client: GraphQLClient, graphQLErrorHandler } = GraphQLService;

class App extends Component {
  constructor(props) {
    super(props);
    const storageData = localStorage.getItem('@rfs:auth') || null;
    if (storageData) {
      this.authData = JSON.parse(storageData);
      this.state = { tokenAuthentication: true };
    } else {
      this.state = { tokenAuthentication: false };
    }
  }

  async componentDidMount() {
    if (this.authData) {
      let authQueryResult;
      try {
        authQueryResult = await GraphQLClient.query({ query: authUser(this.authData.id) });
      } catch (authError) {
        console.warn('Auth Error: ', graphQLErrorHandler(authError));
      }
      const {
        data: { user: authData },
      } = authQueryResult;
      cratebox.dispatch({
        identifier: 'auth',
        model: authData,
      });
      this.setState({ tokenAuthentication: false });
    }
  }

  render() {
    const { tokenAuthentication } = this.state;
    return (
      <Provider cratebox={cratebox}>
        {tokenAuthentication ? (
          <Consumer store="auth">
            <Authenticating />
          </Consumer>
        ) : (
          <Consumer store="auth">
            <Navigation />
          </Consumer>
        )}
      </Provider>
    );
  }
}

export default App;
