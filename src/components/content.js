import React from 'react'
import content from '../data/dataContent.js'

const Content = props => {
  const contentView = () => {
    return content
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

export default Content
