import React, { Component } from 'react'
import ReactTable from 'react-table'

import { connect } from 'react-redux'
import { receiveTasksList } from './actions'
import { Block } from '../../ui/atoms'

import 'react-table/react-table.css'

const TASK_STATUSES = {
  0: { name: 'Active' },
  10: { name: 'Done' }
};

const columns = [{
  id: 'image_path',
  Header: 'Avatar',
  accessor: props => <img src={props.image_path} alt={props.username}/>,
}, {
  Header: 'Name',
  accessor: 'username',
}, {
  Header: 'E-mail',
  accessor: 'email',
}, {
  Header: 'Text',
  accessor: 'text',
}, {
  id: 'status',
  Header: 'Status',
  accessor: props => TASK_STATUSES[props.status].name
}]

class HomeContainer extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    
    dispatch(receiveTasksList())
  }
  
  render() {
    const { dispatch, isFetching, tasksList, errorMessage, total } = this.props
    
    return (
      <div>
        <ReactTable
          data={tasksList.length ? tasksList : []}
          columns={columns}
          minRows={3}
          showPageSizeOptions={false}
          defaultPageSize={3}
          multiSort={false}
          loading={isFetching}
          pages={Math.ceil(total / 3)}
          manual
          onFetchData={(state, instance) => {
            
            dispatch(receiveTasksList({
                params: {
                  sort_field: state.sorted[0] && state.sorted[0].id,
                  sort_direction: state.sorted[0] && state.sorted[0].desc ? 'desc' : 'asc',
                  page: state.page + 1
                }
              })
            );
          }}
        />
        {errorMessage ? <Block> {errorMessage.toString()} </Block> : ''}
      </div>
    )
  }
}

HomeContainer.propTypes = {}

function select(state) {
  return {
    isFetching: state.tasks.isFetching,
    tasksList: state.tasks.list,
    errorMessage: state.tasks.errorMessage,
    total: state.tasks.total
  }
}

export default connect(select)(HomeContainer)
