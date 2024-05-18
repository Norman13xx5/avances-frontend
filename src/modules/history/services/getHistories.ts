import { coreApi } from '@/api/coreApi'
import type { DataGetHistories, ResponseGetHistories } from '@h/services/interfaces/history'

export async function getHistories(
  payload: DataGetHistories
): Promise<ResponseGetHistories | null> {
  try {
    const response = await coreApi().get(`histories/${payload}`)
    return response.data as ResponseGetHistories
  } catch (error: unknown) {
    return null
  }
}
