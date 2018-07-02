import React from 'react'

const initialState = {
    good: 0,
    ok: 0,
    bad: 0
  }

const emptyState = {
  good: 0,
  ok: 0,
  bad: 0
}
  
  const counterReducer = (state = initialState, action) => {
    console.log(action.type, state)
    var newState = JSON.parse(JSON.stringify(state))
    console.log(newState)
    switch (action.type) {
      case "GOOD":
        newState.good += 1
        return newState
      case 'OK':
        newState.ok += 1
        return newState
      case 'BAD':
        newState.bad += 1
        return newState
      case 'ZERO':
        return emptyState
      default:
        break;
    }
    return state
  }
  
  export default counterReducer