import { handleActions } from 'redux-actions'
import {
  fetchPostRequest,  fetchPostSuccess,  fetchPostFailure,
  updatePostRequest, updatePostSuccess, updatePostFailure,
} from '../actions'

const initialState = {
  isRequesting: false,
  data: null,
}

const posts = handleActions({
  [fetchPostRequest]: (state, action) => ({
    ...state,
    isRequesting: true,
  }),

  [fetchPostSuccess]: (state, action) => ({
    ...state,
    isRequesting: false,
    data: action.payload,
  }),

  [fetchPostFailure]: (state, action) => ({
    ...state,
    isRequesting: false,
    // [TODO] Errors
  }),

  [updatePostRequest]: (state, action) => ({
    ...state,
    isRequesting: true,
  }),

  [updatePostSuccess]: (state, action) => ({
    ...state,
    isRequesting: false,
    data: action.payload,
  }),

  [updatePostFailure]: (state, action) => ({
    ...state,
    isRequesting: false,
    // [TODO] Errors
  }),
}, initialState)

export default posts
