var React = require('react');
var { connect } = require('react-redux');
var { bindActionCreators } = require('redux');
var counterActions = require('../actions/counter');

require('../../node_modules/bootstrap-less/bootstrap/bootstrap.less');

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>Simple Counter</h1>
        <h2><span className="label label-warning">{ this.props.counter }</span></h2>
        <div className="btn-group">
          <button className="btn btn-primary" onClick={this.props.actions.incrementCounter}>+</button>
          <button className="btn btn-primary" onClick={this.props.actions.decrementCounter}>-</button>
        </div>
      </div>
    );
  }
}

var mapStateToProps = state => state;

var mapDispatchToActions = dispatch => ({
  actions: bindActionCreators(counterActions, dispatch)
});

module.exports = connect(mapStateToProps, mapDispatchToActions)(App);
