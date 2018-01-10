import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { themeOr } from 'lib/theme'
import { width, mediaMaxWidth, mediaMaxHeight } from 'lib/sizes'


const color = themeOr(['colors', 'footer'], 'black')

const FooterOrganism = styled.section`
  display: flex;
  padding: 40px 0;
  margin-top: 20px;
  background: #333333;
  flex-direction: column;
  align-items: center;
  color: ${color};
  bottom: 0;
  position: absolute;
  width: 100%;

  & footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    max-width: ${width.laptop}px;
    width: 100%;
  }

  & a {
    color: ${color};
    text-decoration: none;
    border-bottom: 1px dashed ${color};
  }

  & a:hover {
    border-color: transparent;
    color: white;
  }

  ${mediaMaxWidth('laptop')} {
    & footer {
      flex-direction: column;
    }
    & footer > div {
      margin: 10px 0;
      text-align: center;
    }
  }

  ${mediaMaxHeight('mobileLandscape')} {
    padding: 20px 0;
  }
`

export const Footer = ({ children }) => (
  <FooterOrganism>
    <footer>
      {children}
    </footer>
  </FooterOrganism>
)

Footer.propTypes = {
  children: PropTypes.node.isRequired,
}
