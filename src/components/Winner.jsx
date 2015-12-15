import React from 'react';

export default React.createClass({
  displayName: 'Winner',
  propTypes: {
    winner: React.PropTypes.string,
  },
  render() {
    return <div className='winner'>
      Winner is {this.props.winner};
    </div>;
  },
});
