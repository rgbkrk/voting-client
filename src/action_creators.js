export function setState(state) {
  return {
    type: 'SET_STATE',
    state,
  };
}

export function upvote(entry) {
  return {
    type: 'UPVOTE',
    entry,
  };
}
