var { INCREMENT_COUNTER, DECREMENT_COUNTER } = require('../constants/action-types')

var initialState = 0;

module.exports = (state, action) => {
  if (state === undefined) {
    return initialState;
  }

  switch (action.type) {
    case INCREMENT_COUNTER:
      return state + 1;
    case DECREMENT_COUNTER:
      return state - 1;
    default:
      state;
  }
};
