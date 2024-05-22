// import axios, { AxiosError } from 'axios'
import { coreApi } from '@/api/coreApi'
import type { DataCreateHistory, ResponseCreateHistory } from '@pah/services/interfaces/history'

export async function createHistory(payload: DataCreateHistory): Promise<ResponseCreateHistory> {
  try {
    const response = await coreApi().post('histories', payload)

    return {
      message: response.data.message,
      status: response.data.status
    }
  } catch (error: unknown) {
    return {
      message: 'Error al crear historial',
      status: 500
    }
  }
}
