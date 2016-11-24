import axios from 'axios'

// axios global config
axios.defaults.baseURL = 'http://localhost:3000'
axios.defaults.headers.post['Content-Type'] = 'application/json'

export const fetchRoot = config => axios.get('/', config)
