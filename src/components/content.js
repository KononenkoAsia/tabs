import React from 'react'
import { connect } from 'react-redux'

const Content = props => {
  const contentView = () => {
    return props.content
      .filter(value => {
        return value.id === props.currentId
      })
      .map(value => {
        return (
          <div key={value.id} className='asyablya'>
            {value.text}
          </div>
        )
      })
  }
  return <div className='content'>{contentView()}</div>
}
const mapStateToProps = state => {
  return {
    content: state.content
  }
}

export default connect(mapStateToProps)(Content)
