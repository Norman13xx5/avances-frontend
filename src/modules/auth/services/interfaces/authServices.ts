export interface ResponseLogin {
  message: string
  typeUser: string
  authorization?: Authorization
  status: number
}

interface Authorization {
  token: string
  type: string
  identification_number?: string
}

export interface DataLogin {
  identification_number: string
  password: string
  type: number
}

export interface DataChangeProfile {
  identification_number: string
  first_name: string
  last_name: string
  email: string
  phone_number: string
  location: string
  password: string
  type: number
}

export interface DataChangePassword {
  identification_number: string
  password: string
}

export interface Respose {
  message: string
  status: number
}
