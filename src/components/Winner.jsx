import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass({
  displayName: 'Winner',
  propTypes: {
    winner: React.PropTypes.string,
  },
  mixins: [PureRenderMixin],
  render() {
    return <div className='winner'>
      Winner is {this.props.winner}
    </div>;
  },
});
