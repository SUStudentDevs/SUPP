/**
 * App class
 * @module App/index
 * @author Ulysse Fontaine
 */
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import HomeAuth from '../components/HomeAuth'
import MainBoard from '../components/MainBoard'

/**
 * App container, choosing which "page" to render
 * @extends React.Component
 */
class App extends React.Component {
  /**
   * Rendering method
   */
  render () {
    if (this.props.isLoggedIn) {
      return <MainBoard />
    }

    return <HomeAuth />
  }
}

/**
 * Map isLoggedIn application state to props
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
