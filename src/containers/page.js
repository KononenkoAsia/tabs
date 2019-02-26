import React from 'react'
import { connect } from 'react-redux'
import Tab from '../components/tabs'
import Content from '../components/content'
import { tabAction } from '../store/actions/activeTabAction'

const Page = props => {
  const menu = () => {
    return props.tabs.map(tabs => {
      return <Tab label={tabs.text} onClick={() => props.tabActionСlick(tabs.id)} key={tabs.id} />
    })
  }

  return (
    <div>
      <div className='menu'>{menu()}</div>
      <Content currentId={props.active.id} />
      {props.content}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    tabs: state.tabs,
    active: state.active
  }
}

const mapDispatchToProps = dispatch => ({
  tabActionСlick: id => dispatch(tabAction(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page)
