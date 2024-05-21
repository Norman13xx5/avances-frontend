import axios, { AxiosError } from 'axios'
import { coreApi } from '@/api/coreApi'
import type {
  DataUpdateProfile,
  ResponseUpdateProfile,
  ResponseLogOut,
  ResponseDataUser
} from '@u/services/interfaces/user'

export async function userId(id: string): Promise<ResponseDataUser> {
  try {
    const response = await coreApi().get(`user/${id}`)
    return response
  } catch (error: unknown) {
    return {
      message: 'Error al iniciar sesión, verifique sus credenciales',
      status: 404
    }
  }
}

export async function updateProfile(payload: DataUpdateProfile): Promise<ResponseUpdateProfile> {
  try {
    const { id } = payload
    const response = await coreApi().put(`user/${id}`, payload)

    return {
      message: response.data.message,
      status: response.data.status
    }
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError
      if (axiosError.response?.status === 404) {
        return {
          message: 'Usuario no encontrado',
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

export async function logOut(): Promise<ResponseLogOut> {
  try {
    const response = await coreApi().post('logout')

    return {
      message: response.data.message,
      status: response.status
    }
  } catch (error: unknown) {
    return {
      message: 'Error al hacer cerrar sesión',
      status: 500
    }
  }
}
