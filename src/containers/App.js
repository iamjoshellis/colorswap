import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as appActions from '../actions';

import Header from '../components/Header';
import Main from '../components/Main';

const App = ({ swatches, actions }) => (
  <div className="app">
    <Header addSwatch={actions.addSwatch} />
    <Main swatches={swatches} actions={actions} />
  </div>
);

const mapStateToProps = state => ({
  swatches: state.swatches,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(appActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
