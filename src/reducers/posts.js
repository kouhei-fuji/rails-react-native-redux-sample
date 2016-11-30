import { handleActions } from 'redux-actions'
import {
  fetchPostsRequest, fetchPostsSuccess, fetchPostsFailure,
  createPostRequest, createPostSuccess, createPostFailure,
  deletePostRequest, deletePostSuccess, deletePostFailure,
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

  [createPostRequest]: (state, action) => ({
    ...state,
    isRequesting: true,
  }),

  [createPostSuccess]: (state, action) => ({
    ...state,
    isRequesting: false,
    data: state.data.concat([action.payload]),
  }),

  [createPostFailure]: (state, action) => ({
    ...state,
    isRequesting: false,
    // [TODO] Errors
  }),

  [deletePostRequest]: (state, action) => ({
    ...state,
    isRequesting: true,
  }),

  [deletePostSuccess]: (state, action) => ({
    ...state,
    isRequesting: false,
    data: (state.data || []).filter(post => post && post.id != action.payload),
  }),

  [deletePostFailure]: (state, action) => ({
    ...state,
    isRequesting: false,
    // [TODO] Errors
  }),
}, initialState)

export default posts
