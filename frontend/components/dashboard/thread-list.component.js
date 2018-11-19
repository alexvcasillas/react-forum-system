import React, { PureComponent } from 'react';

import Thread from './thread-preview.component';

export default class ThreadList extends PureComponent {
  render() {
    const { threads } = this.props;
    return threads.map(thread => <Thread key={thread.id} thread={thread} />);
  }
}
