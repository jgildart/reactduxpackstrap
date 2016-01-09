var React = require('react');
var { render } = require('react-dom');
var { Provider } = require('react-redux');
var { createStore } = require('redux');

var App = require('./src/components/app');

var rootReducer = require('./src/reducers');
var store = createStore(rootReducer);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('appContainer')
);
