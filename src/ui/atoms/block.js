import PropTypes from 'prop-types'
import styled from 'styled-components'
import { themeOr, ifProp } from 'lib/theme'

export const Block = styled.div`
  font-size: 15px;
  background: #ff868680;
  border-bottom: 2px solid #cc0000;
  padding: 20px;
`

Block.propTypes = {
  palette: PropTypes.string,
  reverse: PropTypes.bool
}

Block.defaultProps = {
  palette: 'grayscale'
}
