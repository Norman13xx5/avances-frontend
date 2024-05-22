export interface DataUpdateProfile {
  id: number
  identification_number: string
  first_name: string
  last_name: string
  email: string
  phone_number: string
  location: string
  password: string
  type: number
}

export interface ResponseUpdateProfile {
  message: string
  status: number
}

export interface ResponseLogOut {
  message: string
  status: number
}

export interface ResponseDataUser {
  data?: {
    id?: number
    identification_number?: string
    first_name?: string
    last_name?: string
    email?: string
    phone_number?: string
    location?: string
    type?: number
  }
  message?: string
  status?: number
}
