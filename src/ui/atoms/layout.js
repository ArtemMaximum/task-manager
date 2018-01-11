import PropTypes from 'prop-types'
import styled from 'styled-components'


export const Column = styled.div`
  display: flex;
  flex-direction: column;
  ${p => p.grow && `flex-grow: ${p.grow};`}
`
Column.propTypes = {
  grow: PropTypes.number,
}

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`
