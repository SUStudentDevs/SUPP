import React from 'react';
import { connect } from 'react-redux';
import HomeAuth from '../HomeAuth';
import MainBoard from '../MainBoard';

class App extends React.Component {
  render = () => {
    if(this.props.isLoggedIn) {
      return <MainBoard/>;
    } else {
      return <HomeAuth/>;
    }
  }
}

const mapStateToProps = (state, props) => {
  return {
    isLoggedIn: state.auth.isLoggedIn
  };
}

export default connect(mapStateToProps)(App);
