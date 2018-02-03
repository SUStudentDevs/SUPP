/**
 * Home component
 * @module components/MainBoard
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
  state = { activeNavItem: 'Accueil' }
  handleLinkClick = (index) => {
    this.setState({ activeNavItem: index })
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
              <Button primary onClick={this.props.onLogout}>Déconnexion</Button>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </Container>
    )
  }
}

/**
 * Map application state (user data) to MainBoard component props
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
 * Map dispatching of actions to MainBoard component methods
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
