import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import ImmutablePropTypes from 'react-immutable-proptypes';

import Winner from './Winner';
import Tally from './Tally';

export const VOTE_WIDTH_PERCENT = 8;

export default React.createClass({
  displayName: 'Results',
  propTypes: {
    next: React.PropTypes.func,
    pair: React.PropTypes.any,
    tally: React.PropTypes.any,
    winner: React.PropTypes.string,
  },
  mixins: [PureRenderMixin],
  render() {
    return this.props.winner ?
    <Winner ref='winner' winner={this.props.winner} /> :
    <div className='results'>
      <Tally {...this.props} />
      <div className='management'>
        <button ref='next'
                className='next'
                onClick={this.props.next}>
          Next
        </button>
      </div>
    </div>;
  },
});
