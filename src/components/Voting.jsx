import React from 'react';

export default React.createClass({
  displayName: 'Voting',
  propTypes: {
    pair: React.PropTypes.array,
  },
  getPair() {
    return this.props.pair || [];
  },
  render() {
    return <div className='voting'>
      { this.getPair().map(entry =>
        <button key={entry}>
          <h1>{entry}</h1>
        </button>
      )}
    </div>;
  },
});
