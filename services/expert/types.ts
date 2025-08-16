export interface ExpertResponse {
  experts: Experts[]
}

export interface Experts {
  id: number
  name: string
  avatar: string
  created_at: string
  profit_share: number
  total_profit: number
  win_rate: number
  followers: number
  followers_profit_average: number
  all_time_profit: number
  minimum_investment: number
  preferred_currency: string
  market_domain: string
}