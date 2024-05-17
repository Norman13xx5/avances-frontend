import { coreApi } from '@/api/coreApi'
import type { Response } from './interfaces/sharedServices'

export async function dataSesion(id: string): Promise<Response> {
  try {
    const response = await coreApi().get(`dataSesion/${id}`)

    return {
      message: response.data.message,
      data: response.data.data,
      status: response.data.status
    }
  } catch (error: unknown) {
    return {
      message: 'Error al iniciar sesión, verifique sus credenciales',
      status: 500
    }
  }
}
