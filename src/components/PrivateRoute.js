import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = (props) => {
  const { condition, component: Component, redirect: pathname, ...rest } = props

  return (
    <Route
      {...rest}
      render={
        props => condition
          ? <Component {...props} />
          : <Redirect to={{ pathname, state: {from: props.location} }} />
      }
    />
  )
}

PrivateRoute.propTypes = {
  location: PropTypes.object,
  redirect: PropTypes.string.isRequired,
  condition: PropTypes.oneOfType([
    PropTypes.bool.isRequired,
    PropTypes.func.isRequired
  ]),
  component: PropTypes.func
}

export default PrivateRoute
