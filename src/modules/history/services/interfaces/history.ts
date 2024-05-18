export interface DataCreateHistory {
  patient_id: number
  patient_info: string
  date_time: string
  patient_status: string
  medical_history: string
  final_evolution: string
  professional_concept: string
  recommendations: string
}

export interface ResponseCreateHistory {
  message: string
  status: number
}

export interface DataGetHistories {
  professional_id: number
}

export interface ResponseGetHistories {
  id: number
  patient_id: number
  professional_id: number
  patient_info: string
  date_time: string
  consecutive_number: number
  patient_status: string
  medical_history: string
  final_evolution: string
  professional_concept: string
  recommendations: string
  assistance: boolean
  deleted_at: string
  created_at: string
  updated_at: string
  patient_one: string
  professional_one: string
  message?: string
  status?: number
}

export interface DataConfirmAssistance {
  id: number
  assistance: boolean
}

export interface ResponseConfirmAssistance {
  message: string
  status: number
}

export interface DataGetHistoriesPatient {
  patient_id: number
}

export interface ResponseGetHistoriesPatient {
  id: number
  patient_id: number
  professional_id: number
  patient_info: string
  date_time: string
  consecutive_number: number
  patient_status: string
  medical_history: string
  final_evolution: string
  professional_concept: string
  recommendations: string
  assistance: boolean
  deleted_at: string
  created_at: string
  updated_at: string
  patient_one: string
  professional_one: string
  message?: string
  status?: number
}

export interface DataUpdateHistory {
  id: number
  patient_info: string
  date_time: string
  patient_status: string
  medical_history: string
  final_evolution: string
  professional_concept: string
  recommendations: string
}

export interface ResponseUpdateHistory {
  message: string
  status: number
}
