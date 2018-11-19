import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import styled, { keyframes } from 'styled-components';

import { scheme } from '../../lib/theme';
import { graphQLErrorHandler } from '../../lib/graphql.utils';

const errorFieldAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

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

const ErrorField = styled.div`
  padding: 10px;
  border-radius: 5px;
  background-color: ${scheme.red[2]};
  color: ${scheme.gray[8]};
  animation: ${errorFieldAnimation} 0.5s linear;
`;

const SIGNUP_MUTATION = gql`
  mutation SIGNUP_MUTATION(
    $email: String!
    $username: String!
    $password: String!
    $name: String!
    $lastName: String!
  ) {
    createUser(email: $email, username: $username, password: $password, name: $name, lastName: $lastName) {
      id
      email
      password
      username
      name
      lastName
      avatar
      role
      createdAt
      updatedAt
      token
      accountDisabled
    }
  }
`;

export default class Register extends Component {
  state = {
    email: '',
    username: '',
    password: '',
    name: '',
    lastName: '',
    error: null,
  };

  handleEmail = email => this.setState({ email });
  handleUsername = username => this.setState({ username });
  handlePassword = password => this.setState({ password });
  handleName = name => this.setState({ name });
  handleLastName = lastName => this.setState({ lastName });

  handleSignup = signup => {
    const { email, username, password, name, lastName } = this.state;
    if (email === '' || username === '' || password === '' || name === '' || lastName === '') {
      return this.setState({ error: `Fields must not be empty` });
    }
    this.setState({ error: null }, async () => {
      let mutationResult;
      try {
        mutationResult = await signup();
      } catch (mutationError) {
        const error = graphQLErrorHandler(mutationError);
        console.warn({ error });
        return this.setState({ error: error.message });
      }
      const {
        data: { createUser: user },
      } = mutationResult;
      if (user.id) {
        window.location.href = '/';
      }
    });
  };

  render() {
    const { email, username, password, name, lastName, error } = this.state;
    return (
      <Mutation mutation={SIGNUP_MUTATION} variables={{ email, username, password, name, lastName }}>
        {(signup, { error: mutationError, loading }) => {
          return (
            <Wrapper>
              <FormTitle>Register</FormTitle>
              <FormSubtitle>Create a new account into the platform.</FormSubtitle>
              <FormRow>
                <Label>Email</Label>
                <Input
                  type="text"
                  name="register-email"
                  value={email}
                  onChange={e => this.handleEmail(e.target.value)}
                />
              </FormRow>
              <FormRow>
                <Label>Username</Label>
                <Input
                  type="text"
                  name="register-username"
                  value={username}
                  onChange={e => this.handleUsername(e.target.value)}
                />
              </FormRow>
              <FormRow>
                <Label>Password</Label>
                <Input
                  type="password"
                  name="register-password"
                  value={password}
                  onChange={e => this.handlePassword(e.target.value)}
                />
              </FormRow>
              <FormRow>
                <Label>Name</Label>
                <Input type="text" name="register-name" value={name} onChange={e => this.handleName(e.target.value)} />
              </FormRow>
              <FormRow>
                <Label>Last name</Label>
                <Input
                  type="text"
                  name="register-last-name"
                  value={lastName}
                  onChange={e => this.handleLastName(e.target.value)}
                />
              </FormRow>
              {error && (
                <FormRow>
                  <ErrorField>{error}</ErrorField>
                </FormRow>
              )}
              <FormRow>
                <Button onClick={() => this.handleSignup(signup)}>Create Account</Button>
              </FormRow>
            </Wrapper>
          );
        }}
      </Mutation>
    );
  }
}
