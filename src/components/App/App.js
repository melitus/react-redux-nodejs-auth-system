// The basics
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';

// Action creators and helpers
import { establishCurrentUser } from '../../modules/auth';
import { isServer } from '../../redux/store/store';

import Header from '../commons/Header/Header';
import Routes from '../../routes/routes';

import './App.css';

class App extends Component {
  componentWillMount() {
    if (!isServer) {
     // this.props.establishCurrentUser();
    }
  }

  render() {
    return (
      <div id="app">
        <Header
          isAuthenticated={this.props.isAuthenticated}
          current={this.props.location.pathname}
        />
        <div id="content">
          <Routes />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ establishCurrentUser }, dispatch);

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
