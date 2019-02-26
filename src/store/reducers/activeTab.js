const activeTab = (state = {}, action) => {
  switch (action.type) {
    case 'ACTIVE_TAB':
      return { id: action.payload }
    default:
      return { id: 0 }
  }
}

export default activeTab
