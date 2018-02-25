/**
 * Home component
 * @module components/MainBoard
 * @author Ulysse Fontaine
 */
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  Switch,
  Route,
  Link
} from 'react-router-dom'
import {
  Container,
  Grid,
  Menu,
  Button
} from 'semantic-ui-react'
import Home from './Home'
import Grades from './Grades'
import Registration from './Registration'

import { authTerminate } from '../actions/auth'

/**
 * Main Board once logged in
 * @extends React.Component
 */
class MainBoard extends React.Component {
  state = { activeNavItem: 0 }
  handleLinkClick = (index) => {
    this.setState({ activeNavItem: index })
  }

  /**
   * Rendering method
   */
  render () {
    const { activeNavItem } = this.state
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

        <Grid>
          <Grid.Column width={4}>
            <Menu fluid vertical>
              <Menu.Item as={Link} name='Accueil' to='/' active={activeNavItem === 0} onClick={() => this.handleLinkClick(0)} />
              <Menu.Item as={Link} name='Inscriptions Pédagogiques' to='/inscriptions' active={activeNavItem === 1} onClick={() => this.handleLinkClick(1)} />
              <Menu.Item as={Link} name='Notes' to='/notes' active={activeNavItem === 2} onClick={() => this.handleLinkClick(2)} />
            </Menu>
          </Grid.Column>

          <Grid.Column stretched width={12}>
            <Switch>
              <Route path='/inscriptions' component={Registration} />
              <Route path='/notes' component={Grades} />
              <Route path='/' component={Home} />
            </Switch>
          </Grid.Column>
        </Grid>

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
