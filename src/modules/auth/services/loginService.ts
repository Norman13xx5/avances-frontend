import axios, { AxiosError } from 'axios'
import { coreApi } from '@/api/coreApi'
import type { ResponseLogin, DataLogin } from '@a/services/interfaces/authServices'

export async function loginService(payload: DataLogin): Promise<ResponseLogin> {
  try {
    const response = await coreApi().post('login', payload)

    return {
      message: response.data.message,
      typeUser: response.data.typeUser,
      authorization: response.data.authorization,
      status: response.status
    }
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError
      if (axiosError.response?.status === 403) {
        console.log(axiosError.response?.data)
        return {
          message: 'La contraseña no ha sido modificada',
          typeUser: (axiosError.response?.data as any)?.typeUser,
          authorization: (axiosError.response?.data as any)?.authorization,
          status: axiosError.response?.status
        }
      }
    }
    return {
      message: 'Error al iniciar sesión, verifique sus credenciales',
      typeUser: '',
      status: 500
    }
  }
}
