import React from 'react';
import { connect } from 'react-redux';
import {
  Container,
  Menu,
  Button
} from 'semantic-ui-react';
import { authTerminate } from '../actions/auth'

class MainBoard extends React.Component {
  
  logOut = () => {
    this.props.onLogout();
  }

  render = () => {
    return (
      <Container>
        <Menu>
          <Menu.Menu position='left'>
            <Menu.Item>
              <p>Bonjour <b>{this.props.username}</b></p>
            </Menu.Item>
          </Menu.Menu>
          <Menu.Menu position='right'>
            <Menu.Item>
              <Button primary onClick={this.logOut}>Déconnexion</Button>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </Container>
    ); 
  }
}

const mapStateToProps = (state, props) => {
  return {
    isLogged: state.auth.isLoggedIn,
    username: state.auth.user.username
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLogout: () => { dispatch(authTerminate()) }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainBoard);
