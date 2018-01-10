import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Footer, Header } from 'ui'
import scheme from 'scheme'


const navigationItems = [
  { to: '/', title: 'Home' },
  // { to: '/conference', title: 'Conference' },
  // { to: '/signup', title: 'SignUp' },
  // { to: '/signin', title: 'Login' }
]

export const RootWrapper = styled.div `
  display: flex;
  flex-direction: column;
  width: 100%;
`

const PoweredBy = () => (
  <div>
    Powered by&nbsp;
    <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">React</a>
  </div>
)

const Copyright = () => (
  <div>
    Copyright Ⓒ {new Date().getFullYear()} TheRealStart
  </div>
)

// eslint-disable-next-line react/prop-types
const Version = ({ version }) => (
  <div>
    Version: {version}
  </div>
)


export const RootTemplate = ({ children, version = '0.0.0' }) => (
  <RootWrapper>
    <Header profile={scheme.profile} navigationItems={navigationItems}/>
    {children}
    <Footer>
      <PoweredBy/>
      <Copyright/>
      <Version version={version} />
    </Footer>
  </RootWrapper>
)

RootTemplate.propTypes = {
  children: PropTypes.node.isRequired,
  version: PropTypes.string, // eslint-disable-line react/require-default-props
}
