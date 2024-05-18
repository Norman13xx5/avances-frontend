import { coreApi } from '@/api/coreApi'
import type {
  DataGetHistoriesPatient,
  ResponseGetHistoriesPatient
} from '@h/services/interfaces/history'

export async function getHistoryPatient(
  payload: DataGetHistoriesPatient
): Promise<ResponseGetHistoriesPatient | null> {
  try {
    const response = await coreApi().get(`histories/${payload.patient_id}`)
    return response.data as ResponseGetHistoriesPatient
  } catch (error: unknown) {
    return null
  }
}
