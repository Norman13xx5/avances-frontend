import { coreApi } from '@/api/coreApi'
import type {
  ResponseGetHistories,
  ResponseConfirmAssistance
} from '@pah/services/interfaces/history'

export async function getHistories(id: string): Promise<ResponseGetHistories | null> {
  try {
    const response = await coreApi().get(`historypatient/${id}`)
    return response.data as ResponseGetHistories
  } catch (error: unknown) {
    return null
  }
}

export async function confirmAssistance(id: number): Promise<ResponseConfirmAssistance> {
  try {
    const response = await coreApi().patch(`confirmassistance/${id}`)
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
