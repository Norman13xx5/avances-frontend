import { onBeforeMount } from 'vue'
import { useRouter } from 'vue-router'
import { useSharedStore } from '@s/store'
import { dataSesion } from '@s/services'

export function useShared() {
  const router = useRouter()
  const shared = useSharedStore()

  const autoLogin = async (id: string) => {
    const response = await dataSesion(id)

    return response
  }

  onBeforeMount(() => {
    const token = localStorage.getItem('token')
    if (token === null) {
      router.push({ name: 'auth-login' })
    } else if (shared.getToken === '') {
      shared.setToken(token)
    }
  })

  return {
    autoLogin
  }
}
