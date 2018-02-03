/**
 * @file Entry point
 * @author Ulysse Fontaine
 */
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'
import App from './components'

const ROOT_NODE = document.getElementById('root')
let store = createStore(reducers, applyMiddleware(thunk))

/**
 * Main container, holding the store and the App component
 * @extends React.Component
 */
class Main extends React.Component {
  /**
   * Rendering method
   */
  render () {
    return (
      <Provider store={store}>
        <Router>
          <Route path='/' component={App} />
        </Router>
      </Provider>
    )
  }
}

render(<Main />, ROOT_NODE)
