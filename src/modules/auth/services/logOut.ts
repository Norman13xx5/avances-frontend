import { coreApi } from '@/api/coreApi'
import type { Respose } from './interfaces/authServices'

export async function logOut(): Promise<Respose> {
  try {
    const response = await coreApi().post('logout')
    return {
      message: response.data.message,
      status: response.data.status
    }
  } catch (error: unknown) {
    return {
      message: 'Error al iniciar sesión, verifique sus credenciales',
      status: 500
    }
  }
}
