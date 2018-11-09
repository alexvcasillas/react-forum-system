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
  background-color: ${scheme.white};
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.08);
  z-index: 20;
`;

const StickyNav = styled.div`
  position: sticky;
  top: 0;
`;

const RotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(180deg);
  }
`;

const AppLogo = styled.div`
  text-align: center;
  margin-top: 30px;

  img {
    animation: ${RotateAnimation} 10s linear infinite;
  }
`;

const AppTitle = styled.h1`
  font-size: 1.4rem;
  text-transform: uppercase;
  font-weight: 400;
  color: ${scheme.gray[6]};
  text-align: center;
  margin: 0;
  span {
    font-weight: 700;
    color: ${scheme.gray[8]};
  }
`;

const AppSubtitle = styled.h2`
  margin: 0;
  padding: 0;
  font-weight: 400;
  font-size: 1.4rem;
  color: ${scheme.gray[6]};
  text-align: center;
  margin-bottom: 40px;
`;

const NavSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const NavSectionTitle = styled.div`
  font-weight: 500;
  color: ${scheme.gray[7]};
  margin: 10px 0;
  padding-left: 30px;
`;

const NavElement = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: 1;

  a {
    text-decoration: none;
    outline: none;
    color: ${scheme.gray[7]};
    cursor: pointer;
    width: 100%;
    display: flex;
    flex-direction: row;
    transition: all 0.3s ease-in-out;
    padding: 10px 10px 10px 30px;
    background-color: ${scheme.white};
    text-transform: uppercase;
    font-size: 1.3rem;
    display: flex;
    flex-direction: column;

    &:hover  {
      color: ${scheme.gray[8]};
      background-color: ${scheme.gray[1]};
    }

    span {
      color: ${scheme.gray[6]};
      text-transform: none;
    }
  }
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
        <StickyNav>
          <AppLogo>
            <img
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"
              alt=""
              height="60"
            />
          </AppLogo>
          <AppTitle>
            <span>React</span> FS
          </AppTitle>
          <AppSubtitle>Online Communities</AppSubtitle>
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
            <NavSectionTitle>Authentication</NavSectionTitle>
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
          </NavSection>
        </StickyNav>
      </Navigation>
    )}
  </Auth>
);
