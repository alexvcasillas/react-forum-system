import React, { PureComponent } from 'react';
import styled from 'styled-components';

import Reply from './reply.component';

export default class ReplyList extends React.Component {
  componentDidUpdate(prevProp, prevState) {
    if (prevProp.thread !== this.props.thread) return this.props.scrollTop();
    if (prevProp.replies.length !== this.props.replies.length) return this.props.scrollDown();
  }

  render() {
    const { replies } = this.props;
    return replies.map(reply => <Reply key={reply.id} reply={reply} />);
  }
}
