import axios from 'axios'

const ApiService =  {
  get: async (resource: string, config?: any) => {
    const response = await axios.get(resource, config)
    return response.data
  },
  post: async (resource: string, body: any) => {
    const response = await axios.post(resource, body)
    return response.data
  }
}

export default ApiService