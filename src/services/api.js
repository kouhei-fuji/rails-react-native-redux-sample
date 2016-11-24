import axios from 'axios'

// axios global config
axios.defaults.baseURL = 'http://localhost:3000'
axios.defaults.headers.post['Content-Type'] = 'application/json'

export const fetchPosts = () => axios.get('/posts')
export const createPost = data => axios.post('/posts', data)
export const fetchPost = id => axios.get(`/posts/${id}`)
export const updatePost = ({ id, data }) => axios.put(`/posts/${id}`, data)
export const deletePost = id => axios.delete(`/posts/${id}`)
