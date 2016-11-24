import { takeEvery, takeLatest } from 'redux-saga'
import { take, put, call, fork, select } from 'redux-saga/effects'

import { api } from '../services'
import {
  fetchPostsRequest, fetchPostsSuccess, fetchPostsFailure,
  createPostRequest, createPostSuccess, createPostFailure,
  fetchPostRequest,  fetchPostSuccess,  fetchPostFailure,
  updatePostRequest, updatePostSuccess, updatePostFailure,
  deletePostRequest, deletePostSuccess, deletePostFailure,
} from '../actions'

function* handleFetchPostsRequest(action) {
  try {
    const { data } = yield call(api.fetchPosts)
    yield put(fetchPostsSuccess(data))
  } catch (error) {
    yield put(fetchPostsFailure(error))
  }
}

function* handleCreatePostRequest(action) {
  try {
    const { data } = yield call(api.createPost, action.payload)
    yield put(createPostSuccess(data))
  } catch (error) {
    yield put(createPostFailure(error))
  }
}

function* handleFetchPostRequest(action) {
  try {
    const { data } = yield call(api.fetchPost, action.payload)
    yield put(fetchPostSuccess(data))
  } catch (error) {
    yield put(fetchPostFailure(error))
  }
}

function* handleUpdatePostRequest(action) {
  try {
    const { data } = yield call(api.updatePost, action.payload)
    yield put(updatePostSuccess(data))
  } catch (error) {
    yield put(updatePostFailure(error))
  }
}

function* handleDeletePostRequest(action) {
  try {
    yield call(api.deletePost, action.payload)
    yield put(deletePostSuccess(action.payload))
  } catch (error) {
    yield put(deletePostFailure(error))
  }
}

export default function* rootSaga() {
  yield [
    takeLatest(fetchPostsRequest.toString(), handleFetchPostsRequest),
    takeLatest(createPostRequest.toString(), handleCreatePostRequest),
    takeLatest(fetchPostRequest.toString(),  handleFetchPostRequest),
    takeLatest(updatePostRequest.toString(), handleUpdatePostRequest),
    takeLatest(deletePostRequest.toString(), handleDeletePostRequest),
  ]
}
