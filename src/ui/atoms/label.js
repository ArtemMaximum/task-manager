import PropTypes from 'prop-types'
import styled from 'styled-components'
import { themeOr } from 'lib/theme'

export const Label = styled.label`
  font-family: ${themeOr('font', 'primary')};
  font-size: 1rem;
  line-height: 2em;
`

Label.propTypes = {
    reverse: PropTypes.bool
}