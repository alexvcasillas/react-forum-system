import React from 'react';
import Loadable from 'react-loadable';
import Loading from '../shared/loading/loading.component';

const LoadableComponent = Loadable({
  loader: () => import(/* webpackChunkName: "authentication" */ './authentication.view'),
  loading: () => <Loading />,
});

export default LoadableComponent;
