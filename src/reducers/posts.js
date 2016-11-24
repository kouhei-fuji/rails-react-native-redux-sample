import { handleActions } from 'redux-actions'
import {
  fetchPostsRequest, fetchPostsSuccess, fetchPostsFailure,
} from '../actions'

const initialState = {
  isRequesting: false,
  data: [],
}

const posts = handleActions({
  [fetchPostsRequest]: (state, action) => ({
    ...state,
    isRequesting: true,
  }),

  [fetchPostsSuccess]: (state, action) => ({
    ...state,
    isRequesting: false,
    data: action.payload,
  }),

  [fetchPostsFailure]: (state, action) => ({
    ...state,
    isRequesting: false,
    // [TODO] Errors
  }),
}, initialState)

export default posts
