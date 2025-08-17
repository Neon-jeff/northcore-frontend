export interface LoginRequestBody {
    email: string;
    password: string;
}

export interface AuthSuccessResponse {
  token: string
  user: User
  details: string
}

export interface User {
  email: string
  first_name: string
  last_name: string
  phone_number: string
  trading_currency: string
  country: string
  address: string
  kyc_verified: boolean
  referral_code: string
  referral_count: number
  referral_bonus: number
  email_verified:boolean
  balance: number
}

export interface RegisterRequestBody {
  email: string
  password: string
  first_name: string
  last_name: string
  phone_number: string

}