import axios, { AxiosError } from 'axios'
import { coreApi } from '@/api/coreApi'
import type {
  DataUpdateHistory,
  ResponseUpdateHistory
} from '../../history/services/interfaces/history'

export async function updateHistory(payload: DataUpdateHistory): Promise<ResponseUpdateHistory> {
  try {
    const { id, ...updateData } = payload
    const response = await coreApi().put(`histories/${id}`, updateData)

    return {
      message: response.data.message,
      status: response.data.status
    }
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError
      if (axiosError.response?.status === 403) {
        return {
          message: 'La contraseña no ha sido modificada',
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
