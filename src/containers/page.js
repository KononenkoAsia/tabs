import React from 'react'
import { connect } from 'react-redux'
import Tab from '../components/tabs'
import Content from '../components/content'

const Page = props => {
  const menu = () => {
    return props.tabs.map(tabs => {
      return <Tab label={tabs.text} key={tabs.id} />
    })
  }

  return (
    <div>
      <div className='menu'>{menu()}</div>
      <Content />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    tabs: state.tabs,
    content: state.content
  }
}

export default connect(mapStateToProps)(Page)
