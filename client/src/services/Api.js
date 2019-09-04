// Imports
import axios from 'axios' // Import axios to allow us to easily make http requests

// Exports
export default () => {
  // return a new axios object that points to our api
  return axios.create({
    baseURL: 'http://localhost:8081/'
  })
}
