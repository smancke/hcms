import { combineReducers } from 'redux'

function doNothingReducer(types) {
  return (state = {}, action) => {
    switch (action.type) {
        default:
            return state
        }
    }
}

export default doNothingReducer

//const rootReducer = combineReducers(
//  {
    //notifications: notificationsReducer,
//  }
//)
//
//export default rootReducer
