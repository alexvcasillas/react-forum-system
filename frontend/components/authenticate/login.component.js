import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';
import Router from 'next/router';

import { scheme } from '../../lib/theme';

const Wrapper = styled.div`
  width: 400px;
  background-color: ${scheme.white};
  padding: 20px;
  border-radius: 5px;
  margin-right: 10px;
  display: flex;
  flex-direction: column;
`;

const FormTitle = styled.div`
  text-transform: uppercase;
  font-size: 1.3rem;
  font-weight: 600;
  color: ${scheme.gray[8]};
`;

const FormSubtitle = styled.p`
  color: ${scheme.gray[6]};
  margin: 0;
  margin-bottom: 20px;
`;

const FormRow = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
`;

const Label = styled.span`
  color: ${scheme.gray[7]};
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  border: none;
  outline: 0;
  box-shadow: none;
  background-color: ${scheme.gray[2]};
  padding: 10px;
  border-radius: 5px;
  font-size: 1.4rem;
`;

const ErrorField = styled.div`
  padding: 10px;
  border-radius: 5px;
  background-color: ${scheme.red[2]};
  color: ${scheme.gray[8]};
`;

const Button = styled.button`
  border: none;
  outline: none;
  box-shadow: none;
  cursor: pointer;
  background-color: ${scheme.gray[8]};
  padding: 10px 20px;
  color: ${scheme.white};
  font-size: 1.4rem;
  border-radius: 5px;

  &:active {
    background-color: ${scheme.gray[7]};
  }
`;

const SIGNIN_MUTATION = gql`
  mutation SIGNIN_MUTATION($email: String!, $password: String!) {
    authenticate(email: $email, password: $password) {
      id
      email
      password
      username
      avatar
      role
      createdAt
      updatedAt
      token
      accountDisabled
    }
  }
`;

export default class Login extends Component {
  state = { email: '', password: '', error: null };

  handleEmail = email => this.setState({ email });
  handlePassword = password => this.setState({ password });
  handleSignIn = signin => {
    const { email, password } = this.state;
    if (email === '' || password === '') {
      return this.setState({ error: 'Authentication fields must not be empty.' });
    }
    this.setState({ error: null }, async () => {
      const {
        data: { authenticate },
      } = await signin();
      if (authenticate.id) {
        Router.push('/');
      }
    });
  };

  render() {
    const { email, password, error } = this.state;
    return (
      <Mutation mutation={SIGNIN_MUTATION} variables={{ email, password }}>
        {(signin, { error, loading, data }) => {
          return (
            <Wrapper>
              <FormTitle>Login</FormTitle>
              <FormSubtitle>Access to the platform with your data.</FormSubtitle>
              <FormRow>
                <Label>Email</Label>
                <Input type="email" name="login-email" value={email} onChange={e => this.handleEmail(e.target.value)} />
              </FormRow>
              <FormRow>
                <Label>Password</Label>
                <Input
                  type="password"
                  name="login-password"
                  value={password}
                  onChange={e => this.handlePassword(e.target.value)}
                />
              </FormRow>
              {error && (
                <FormRow>
                  <ErrorField>{error}</ErrorField>
                </FormRow>
              )}
              <FormRow>
                <Button onClick={() => this.handleSignIn(signin)} disabled={loading}>
                  {loading ? 'Authenticating...' : 'Log In'}
                </Button>
              </FormRow>
            </Wrapper>
          );
        }}
      </Mutation>
    );
  }
}
