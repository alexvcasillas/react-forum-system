import React, { Component } from 'react';
import styled from 'styled-components';
import { gql } from 'apollo-boost';
import { Query, Mutation } from 'react-apollo';

import { QueryStringConsumer } from '../../lib/query.context';
import { scheme } from '../../lib/theme';

import Writter from './writter.component';
import Preview from './preview.component';

import PenIcon from '../shared/svg/pen.icon';

const Wrapper = styled.div`
  grid-area: editor;
  display: grid;
  grid-template-areas: 'header header' 'writter preview';
  grid-template-columns: 50% 50%;
  grid-template-rows: 60px auto;
`;

const Header = styled.div`
  position: sticky;
  top: 0;
  grid-area: header;
  padding: 0 20px;
  display: flex;
  align-items: center;
  background-color: ${scheme.white};
  box-shadow: 0px 5px 5px 0 rgba(0, 0, 0, 0.08);
  z-index: 10;
`;

const Title = styled.div`
  flex: 1;
  text-transform: uppercase;
  font-size: 1.3rem;
  color: ${scheme.gray[6]};

  span {
    font-weight: 600;
    color: ${scheme.gray[8]};
  }
`;

const Publish = styled.button`
  border: 0;
  outline: none;
  box-shadow: none;
  background-color: ${scheme.gray[8]};
  padding: 10px 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${scheme.white};
  text-transform: uppercase;
  font-size: 1.3rem;
  border-radius: 5px;
  cursor: pointer;

  &:active {
    background-color: ${scheme.gray[9]};
  }

  span {
    margin-right: 5px;
  }
`;

const COMMUNITY_NAME_QUERY = gql`
  query COMMUNITY_NAME_QUERY($community: String!) {
    community(id: $community) {
      name
    }
  }
`;

const CREATE_THREAD_MUTATION = gql`
  mutation CREATE_THREAD_MUTATION($community: String!, $title: String!, $content: String!) {
    createThread(community: $community, title: $title, content: $content) {
      id
    }
  }
`;

export default class Editor extends Component {
  state = { title: '', content: '' };
  setTitle = title => this.setState({ title });
  setContent = content => this.setState({ content });
  render() {
    const { title, content } = this.state;
    return (
      <Wrapper>
        <Header>
          <Query query={COMMUNITY_NAME_QUERY} variables={{ community: this.props.community }}>
            {({ loading, error, data: { community } }) => {
              if (error) return 'Error loading community name';
              if (loading) return 'Loading...';
              return (
                <Title>
                  New thread on <span>{community.name}</span> community
                </Title>
              );
            }}
          </Query>
          <Mutation
            mutation={CREATE_THREAD_MUTATION}
            variables={{ community: this.props.community, title: title, content: content }}
          >
            {(createThread, { loading, error }) => {
              if (error) return <div>An error ocurred while creating the thread</div>;
              if (loading) {
                <Publish onClick={createThread} disabled>
                  <span>Creating thread</span>
                  <PenIcon fill={scheme.white} />
                </Publish>;
              }
              return (
                <Publish onClick={createThread}>
                  <span>Publish thread</span>
                  <PenIcon fill={scheme.white} />
                </Publish>
              );
            }}
          </Mutation>
        </Header>
        <Writter title={title} content={content} onChangeTitle={this.setTitle} onChangeContent={this.setContent} />
        <Preview title={title} content={content} />
      </Wrapper>
    );
  }
}
