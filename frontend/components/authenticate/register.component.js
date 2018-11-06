import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';

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
  };

  handleEmail = email => this.setState({ email });
  handleUsername = username => this.setState({ username });
  handlePassword = password => this.setState({ password });
  handleName = name => this.setState({ name });
  handleLastName = lastName => this.setState({ lastName });

  handleSignup = async signup => {
    await signup();
  };

  render() {
    const { email, username, password, name, lastName } = this.state;
    return (
      <Mutation mutation={SIGNUP_MUTATION} variables={{ email, username, password, name, lastName }}>
        {(signup, { error, loading }) => {
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
              <FormRow>
                <Button onClick={signup}>Create Account</Button>
              </FormRow>
            </Wrapper>
          );
        }}
      </Mutation>
    );
  }
}
