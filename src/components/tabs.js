import React from 'react'
import styled from 'styled-components'

const MenuItem = styled.div`
  height: 50px;
  font-size: 15px;
  font-family: 'Arial';
  text-align: center;
  line-height: 50px;
  display: inline-block;
  padding: 0 25px;
  box-sizing: border-box;
  cursor: pointer;

  &:hover {
    border-bottom: 2px solid #3591fb;
    color: #3591fb;
    box-sizing: border-box;
  }
`

const Tab = ({ onClick, label }) => {
  return <MenuItem onClick={onClick}>{label}</MenuItem>
}

export default Tab
