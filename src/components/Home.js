/**
 * Home Component
 * @module components/Home
 * @author Basile Pesin
 */

import React from 'react'
import {
  Segment
} from 'semantic-ui-react'

/**
 * Home page : displays first when logged in, and displays informations about the user
 * @extends React.Component
 */
class Home extends React.Component {
  /**
   * Rendering method
   */
  render () {
    return (
      <Segment>
        Un bien joli accueil !
      </Segment>
    )
  }
}

export default Home
