import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass({
  displayName: 'Results',
  mixins: [PureRenderMixin],
  render() {
    return <div>Hello from results!</div>;
  },
});
