import React from 'react'
import PropTypes from 'prop-types'

import { H3, Row, Column, PrettyJson } from 'ui/atoms'

const ItemWrapper = Row.extend`
  justify-content: space-between;
`

export const TasksItem = ({ task }) => (
  <Column grow={1}>
    <ItemWrapper>
      <Column><img src={task.image_path} width={320} alt="avatar"/></Column>
      <Column>{task.username}</Column>
      <Column>{task.email}</Column>
      <Column>{task.text}</Column>
      <Column>{task.status}</Column>
    </ItemWrapper>
    {/*<PrettyJson data={task}></PrettyJson>*/}
  </Column>
)

TasksItem.propTypes = {
  task: PropTypes.object.isRequired,
}

TasksItem.defaultProps = {
  task: {},
}
