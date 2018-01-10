import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import { themeOr } from 'lib/theme'
import { width, mediaMaxWidth } from 'lib/sizes'


const colorPrimary = themeOr(['colors', 'primary'], 'black')
const backgroundColor = themeOr(['backgrounds', 'navigation'], 'rgba(255,255,255,.2)')

const Link = styled(NavLink)`
  display: flex;
  box-sizing: border-box;
  transition: all .26s;
  padding: 11px 0 8px;
  line-height: 18px;

  text-decoration: none;
  color: ${colorPrimary};
  border-bottom: 3px solid transparent;

  &.active {
    border-color: ${colorPrimary};
  }

  & + & {
    margin-left: 40px;
  }

  ${mediaMaxWidth('tablet')} {
    border-bottom: 1px solid #eeeeee;
    padding: 20px;
    background-color: #ffffff;
    font-weight: 500;
    font-size: 16px;

    &.active {
      background-color: ${colorPrimary};
      color: white;
    }

    & + & {
      margin-left: 0;
    }
  }
`

const NavPanelContainer = styled.div`
  display: flex;
  flex-shrink: 0;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  width: 100%;

  height: 2.5em;
  background-color: ${backgroundColor};

  & nav {
    display: flex;
    width: 100%;
    max-width: ${width.laptop}px;
    padding: 0 20px;
  }

  ${mediaMaxWidth('tablet')} {
    flex-direction: column;
    height: auto;

    nav {
      flex-direction: column;
      padding: 0;
    }
  }
`

export const NavigationPanel = ({ items = [] }) => (
  <NavPanelContainer>
    <nav>
      {items.map(item => (
        <Link key={item.to} to={item.to} activeClassName="active" exact>{item.title}</Link>
      ))}
    </nav>
  </NavPanelContainer>
)

/* eslint-disable react/require-default-props */
NavigationPanel.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    to: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })),
}

