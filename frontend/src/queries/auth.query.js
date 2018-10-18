import { GraphQLService } from '../services/graphql.service';

export const authQuery = (email, password) =>
  GraphQLService.graph(`
{
  authenticate(email:"${email}", password:"${password}") {
    id
    email
    name
    lastName
    password
    role
    createdAt
    updatedAt
    token
    accountDisabled
  }
}
`);

export const authUser = id =>
  GraphQLService.graph(`
{
  user(id: "${id}") {
    id
    email
    name
    lastName
    role
    createdAt
    updatedAt
    token
    accountDisabled
  }
}
`);
