import React from 'react'

const Tab = ({ onClick, label }) => {
  return (
    <div className='tab' onClick={onClick}>
      {label}
    </div>
  )
}

export default Tab
