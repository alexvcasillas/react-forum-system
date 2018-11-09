import React, { Component } from 'react';
import styled from 'styled-components';
import Textarea from 'react-textarea-autosize';
import { Mutation } from 'react-apollo';
import { gql } from 'apollo-boost';

import { scheme } from '../../lib/theme';
import PaperPlaneIcon from '../shared/svg/paper-plane.icon';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const MarkdownInfo = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  font-size: 1.1rem;
  margin-top: 5px;
  color: ${scheme.gray[6]};

  > * {
    margin-left: 5px;
    margin-right: 5px;
  }

  span {
    background-color: ${scheme.gray[2]};
    border-radius: 3px;
    font-family: Courier, Monaco, monospace;
  }
`;

const AuthorPicture = styled.div`
  width: 40px;
  min-width: 40px;
  height: 40px;
  min-height: 40px;
  border-radius: 50%;
  background-color: ${scheme.gray[3]};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: url(${props => props.picture});
  margin-right: 20px;
`;

const Input = styled(Textarea)`
  width: 100%;
  min-height: 37px;
  border: none;
  outline: 0;
  box-shadow: none;
  background-color: ${scheme.gray[2]};
  padding: 10px;
  border-radius: 5px;
  font-size: 1.4rem;
  color: ${scheme.gray[8]};
  resize: none;

  &::placeholder {
    color: ${scheme.gray[6]};
  }
`;

const SendButton = styled.button`
  width: 40px;
  min-width: 40px;
  height: 40px;
  min-height: 40px;
  border-radius: 50%;
  background-color: ${scheme.white};
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  outline: none;
  box-shadow: none;
  margin-left: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: ${scheme.gray[2]};
  }

  &:active {
    background-color: ${scheme.gray[4]};
    transition: none;
  }
`;

const CREATE_REPLY_MUTATION = gql`
  mutation CREATE_REPLY_MUTATION($content: String!, $thread: String!) {
    createReply(content: $content, thread: $thread) {
      id
      content
      createdAt
      updatedAt
      author {
        id
        username
        name
        lastName
        avatar
      }
    }
  }
`;

export default class ReplyInputs extends Component {
  state = { content: '' };

  handleChange = value => {
    this.setState({ content: value });
  };

  handleEnterPress = (e, createReply) => {
    if (e.keyCode === 13 && e.shiftKey) {
      e.preventDefault();
      return this.sendReply(createReply);
    }
  };

  sendReply = async createReply => {
    if (this.state.content === '') return;
    let mutationResult;
    try {
      mutationResult = await createReply();
    } catch (mutationError) {
      console.warn('Mutation Error: ', mutationError);
    }
    const {
      data: { createReply: reply },
    } = mutationResult;
    const { addReplyToList } = this.props;
    addReplyToList(reply);
    this.setState({ content: '' });
  };

  render() {
    const { content } = this.state;
    const { author, thread } = this.props;
    return (
      <Mutation mutation={CREATE_REPLY_MUTATION} variables={{ content, thread: thread }}>
        {(createReply, { error, loading, data }) => (
          <Wrapper>
            <Row>
              <AuthorPicture picture={author.avatar} />
              <Input
                value={content}
                maxRows={10}
                onChange={e => this.handleChange(e.target.value)}
                onKeyUp={e => this.handleEnterPress(e, createReply)}
                onKeyDown={e => {
                  if (e.keyCode === 13 && e.shiftKey) e.preventDefault();
                }}
                placeholder="Reply to this thread ..."
              />
              <SendButton onClick={() => this.sendReply(createReply)}>
                <PaperPlaneIcon />
              </SendButton>
            </Row>
            <Row>
              <MarkdownInfo>
                <strong>**bold**</strong> <i>_italic_</i> <span>`code`</span> <span>```code block```</span>
              </MarkdownInfo>
            </Row>
          </Wrapper>
        )}
      </Mutation>
    );
  }
}
