import axios from 'axios'

const article = axios.create({
  baseURL: '/article',
  timeout: 3000
})

export const getArticleDigest = () => article({ url: '/digest', method: 'get' })

export const getArticel = id => article({ url: `/gainArticle/${id}`, method: 'get' })
