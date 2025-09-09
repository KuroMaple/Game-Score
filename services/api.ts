import axios from 'axios'

const ApiService =  {
  get: async (resource: string) => {
    const response = await axios.get(resource)
    return response.data
  },
  post: async (resource: string, body: any) => {
    const response = await axios.post(resource, body)
    return response.data
  }
}

export default ApiService