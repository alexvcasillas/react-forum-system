import React, { PureComponent } from 'react';
import styled from 'styled-components';

import Reply from './reply.component';

export default class ReplyList extends PureComponent {
  componentDidUpdate() {
    this.props.scrollDown();
  }
  render() {
    const { replies } = this.props;
    return replies.map(reply => <Reply key={reply.id} reply={reply} />);
  }
}
