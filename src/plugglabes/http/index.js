import { api } from 'support'
import axios from 'axios'

export const http = axios.create({
  baseURL: api
})

export default function install (Vue, { store, router }) {
  Object.defineProperty(Vue.prototype, '$http', {
    get: () => http
  })
}
