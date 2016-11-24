import { combineReducers } from 'redux'

import scene from './scene'
import posts from './posts'
import post from './post'

const rootReducer = combineReducers({
  scene,
  posts,
  post,
})

export default rootReducer
