import React from 'react'
import content from '../data/dataContent.js'
import styled from 'styled-components'

const ContentBlock = styled.div`
  padding: 25px 50px;
  text-align: justify;
`

const Content = ({ currentId }) => {
  const contentView = () => {
    return content
      .filter(value => {
        return value.id === currentId
      })
      .map(value => {
        return <div key={value.id}>{value.text}</div>
      })
  }
  return <ContentBlock>{contentView()}</ContentBlock>
}

export default Content
