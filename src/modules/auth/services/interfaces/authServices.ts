export interface ResponseLogin {
  message: string
  authorization?: Authorization
  status: number
}

interface Authorization {
  token: string
  type: string
}

export interface DataLogin {
  identification_number: string
  password: string
  type: number
}
