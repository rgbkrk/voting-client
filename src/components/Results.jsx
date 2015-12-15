import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import ImmutablePropTypes from 'react-immutable-proptypes';

export const VOTE_WIDTH_PERCENT = 8;

export default React.createClass({
  displayName: 'Results',
  propTypes: {
    pair: ImmutablePropTypes.list,
    tally: React.PropTypes.any,
  },
  mixins: [PureRenderMixin],
  getPair() {
    return this.props.pair || [];
  },
  getVotes(entry) {
    if (this.props.tally && this.props.tally.has(entry)) {
      return this.props.tally.get(entry);
    }
    return 0;
  },
  getVotesBlockWidth(entry) {
    return (this.getVotes(entry) * VOTE_WIDTH_PERCENT) + '%';
  },
  render() {
    return <div className='results'>
      {this.getPair().map(entry =>
        <div key={entry} className='entry'>
          <h1>{entry}</h1>
          <div className='voteCount'>
            {this.getVotes(entry)}
          </div>
        </div>
      )}
    </div>;
  },
});
