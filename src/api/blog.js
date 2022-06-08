import axios from 'axios'

// const blog = axios.create({
//   baseURL: '/api/blog',
//   timeout: 3000
// })

export const getBlogDigest = () => axios({ url: 'http://127.0.0.1:7070/blog/digest', method: 'get' })
