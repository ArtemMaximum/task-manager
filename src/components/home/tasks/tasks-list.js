import React from 'react'
import PropTypes from 'prop-types'

import { mediaMaxWidth } from 'lib/sizes'
import { Row, PrettyJson } from 'ui/atoms'



const ListWrapper = Row.extend`
  justify-content: space-between;

  ${mediaMaxWidth('tablet')} {
    flex-direction: column;
  }
`

export const TasksList = ({ tasks }) => (
  <ListWrapper>
    <ReactTable
      data={tasks}
      columns={columns}
    />
  </ListWrapper>
)

TasksList.propTypes = {
  tasks: PropTypes.array, // eslint-disable-line react/forbid-prop-types
}

TasksList.defaultProps = {
  tasks: [],
}
