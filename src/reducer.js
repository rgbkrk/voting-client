import { Map, List } from 'immutable';

function setState(state, newState) {
  return state.merge(newState);
}

function upvote(state, entry) {
  const currentPair = state.getIn(['vote', 'pair']);
  if (currentPair && currentPair.includes(entry)) {
    return state.set('hasVoted', entry);
  }
  return state;
}

function resetVote(state) {
  const hasVoted = state.get('hasVoted');
  const currentPair = state.getIn(['vote', 'pair'], new List());
  if (hasVoted && !currentPair.includes(hasVoted)) {
    return state.remove('hasVoted');
  }
  return state;
}

export default function(state = new Map(), action) {
  switch (action.type) {
  case 'SET_STATE':
    return resetVote(setState(state, action.state));
  case 'UPVOTE':
    return upvote(state, action.entry);
  }
  return state;
}
