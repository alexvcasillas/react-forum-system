import React, { useState, useEffect } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';

const Register = styled.div`
  width: 400px;
  background-color: ${({ theme }) => theme.scheme.white};
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
  color: ${({ theme }) => theme.scheme.gray[8]};
`;

const FormSubtitle = styled.p`
  color: ${({ theme }) => theme.scheme.gray[6]};
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
  color: ${({ theme }) => theme.scheme.gray[7]};
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  border: none;
  outline: 0;
  box-shadow: none;
  background-color: ${({ theme }) => theme.scheme.gray[2]};
  padding: 10px;
  border-radius: 5px;
  font-size: 1.4rem;
`;

const Button = styled.button`
  border: none;
  outline: none;
  box-shadow: none;
  cursor: pointer;
  background-color: ${({ theme }) => theme.scheme.gray[8]};
  padding: 10px 20px;
  color: ${({ theme }) => theme.scheme.white};
  font-size: 1.4rem;
  border-radius: 5px;

  &:active {
    background-color: ${({ theme }) => theme.scheme.gray[7]};
  }
`;

const SIGNUP_MUTATION = gql`
  mutation SIGNUP_MUTATION($email: String!, $username: String!, $password: String!) {
    createUser(email: $email, username: $username, password: $password) {
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

export default () => {
  const [email, setEmail] = useInput('');
  const [username, setUsername] = useInput('');
  const [password, setPassword] = useInput('');
  return (
    <Mutation mutation={SIGNUP_MUTATION} variables={{ email, username, password }}>
      {(signup, { error, loading }) => {
        return (
          <Register>
            <FormTitle>Register</FormTitle>
            <FormSubtitle>Create a new account into the platform.</FormSubtitle>
            <FormRow>
              <Label>Email</Label>
              <Input type="text" name="register-email" value={email} onChange={e => setEmail(e.target.value)} />
            </FormRow>
            <FormRow>
              <Label>Username</Label>
              <Input
                type="text"
                name="register-username"
                value={username}
                onChange={e => setUsername(e.target.value)}
              />
            </FormRow>
            <FormRow>
              <Label>Password</Label>
              <Input
                type="password"
                name="register-password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </FormRow>
            <FormRow>
              <Button onClick={signup}>Log in</Button>
            </FormRow>
          </Register>
        );
      }}
    </Mutation>
  );
};

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  return [value, setValue];
}
