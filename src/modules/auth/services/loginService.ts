import axios, { AxiosError } from 'axios'
import { coreApi } from '@/api/coreApi'
import type { ResponseLogin, DataLogin } from './interfaces/authServices'

export async function loginService(payload: DataLogin): Promise<ResponseLogin> {
  try {
    const response = await coreApi().post('login', payload)

    return {
      message: response.data.message,
      authorization: response.data.authorization,
      status: response.data.status
    }
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError
      if (axiosError.response?.status === 403) {
        return {
          message: 'La contraseña no ha sido modificada',
          authorization: (axiosError.response?.data as any)?.authorization,
          status: axiosError.response?.status
        }
      }
    }
    return {
      message: 'Error al iniciar sesión, verifique sus credenciales',
      status: 500
    }
  }
}
