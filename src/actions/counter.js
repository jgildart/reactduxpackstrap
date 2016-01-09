var types = require('../constants/action-types');

module.exports = {
  incrementCounter: () => ({
    type: types.INCREMENT_COUNTER
  }),
  decrementCounter: () => ({
    type: types.DECREMENT_COUNTER
  })
};
