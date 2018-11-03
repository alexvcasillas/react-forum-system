import React from 'react';
import styled, { keyframes } from 'styled-components';
import Link from 'next/link';

import Auth from '../auth/auth.component';

const Navigation = styled.nav`
  grid-area: navigation;
  background-color: ${({ theme }) => theme.scheme.white};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.08);
  z-index: 10;
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
  color: ${({ theme }) => theme.scheme.gray[6]};
  text-align: center;
  margin: 0;
  span {
    font-weight: 700;
    color: ${({ theme }) => theme.scheme.gray[8]};
  }
`;

const AppSubtitle = styled.h2`
  margin: 0;
  padding: 0;
  font-weight: 400;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.scheme.gray[6]};
  text-align: center;
  margin-bottom: 40px;
`;

const NavSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const NavElement = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: 1;

  a {
    text-decoration: none;
    outline: none;
    color: ${({ theme }) => theme.scheme.gray[7]};
    cursor: pointer;
    width: 100%;
    display: flex;
    flex-direction: row;
    transition: all 0.3s ease-in-out;
    padding: 10px 10px 10px 30px;
    background-color: ${({ theme }) => theme.scheme.white};
    text-transform: uppercase;
    font-size: 1.3rem;
    display: flex;
    flex-direction: column;

    &:hover  {
      color: ${({ theme }) => theme.scheme.gray[8]};
      background-color: ${({ theme }) => theme.scheme.gray[1]};
    }

    span {
      color: ${({ theme }) => theme.scheme.gray[6]};
      text-transform: none;
    }
  }
`;

export default () => (
  <>
    <Navigation>
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
              Home
              <span>What's new</span>
            </a>
          </Link>
        </NavElement>
        <NavElement>
          <Link href="/">
            <a>
              Messages
              <span>Your inbox</span>
            </a>
          </Link>
        </NavElement>
        <NavElement>
          <Link href="/">
            <a>
              Explore
              <span>Discover communities</span>
            </a>
          </Link>
        </NavElement>
      </NavSection>
    </Navigation>
  </>
);
