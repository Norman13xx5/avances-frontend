import axios from 'axios'
import { useSharedStore } from '@s/store'

export const coreApi = () => {
  const shared = useSharedStore()

  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${shared.token}`
  }

  return axios.create({
    baseURL: shared.serverApiUrl,
    headers
  })
}
