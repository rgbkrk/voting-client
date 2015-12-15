import React from 'react';

export default React.createClass({
  displayName: 'App',
  propTypes: {
    children: React.PropTypes.node,
  },
  render() {
    return this.props.children;
  },
});
