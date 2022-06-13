import axios from 'axios'

const article = axios.create({
  baseURL: '/article',
  timeout: 3000
})

export const getArticleDigest = () => article({ url: '/digest', method: 'get' })

export const getArticel = id => article({ url: `/gainArticle/${id}`, method: 'get' })

export const postArticleDigest = data => article({ url: '/addArticleDegest', method: 'post', data })

export const postArticle = (post, title) => article({ url: '/addArticle', method: 'post', data: { post }, params: { title } })

export const updateArticle = (post, postDigest, articleId) => article({ url: '/updateArticle', method: 'post', data: { post, postDigest }, params: { articleId } })
