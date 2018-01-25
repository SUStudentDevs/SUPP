/**
 * App component
 * @module components/index
 * @author Ulysse Fontaine
 */
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

import Login from './Login'
import MainBoard from './MainBoard'

/**
 * App component, choosing which "page" to render
 * @extends React.Component
 */
class App extends React.Component {
  /**
   * Rendering method
   */
  render () {
    return (<Router>
      <Switch>
        <Route path='/login' component={Login} />
        <Route path='/' render={(props) => {
          if (this.props.isLoggedIn) return (<MainBoard />)
          return (<Redirect to={{pathname: '/login', state: { from: '/' }}} />)
        }} />
      </Switch>
    </Router>)
  }
}

/**
 * Map isLoggedIn application state to App component props
 * @param {object} state - The state of the app
 * @param {object} props - The previous props
 * @return {object} the new props
 */
const mapStateToProps = (state, props) => {
  return {
    isLoggedIn: state.auth.isLoggedIn
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
}

export default connect(mapStateToProps)(App)
