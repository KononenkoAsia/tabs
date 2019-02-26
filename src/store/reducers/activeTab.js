const active = (state = {}, action) => {
  switch (action.type) {
    case 'ACTIVE_TAB':
      return { id: action.id }
    default:
      return { id: 0 }
  }
}

export default active
