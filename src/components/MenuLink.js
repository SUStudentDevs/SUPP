/**
 * MenuLink component
 * @module components/MenuLink
 * @author Basile Pesin
 */
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

/**
 * Link in a navigation menu
 * @extends React.Component
 */
class MenuLink extends React.Component {
  handleClick = () => this.props.onClick(this.props.label)
  /**
   * Rendering method
   */
  render () {
    return (
      <Link className={
        this.props.isActive ? 'active item' : 'item'
      } to={this.props.to} onClick={this.handleClick}>{this.props.label}</Link>
    )
  }
}

MenuLink.propTypes = {
  to: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
}

export default MenuLink
