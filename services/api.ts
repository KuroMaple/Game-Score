import axios from 'axios'

const ApiService =  {
  get: (resource: string) => {
    return axios.get(resource)
  }
}

export default ApiService