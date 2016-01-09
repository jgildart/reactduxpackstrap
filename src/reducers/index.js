var { combineReducers } =  require('redux');
var counter = require('./counter');

module.exports = combineReducers({
  counter
});
