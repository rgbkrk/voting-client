import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';

import Winner from './Winner';
import Vote from './Vote';

const Voting = React.createClass({
  displayName: 'Voting',
  propTypes: {
    winner: React.PropTypes.string,
  },
  mixins: [PureRenderMixin],
  render() {
    return <div>
      {this.props.winner ?
        <Winner ref='winner' winner={this.props.winner} /> :
        <Vote {...this.props} />}
    </div>;
  },
});

function mapStateToProps(state) {
  return {
    pair: state.getIn(['vote', 'pair']),
    winner: state.get('winner'),
  };
}

connect(mapStateToProps)(Voting);

export default Voting;
