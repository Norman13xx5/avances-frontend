import { coreApi } from '@/api/coreApi'
import type { ResponseGetHistories } from '@prh/services/interfaces/history'

export async function getHistories(id: string): Promise<ResponseGetHistories | null> {
  try {
    const response = await coreApi().get(`histories/${id}`)
    return response.data as ResponseGetHistories
  } catch (error: unknown) {
    return null
  }
}
