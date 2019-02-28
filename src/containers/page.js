import React from 'react'
import { connect } from 'react-redux'
import Tab from '../components/tabs'
import Content from '../components/content'
import { tabAction } from '../store/actions/activeTabAction'
import tabs from '../data/dataTabs.js'
import styled from 'styled-components'

const Menu = styled.div`
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #eaebec;
  box-sizing: border-box;
`

const Page = ({ tabActionСlick, content, active: { id: activeId } }) => {
  const menu = () => {
    return tabs.map(tabs => {
      return <Tab label={tabs.text} onClick={() => tabActionСlick(tabs.id)} key={tabs.id} />
    })
  }
  return (
    <div>
      <Menu>{menu()}</Menu>
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
