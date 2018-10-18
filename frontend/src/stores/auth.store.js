import { types } from 'cratebox';

export const AuthStore = {
  identifier: 'auth',
  model: {
    identifier: types.optional(types.string, '123134124'),
    id: types.string,
    name: types.string,
    lastName: types.string,
    email: types.string,
    password: types.string,
    avatar: types.string,
    role: types.enum(['ADMIN', 'CLIENT']),
    createdAt: types.string,
    updatedAt: types.string,
    token: types.string,
    accountDisabled: types.boolean,
  },
};

export const resetAuthStore = () => ({
  identifier: null,
  id: null,
  name: null,
  lastName: null,
  email: null,
  password: null,
  avatar: null,
  role: 'CLIENT',
  createdAt: null,
  updatedAt: null,
  token: null,
  accountDisabled: null,
});
