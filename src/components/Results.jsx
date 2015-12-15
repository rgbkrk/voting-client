import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';

import Winner from './Winner';
import Tally from './Tally';

export const VOTE_WIDTH_PERCENT = 8;

export const Results = React.createClass({
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

function mapStateToProps(state) {
  return {
    pair: state.getIn(['vote', 'pair']),
    tally: state.getIn(['vote', 'tally']),
    winner: state.get('winner'),
  };
}

export const ResultsContainer = connect(mapStateToProps)(Results);
