import React from 'react';

const { Provider, Consumer } = React.createContext();

export const QueryStringProvider = props => {
  return <Provider value={props.queryString}>{props.children}</Provider>;
};

export const QueryStringConsumer = props => {
  return <Consumer>{value => props.children(value)}</Consumer>;
};
