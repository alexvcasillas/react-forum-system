import React from 'react';
import styled, { keyframes } from 'styled-components';
import Link from 'next/link';
import { Mutation } from 'react-apollo';
import { gql } from 'apollo-boost';
import Router from 'next/router';

import Auth from '../shared/auth/auth.component';

import { scheme } from '../../lib/theme';

const Navigation = styled.nav`
  grid-area: navigation;
  width: 100%;
  background-color: ${scheme.gray[8]};
  display: flex;
  flex-direction: row;
  align-items: stretch;
  padding: 0 40px;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.08);
  z-index: 20;
`;

const StickyNav = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
`;

const RotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(180deg);
  }
`;

const NavMeta = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 20px;
`;

const AppLogo = styled.div`
  /* text-align: center; */
  /* margin-top: 30px; */

  img {
    animation: ${RotateAnimation} 10s linear infinite;
  }
`;

const AppInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

const AppTitle = styled.h1`
  font-size: 1.4rem;
  text-transform: uppercase;
  font-weight: 400;
  color: ${scheme.gray[1]};
  margin: 0;
  span {
    font-weight: 700;
    color: ${scheme.gray[2]};
  }
`;

const AppSubtitle = styled.h2`
  margin: 0;
  padding: 0;
  font-weight: 400;
  font-size: 1.4rem;
  color: ${scheme.gray[3]};
`;

const NavSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: flex-start;
  flex: 1;
`;

const NavElement = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: flex-start;

  a {
    text-decoration: none;
    outline: none;
    color: ${scheme.gray[2]};
    cursor: pointer;
    display: flex;
    flex-direction: row;
    transition: all 0.3s ease-in-out;
    background-color: ${scheme.gray[8]};
    text-transform: uppercase;
    font-size: 1.3rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 0 20px;

    &:hover  {
      color: ${scheme.gray[1]};
      background-color: ${scheme.gray[7]};
    }

    span {
      color: ${scheme.gray[4]};
      text-transform: none;
    }
  }
`;

const NavAuth = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: flex-end;
  justify-self: flex-end;
  flex: 1;
`;

const LOGOUT_MUTATION = gql`
  mutation LOGOUT_MUTATION {
    logout
  }
`;

async function handleSignout(signout) {
  const {
    data: { logout },
  } = await signout();
  if (logout) {
    window.location.reload();
  }
}

export default () => (
  <Auth>
    {({ data: { auth } }) => (
      <Navigation>
        <NavMeta>
          <AppLogo>
            <img
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"
              alt=""
              height="40"
            />
          </AppLogo>
          <AppInfo>
            <AppTitle>
              <span>Reactive</span> Community
            </AppTitle>
            <AppSubtitle>Online Communities</AppSubtitle>
          </AppInfo>
        </NavMeta>
        <NavSection>
          <NavElement>
            <Link href="/">
              <a className="active">
                Dashboard
                <span>What's new</span>
              </a>
            </Link>
          </NavElement>
          {auth && (
            <NavElement>
              <Link href="/">
                <a>
                  Messages
                  <span>Your inbox</span>
                </a>
              </Link>
            </NavElement>
          )}
          <NavElement>
            <Link href="/">
              <a>
                Explore
                <span>Discover communities</span>
              </a>
            </Link>
          </NavElement>
        </NavSection>
        <NavAuth>
          {!auth ? (
            <>
              <NavElement>
                <Link href="/authenticate">
                  <a>Sign In / Sign Up</a>
                </Link>
              </NavElement>
            </>
          ) : (
            <Mutation mutation={LOGOUT_MUTATION}>
              {(signout, { error, loading, data }) => {
                return (
                  <NavElement onClick={() => handleSignout(signout)}>
                    <a>Sign out</a>
                  </NavElement>
                );
              }}
            </Mutation>
          )}
        </NavAuth>
      </Navigation>
    )}
  </Auth>
);
