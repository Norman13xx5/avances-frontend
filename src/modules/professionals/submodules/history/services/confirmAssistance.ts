import { coreApi } from '@/api/coreApi'
import type {
  DataConfirmAssistance,
  ResponseConfirmAssistance
} from '@prh/services/interfaces/history'

export async function confirmAssistance(
  payload: DataConfirmAssistance
): Promise<ResponseConfirmAssistance | null> {
  try {
    const response = await coreApi().get(`confirmassistance/${payload.id}`)
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
