import React from 'react'
import { connect } from 'react-redux'
import Tab from '../components/tabs'
import Content from '../components/content'
import { tabAction } from '../store/actions/activeTabAction'
import tabs from '../data/dataTabs.js'

const Page = ({ tabActionСlick, content, active: { id: activeId } }) => {
  const menu = () => {
    return tabs.map(tabs => {
      return <Tab label={tabs.text} onClick={() => tabActionСlick(tabs.id)} key={tabs.id} />
    })
  }
  return (
    <div>
      <div className='menu'>{menu()}</div>
      <Content currentId={activeId} />
      {content}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    active: state.activeTab
  }
}

const mapDispatchToProps = dispatch => ({
  tabActionСlick: id => dispatch(tabAction(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page)
