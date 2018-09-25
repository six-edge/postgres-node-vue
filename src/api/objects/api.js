"use strict"

import axios from 'axios'

const client = axios.create({
  baseURL: 'http://localhost:5000/',
  json: true
})

export default {
  async execute (method, resource, data) {
    
    // inject the accessToken for each request
    // let accessToken = await Vue.prototype.$auth.getAccessToken()
    
    return client({
      method,
      url: resource,
      data,
      headers: {
        // Authorization: `Bearer ${accessToken}`
      }
    }).then(req => {
      return req.data
    })
  },
  getObjects () {
    return this.execute('get', '/objects')
  },
  getObject (id) {
    return this.execute('get', `/objects/${id}`)
  },
  createObject (data) {
    return this.execute('post', '/objects', data)
  },
  updateObject (id, data) {
    return this.execute('put', `/objects/${id}`, data)
  },
  deleteObject (id) {
    return this.execute('delete', `/objects/${id}`)
  }
}