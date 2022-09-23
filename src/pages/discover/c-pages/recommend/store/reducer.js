import  { Map } from 'immutable'

import * as actionTypes from "./constants"

const defaultState = Map({
  topBanners: []
})

function reducer( state = defaultState, action) {
  
  switch(action.type) {
    case actionTypes.CHANGE_TOP_BANNERS:
      console.log(action.topBanners)
    return state.set("topBanners",action.topBanners)
  
    default :
    return state
  }
}

export default reducer