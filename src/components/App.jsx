import React from 'react';
import { List, Map } from 'immutable';

const pair = List.of('Trainspotting', '28 Days Later');
const tally = new Map({ 'Trainspotting': 5, '28 Days Later': 4 });

export default React.createClass({
  displayName: 'App',
  propTypes: {
    children: React.PropTypes.node,
  },
  render() {
    return React.cloneElement(this.props.children, { pair, tally });
  },
});
