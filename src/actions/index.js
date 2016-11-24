import { createAction } from 'redux-actions'

export const fetchPostsRequest = createAction('FETCH_POSTS_REQUEST')
export const fetchPostsSuccess = createAction('FETCH_POSTS_SUCCESS')
export const fetchPostsFailure = createAction('FETCH_POSTS_FAILURE')

export const createPostRequest = createAction('CREATE_POST_REQUEST')
export const createPostSuccess = createAction('CREATE_POST_SUCCESS')
export const createPostFailure = createAction('CREATE_POST_FAILURE')

export const fetchPostRequest = createAction('FETCH_POST_REQUEST')
export const fetchPostSuccess = createAction('FETCH_POST_SUCCESS')
export const fetchPostFailure = createAction('FETCH_POST_FAILURE')

export const updatePostRequest = createAction('UPDATE_POST_REQUEST')
export const updatePostSuccess = createAction('UPDATE_POST_SUCCESS')
export const updatePostFailure = createAction('UPDATE_POST_FAILURE')

export const deletePostRequest = createAction('DELETE_POST_REQUEST')
export const deletePostSuccess = createAction('DELETE_POST_SUCCESS')
export const deletePostFailure = createAction('DELETE_POST_FAILURE')
