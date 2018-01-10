import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'


export const NavigationItem = styled(NavLink)`
  display: inline-block;
  font-size: 1em;
  font-family: Verdana;
  margin: .4em;

  &.active {
    text-transform: uppercase;
  }
`

const NavigationOrganism = ({ items, className }) => (
  <nav className={className}>
    {items.map(item => (
      <NavigationItem to={item.to} key={item.to} exact activeClassName="active">
        {item.title}
      </NavigationItem>
    ))}
  </nav>
)
NavigationOrganism.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    to: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })),
  className: PropTypes.string.isRequired,
}
NavigationOrganism.defaultProps = {
  items: [],
}

export const Navigation = styled(NavigationOrganism)`
  display: flex;
  flex-direction: row;
`
