import React, { Component } from 'react';
import styled from 'styled-components';
import gql from 'apollo-boost';

import { scheme } from '../../lib/theme';

import Reply from './reply.component';

const Wrapper = styled.section`
  margin-top: 20px;
  border-top: 1px solid ${scheme.gray[4]};
`;

export default class Replies extends Component {
  constructor(props) {
    super(props);
    if (props.replies && props.replies.length) {
      this.state = { replies: props.replies };
    } else {
      this.state = { replies: [] };
    }
  }

  addNewReply = reply => {
    this.setState(prevState => {
      return {
        replies: [...prevState.replies, reply],
      };
    });
  };

  render() {
    const { replies } = this.state;
    return (
      <Wrapper>
        {replies &&
          replies.length !== 0 &&
          replies.map(reply => {
            return <Reply key={reply.id} reply={reply} />;
          })}
      </Wrapper>
    );
  }
}
