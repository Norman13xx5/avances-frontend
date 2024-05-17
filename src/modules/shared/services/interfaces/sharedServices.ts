export interface Response {
  message: string
  data?: Data
  status: number
}

interface Data {
  id: number
  identification_number: string
  first_name: string
  last_name: string
  email: string
  phone_number: string
  location: string
  type: number
  created_at: string
  updated_at: string
}
