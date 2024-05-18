// import axios, { AxiosError } from 'axios'
import { coreApi } from '@/api/coreApi'
import type { ResponseCreateHistory, DataCreateHistory } from '@h/services/interfaces/history'

export async function createHistory(payload: DataCreateHistory): Promise<ResponseCreateHistory> {
  try {
    const response = await coreApi().put('histories', payload)

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
