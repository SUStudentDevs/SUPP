/**
 * MainBoard class
 * @module Mainboard/index
 * @author Ulysse Fontaine
 */
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  Container,
  Menu,
  Button
} from 'semantic-ui-react'
import { authTerminate } from '../actions/auth'

/**
 * Main Board once logged in
 * @extends React.Component
 */
class MainBoard extends React.Component {
  /**
   * On logout, dispatch an AUTH_TERMINATE action
   */
  logOut = () => {
    this.props.onLogout()
  }

  /**
   * Rendering method
   */
  render () {
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
    )
  }
}

/**
 * Map application state to props, especially user information
 * @param {object} state - The state of the app
 * @param {object} props - The previous props
 * @return {object} The new props
 */
const mapStateToProps = (state) => {
  return {
    username: state.user.username
  }
}

/**
 * Map dispatching of actions to props functions
 * @param {function} dispatch - The dispatch method
 * @return {object} The new props
 */
const mapDispatchToProps = (dispatch) => {
  return {
    onLogout: () => { dispatch(authTerminate()) }
  }
}

MainBoard.propTypes = {
  onLogout: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainBoard)
