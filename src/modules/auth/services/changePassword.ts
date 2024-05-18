import { coreApi } from '@/api/coreApi'
import type { DataChangePassword, ResposeChangePassword } from './interfaces/authServices'

export async function changePassword(payload: DataChangePassword): Promise<ResposeChangePassword> {
  try {
    const response = await coreApi().post('resetpassword', payload)
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
